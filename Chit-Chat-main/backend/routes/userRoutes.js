const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers"); // without brackets it was throwing error idk
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/").get(protect, allUsers);

module.exports = router;
