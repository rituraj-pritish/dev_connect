module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({
      msg: 'You must Log in!'
    });
  }

  next();
};
