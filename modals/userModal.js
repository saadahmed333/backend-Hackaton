const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
    {
      firstName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      phone: { type: Number, required: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  const Users = mongoose.model("Users", UsersSchema);
  
  module.exports = Users;
  