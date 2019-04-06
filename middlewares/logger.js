function logger(req, res, next) {
  console.info(`${req.method} ${req.url} | ${new Date()}`);
  next();
}

module.exports = logger;
