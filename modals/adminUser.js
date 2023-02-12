const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    },
  );
  
  const AdminUser = mongoose.model("adminUser", UsersSchema);
  
  module.exports = AdminUser;
  