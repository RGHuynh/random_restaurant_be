var express = require('express');
var router = express.Router();
var YelpHTTP = require('../helpers/yelpHttp');
var cors = require('cors');

router.use(cors())

router.get('/', function(req, res, next) {
  YelpHTTP.getRestaurants().then(restaurantsDefault => {
    res.send(restaurantsDefault);
  })
});

module.exports = router;
