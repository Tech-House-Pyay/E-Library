var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admins/home', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
  res.render('books/assign_cate');
});

module.exports = router;
