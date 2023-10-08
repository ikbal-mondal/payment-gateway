const httpStatus = require("http-status");
const {
  createPaymentDB,
  getAllPaymentDB,
  deleteSinglePaymentDB,
  getAllPaymentForSubAdminDB,
  getTotalClickDB,
} = require("./payment.service");

const createPayment = async (req, res) => {
  const user = req.body;
  const result = await createPaymentDB(user);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment successfully!",
    data: result,
  });
};

const getAllPayment = async (req, res) => {
  const type = req.params.type;
  const result = await getAllPaymentDB(type);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment get successfully!",
    data: result,
  });
};

const getAllPaymentForSubAdmin = async (req, res) => {
  const info = req.params.type;
  const id = info.split("+")[0];
  const type = info.split("+")[1];

  const result = await getAllPaymentForSubAdminDB(id, type);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment get successfully!",
    data: result,
  });
};

const deleteSinglePayment = async (req, res) => {
  const id = req.params.id;
  const result = await deleteSinglePaymentDB(id);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Deleted Successfully.",
    data: result,
  });
};

const getTotalClick = async (req, res) => {
  const type = req.params.type;
  const result = await getTotalClickDB(type);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment get successfully!",
    data: result,
  });
};

module.exports = {
  createPayment,
  getAllPayment,
  deleteSinglePayment,
  getAllPaymentForSubAdmin,
  getTotalClick,
};
