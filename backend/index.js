const dotenv = require("dotenv");
dotenv.config();

/** Connect to MongoDB */
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

/** Node dependencies */
const path = require("path");

/** Express */
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = express.Router();

/** Middleware and Logging dependencies */
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

/** Socket IO */
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

/** Routes */
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

/** Routes Definitions */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

// /** Socket IO Connections and events */
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log("A user has connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

server.listen(8800, () => {
  console.log("Backend server is running!");
});
