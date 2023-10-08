const httpStatus = require("http-status");
const { verifyJwtService } = require("./jwt.service");

const verifyJwt = async (req, res) => {
  const { token } = req.body;

  const result = await verifyJwtService(token);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
};

module.exports = {
  verifyJwt,
};
