const bcrypt = require("bcrypt");
const User = require("../models/User");

// User Registration
const registerUser = async (req, res) => {
  const { userInfo, addressInfo, educationInfo } = req.body;
  console.log("==",req.body); 

  try {
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    userInfo.password = hashedPassword;

    const newUser = new User({
      userInfo,
      addressInfo,
      educationInfo,
    });
    console.log("newUser===",newUser); 
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" ,data:newUser});
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserDetails = async (req, res) => {
  const userId = req.userId; 
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User details fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Error in getUserDetails:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const logoutUser = async (req, res) => {
    try {
   console.log("88888888888888888");
   
      res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ message: "Server error during logout" });
    }
  };
  
  module.exports = { registerUser,logoutUser,getUserDetails };
  
