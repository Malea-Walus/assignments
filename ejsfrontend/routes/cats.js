var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cats', { title: 'Express', cat1: 'kitten' });
});

module.exports = router;
