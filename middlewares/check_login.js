function isLogin(req, res, next) {
  console.log(req.session);
  if (req.session.userId) {
    return true;
  } else {
    return false;
  }
}

function checkLogin(req, res, next) {
  if (!isLogin(req, res, next)) {
    res.redirect('/users/login');
  } else {
    next();
  }
}

function afterLogin(req, res, next) {
  if (req.session.userId) {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = { checkLogin, afterLogin, isLogin };
