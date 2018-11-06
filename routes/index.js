var express = require('express');
var router = express.Router();
var YelpHTTP = require('../helpers/yelpHttp');

/* GET home page. */
router.get('/', function(req, res, next) {
  YelpHTTP.getRestaurants().then(restaurantsDefault => {
    res.send(restaurantsDefault);
  })
});

module.exports = router;
