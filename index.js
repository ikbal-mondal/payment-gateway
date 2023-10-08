const mongoose = require("mongoose");
const app = require("./app");


// Database connection
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://moviespapanet:dNZWegVAzKrNDCjG@cluster0.xlc7v4o.mongodb.net/payment-gateway?retryWrites=true&w=majority"
    );
    console.log("Database connection successful");

    app.listen(5000, () => {
      console.log(`Payment gateway listening on port ${5000}`);
    });

    app.get("/", (req, res) => {
      res.send({ isApiFoundV1: true  });
    });
  } catch {
    console.log("Failed to connect with database");
  }
}

main(); 



