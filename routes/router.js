const { Router } = require('express');
const rootController = require('../controllers/root.js');
const noteController = require('../controllers/note.js');
const { checkLogin } = require('../middlewares/check_login.js');

const router = new Router();

// TODO: Refactor this, moves notes
router.get('/', checkLogin, rootController.index);
router.get('/notes/create', checkLogin, noteController.create);
router.post('/notes', checkLogin, noteController.add);
router.get('/notes/:id/edit', checkLogin, noteController.edit);
router.put('/notes/:id/edit', checkLogin, noteController.update);
router.delete('/notes/:id/remove', checkLogin, noteController.remove);

module.exports = router;
