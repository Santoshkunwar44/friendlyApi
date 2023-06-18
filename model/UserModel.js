const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "firstName is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
     isVerified:{
      type:Boolean,
      default:false,
    },  

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Test", UserSchema);
