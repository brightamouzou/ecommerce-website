module.exports.interceptionFuntion = (value) => {
  return async (req, res) => {
    console.log(req.query);
    console.log(value);
    res.json({ message: "I reply to you from the intercepeted function" });
  };
};
