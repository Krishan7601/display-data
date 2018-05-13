var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adsb', { title: 'ADS-B Data Display' });
});

module.exports = router;
