// middlewares/authMiddleware.js
module.exports = (req, res, next) => {
  // Example authentication middleware
  const token = req.headers["authorization"];
  if (token) {
    // Validate token (pseudo-code)
    // if (isValidToken(token)) {
    next();
    // } else {
    //   res.status(403).send('Forbidden');
    // }
  } else {
    res.status(401).send("Unauthorized");
  }
};
