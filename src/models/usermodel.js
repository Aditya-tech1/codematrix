import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  isteacher: {
    type: Boolean,
    default: false,
  },
  class_stu: {
    type: String,
    required: true
  },
  disability: {
    type: String,
    default: "None",
  },
  password: {
    type: String,
    required: true,
  },
  favsub: {
    type: String,
    required: true,
    default: "None",
  },
  what : {
    type: String,
    required: true,
    default: "None",
  },
  why: {
    type: String,
    required: true,
    default: "None",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists to avoid overwriting it during hot reloads
export default mongoose.models.User || mongoose.model("User", UserSchema);
