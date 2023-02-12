const User = require("../modals/userModal");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (user.length) {
    if (user[0].password === password) {
      return res.status(200).send({ status: 200, message: "user found" });
    } else {
      return res.status(404).send({ status: 404, message: "user not found" });
    }
  } else {
    return res.status(404).send({ status: 404, message: "user not found" });
  }
};

module.exports = login;
