
const jwt = require('jsonwebtoken');

require('dotenv').config()

exports.protect = async (req, res, next) => { 
  try {
    const token = req.cookies.jwt;
    if (!token) { 
      res.status(401).json({
        success: false,
        message: "Not authorized to access this route"
      })
    }

    // verify token 
    try {
      const decoded = jwt.verify(jwt,process.env.JWT_SECRET)
      console.log(decoded)
      req.user = decoded;
      next();
      
    } catch (error) {
      return res.status(401).json({
        success:false,
        message:"Token is invalid"
    })
    }
    
  } catch (error) {
    return res.status(401).json({
      success:false,
      message:"Unauthorized Something went wrong"
  })
  }
}