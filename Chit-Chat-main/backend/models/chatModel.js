// what do you mean by schema in database?
// what is mongoose package?
// difference between no-sql and sql database. which is better
// what is scalabilty or scalable server

const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  // defining Model or Schema
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel); // instance of a Model
module.exports = Chat;
