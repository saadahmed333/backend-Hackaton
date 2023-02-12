
const AdminUser = require('../modals/adminUser')
const addAdmin = async (req,res) => {
    try {
        const user = new AdminUser(req.body);
    console.log("req.body", req.body);
    const response = await user.save();
    console.log("res", response);
    res.status(200).send({ status: 200, message: "user added successfuly" });
    }
    catch (e) {
        res.status(401).send({ status: 401, message: "email address are same" });
    }
}
module.exports = addAdmin