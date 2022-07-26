const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports=(req, res, next) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SCECRET);
    const userId = decodedToken.userId;
    if (!req.body ||  (req.body.userId && req.body.userId !== userId)) {
      throw "User ID non valable";
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message | "Requete non authentifiée" });
  }
};
