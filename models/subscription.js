const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      required: [true, "Email can't be blank"],
      unique: true,
      match: [/^\S+@\S+\.\S+/, 'Email is invalid'],
      maxlength: [50, 'An email address should be less than 50 characters'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Subscription', SubscriptionSchema)
