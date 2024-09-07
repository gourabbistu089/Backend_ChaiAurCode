const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// @route   POST /signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);

  

    // Send JWT in a cookie
    res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 });

    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @route   POST /login
exports.login = async (req, res) => {
  const { email, password } = req.body;

    if(!email || !password){
      res.status(401).json({
        success:false,
        message:"Please provide email and password"
      })
    }
  
  try {
    const user = await User.findOne({ email });

    if(!user){
      res.status(401).json({
        success:false,
        message:"No user found "
      })
    }

    // Compare passwords
    const isMatch = password === user.password;
    if(!isMatch){
      res.status(401).json({
        success:false,
        message:"Incorrect password"
      })
    }
console.log(user)
    const token = generateToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @route   GET /logout
exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({ success: true, message: 'Logged out' });
};

// @route   GET /user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
