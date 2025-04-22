const jwt = require("jsonwebtoken");

function generateToken(payload, secretKey, expiresIn) {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}


const payload = { userId: 123, username: "exampleUser" };
const secretKey = "yourSecretKey";
const expiresIn = "1h"; 

const token = generateToken(payload, secretKey, expiresIn);
console.log("Generated Token:", token);
