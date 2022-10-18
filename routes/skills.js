var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
module.exports = router;
