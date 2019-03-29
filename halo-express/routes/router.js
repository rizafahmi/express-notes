const { Router } = require('express');
const rootController = require('../controllers/root.js');
const noteController = require('../controllers/note.js');

const router = new Router();

router.get('/', rootController.index);
router.get('/notes/create', noteController.create);
router.post('/notes', noteController.add)

module.exports = router;
