import mongoose, { Schema } from "mongoose";
import bcrtypt from "bcrypt";
import jwt from "jsonwebtoken";
import e from "express";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: trim,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: trim,
    },
    fullname: {
      type: String,
      required: true,
      trim: trim,
      index: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImg: {
      type: String, //cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// never used arrow function
userSchema.pre("save", async function (next) {
  if (!this.modified("password")) return next();
  this.password = bcrtypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrtypt.compare(password, this.password); // true or false
};

userSchema.method.generateAccessToken = function () {
  // short lived access token
  return jwt.sign(
    // payload
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    // secret
    process.env.ACCESS_TOKEN_SECRET,
    // expiry time
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES }
  );
};
userSchema.method.generateRefreshToken = function () {
  // short lived access token
  return jwt.sign(
    // payload
    {
      _id: this._id,
    },
    // secret
    process.env.REFRESH_TOKEN_SECRET,
    // expiry time
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES }
  );
};

export const User = mongoose.model("User", userSchema);
