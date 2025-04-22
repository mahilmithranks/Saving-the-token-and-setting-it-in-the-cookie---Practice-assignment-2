const jwt = require("jsonwebtoken");

function verifyToken(token, secretKey) {
  try {

    const decoded = jwt.verify(token, secretKey);
    console.log("Token is valid:", decoded);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.error("Token has expired.");
    } else {
      console.error("Invalid token:", err.message);
    }
  }
}


const token = "yourGeneratedTokenHere"; 
const secretKey = "yourSecretKey";

verifyToken(token, secretKey);
