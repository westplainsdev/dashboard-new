var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {title: 'Express', home: true}
  res.render('index', data);
});

module.exports = router;
