const { Router } = require('express');
const rootController = require('../controllers/root.js');

const router = new Router();

router.get('/', rootController.index);

module.exports = router;
