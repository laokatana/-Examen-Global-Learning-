const jwt = require("jsonwebtoken");

const generateToken = () => {
  const token = jwt.sign(
    {
      data: "here is the data",
    },
    process.env.SECRET
    //{ expiresIn: '1d' }
  );
  return token;
};

module.exports = generateToken;
