var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {title: 'Express - About', about: true}
  res.render('about', data);
});

module.exports = router;
