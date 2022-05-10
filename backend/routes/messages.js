const router = require("express").Router();
const messageController = require("../controllers/message");

router.post("/", messageController.addMessage);
router.get("/:conversationId", messageController.getMessage);

module.exports = router;
