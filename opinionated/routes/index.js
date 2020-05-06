var express = require('express');
var router = express.Router();

router.get('/cats', function(req, res, next) {
  res.render('cats', { title: 'Express' });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
