const httpStatus = require("http-status");
const { createUserDB, userLoginServiceDB } = require("./user.service");

const userLogin = async (req, res) => {
  const info = req.body;
  const result = await userLoginServiceDB(info);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
};

const createUser = async (req, res) => {
  const user = req.body;
  const result = await createUserDB(user);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully!",
    data: result,
  });
};

module.exports = {
  userLogin,
  createUser,
};
