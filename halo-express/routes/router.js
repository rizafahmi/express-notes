const { Router } = require('express');
const router = new Router();

router.get('*', (req, res) => {
  res.render('index', { text: 'Halo' });
});

module.exports = router;
