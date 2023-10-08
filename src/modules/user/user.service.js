const { jwtToken } = require("../../shared/jwt");
const SubAdmin = require("../subAdmin/subAdmin.model");
const User = require("./user.model");

const userLoginServiceDB = async (user) => {
  let token;
  let role;
  const userAdminFound = await User.findOne(user);
  if (!userAdminFound) {
    const userSubAdminFound = await SubAdmin.findOne(user);
    if (userSubAdminFound) {
      token = jwtToken(user.email, "subAdmin");
      role = "subAdmin";
    }
  } else {
    token = jwtToken(user.email, "admin");
    role = "admin";
  }

  return { token, role };
};

const createUserDB = async (user) => {
  const createdUser = await User.create(user);
  return createdUser;
};

module.exports = {
  userLoginServiceDB,
  createUserDB,
};
