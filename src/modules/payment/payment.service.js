const SubAdmin = require("../subAdmin/subAdmin.model");
const Credit = require("./credit.model");
const Paypal = require("./paypal.model");

const createPaymentDB = async (info) => {
  if (info.type === "credit") {
    const createdPayment = await Credit.create(info);
    const findSubAdmin = await SubAdmin.findOne({ _id: info.referId });
    const increaseClick = await SubAdmin.updateOne(
      { _id: info.referId },
      {
        $set: {
          click: findSubAdmin.click + 1,

          creditClick: findSubAdmin.creditClick + 1,
        },
      }
    );
    return createdPayment;
  } else {
    const createdPayment = await Paypal.create(info);
    const findSubAdmin = await SubAdmin.findOne({ _id: info.referId });
    const increaseClick = await SubAdmin.updateOne(
      { _id: info.referId },
      {
        $set: {
          click: findSubAdmin.click + 1,
          paypalClick: findSubAdmin.paypalClick + 1,
        },
      }
    );
    return createdPayment;
  }
};

const getAllPaymentDB = async (info) => {
  if (info === "cardInfo") {
    const allPayment = await Credit.find({});
    return allPayment;
  } else if (info === "paypalInfo") {
    const allPayment = await Paypal.find({});
    return allPayment;
  }
  const all = await SubAdmin.find({});
  return all;
};

const deleteSinglePaymentDB = async (info) => {
  const creditDelete = await Credit.deleteOne({ _id: info });
  if (creditDelete.deletedCount) {
    return "Deleted Successfully";
  }
  const paypalDelete = await Paypal.deleteOne({ _id: info });
  if (paypalDelete.deletedCount) {
    return "Deleted Successfully";
  }
  const subAdminDelete = await SubAdmin.deleteOne({ _id: info });
  if (subAdminDelete.deletedCount) {
    return "Deleted Successfully";
  }
  return "Something Wrong";
};

const getAllPaymentForSubAdminDB = async (id, type) => {
  if (type === "cardInfo") {
    const allPayment = await Credit.find({ referId: id });
    return allPayment;
  } else if (type === "paypalInfo") {
    const allPayment = await Paypal.find({ referId: id });
    return allPayment;
  }
};

const getTotalClickDB = async (type) => {
  const allData = await SubAdmin.find({});
  let totalClick = 0;

  allData.forEach((info) => {
    if (type === "cardInfo") {
      totalClick = totalClick + info.creditClick;
    } else if (type === "paypalInfo") {
      totalClick = totalClick + info.paypalClick;
    }
  });

  return totalClick;
};

module.exports = {
  createPaymentDB,
  getAllPaymentDB,
  deleteSinglePaymentDB,
  getAllPaymentForSubAdminDB,
  getTotalClickDB,
};
