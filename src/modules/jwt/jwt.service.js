const jwt = require("jsonwebtoken");

const verifyJwtService = async (token) => {
  if (!token) {
    return "unauthorized access";
  } else {
    const decoded = jwt.verify(
      token,
      "00826f959a474c12978fd01f12ebce5681ff4e3b26cdccf77a56de8b7a561137ebddb7a32e5189548f13a3086f27039cc0959964d6b723ebc358bc2bbc24d19d",
      function (err, decoded) {
        if (err) {
          return "unauthorized access";
        } else {
          return decoded;
        }
      }
    );
    return { decoded };
  }
};

module.exports = {
  verifyJwtService,
};
