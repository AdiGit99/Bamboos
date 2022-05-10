const router = require("express").Router();
const conversationController = require("../controllers/conversation");

//new conv
router.post("/", conversationController.addConversation);
router.get("/:userId", conversationController.getConversations);
router.get(
  "/find/:firstUserId/:secondUserId",
  conversationController.getConversation
);

module.exports = router;
