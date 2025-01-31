const express = require("express");
const { registerUser, getUserDetails, logoutUser } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.get("/dashboard", verifyToken, getUserDetails);
router.post("/logout", logoutUser);

module.exports = router;
