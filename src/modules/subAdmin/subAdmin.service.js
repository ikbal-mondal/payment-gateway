const User = require("../user/user.model");
const SubAdmin = require("./subAdmin.model");

const createSubAdminDB = async (user) => {
  const findAdmin = await User.findOne({ email: user.email });
  if (!findAdmin) {
    const findSubAdmin = await SubAdmin.findOne({ email: user.email });
    if (!findSubAdmin) {
      const createdUser = await SubAdmin.create(user);
      return createdUser.link;
    } else {
      return "Email already registered";
    }
  } else {
    return "Email already registered";
  }
};

const getAllSubAdminDB = async (info) => {
  const result = await SubAdmin.find({});
  return result;
};

const linkCheckDB = async (id) => {
  const result = await SubAdmin.findOne({ _id: id });
  if (result) {
    return { isValid: true };
  } else {
    return { isValid: false };
  }
};

const getSingleSubAdminInfoDB = async (email) => {
  const result = await SubAdmin.findOne(
    { email: email },
    {
      name: 1,
      link: 1,
      creditClick: 1,
      paypalClick: 1,
    }
  );
  return result;
};
module.exports = {
  createSubAdminDB,
  getAllSubAdminDB,
  linkCheckDB,
  getSingleSubAdminInfoDB,
};
