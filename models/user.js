const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name can't be blank"],
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9]+$/,
        'User name is invalid, it should be alphanumeric',
      ],
      // Added the index: true options to username and email to optimize queries that use these fields.
      index: true,
      maxlength: [30, 'User name should be less than 30 characters'],
    },
    email: {
      type: String,
      required: [true, "Email can't be blank"],
      lowercase: true,
      match: [/^\S+@\S+\.\S+/, 'Email is invalid'],
      trim: true,
      unique: true,
      index: true,
      maxlength: [50, 'An email address should be less than 50 characters'],
    },
    password: {
      type: String,
      required: [true, "Password can't be blank"],
      maxlength: [20, 'A password should be less than 20 characters'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
