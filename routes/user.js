const { Router } = require('express');
const userController = require('../controllers/user.js');
const { checkLogin, afterLogin } = require('../middlewares/check_login.js');

const router = new Router();

router.get('/register', afterLogin, userController.register);
router.post('/register', afterLogin, userController.add);
router.get('/login', afterLogin, userController.login);
router.post('/login', afterLogin, userController.process_login);
router.get('/logout', checkLogin, userController.logout);

module.exports = router;
