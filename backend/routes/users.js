const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getUserByPhone,
  getUsers,
} = require("../controllers/user");
const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifyToken");

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);
router.get("/find/:phone", getUserByPhone);

module.exports = router;
