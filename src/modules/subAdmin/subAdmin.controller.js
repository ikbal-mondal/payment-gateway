const httpStatus = require("http-status");
const {
  createSubAdminDB,
  getAllSubAdminDB,
  linkCheckDB,
  getSingleSubAdminInfoDB,
} = require("./subAdmin.service");
const { verifyJwtService } = require("../jwt/jwt.service");

const createSubAdmin = async (req, res) => {
  const user = req.body;
  const result = await createSubAdminDB(user);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Sub admin created successfully!",
    data: result,
  });
};

const getAllSubAdmin = async (req, res) => {
  const result = await getAllSubAdminDB();

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "All sub admin get successfully!",
    data: result,
  });
};

const linkCheck = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await linkCheckDB(id);

    res.send({
      statusCode: httpStatus.OK,
      success: true,
      message: "Link Check successfully!",
      data: result,
    });
  } catch {
    res.send({
      statusCode: 404,
      success: false,
      message: "Link Check successfully!",
      data: { isValid: false },
    });
  }
};

const getSingleSubAdminInfo = async (req, res) => {
  const token = req.params.token;
  const verifyToken = await verifyJwtService(token);

  try {
    const result = await getSingleSubAdminInfoDB(verifyToken.decoded.email);

    res.send({
      statusCode: httpStatus.OK,
      success: true,
      message: "Sub admin info get successfully!",
      data: result,
    });
  } catch {
    res.send({
      statusCode: 404,
      success: false,
      message: "Sub admin info get failed!",
      data: {},
    });
  }
};

module.exports = {
  createSubAdmin,
  getAllSubAdmin,
  linkCheck,
  getSingleSubAdminInfo,
};
