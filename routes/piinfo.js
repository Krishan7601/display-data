var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('piinfo', { title: 'RPi Dashboard' });
});

module.exports = router;
