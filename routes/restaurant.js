var express = require('express');
var YelpHTTP = require('../helpers/yelpHttp');
var router = express.Router();

router.get('/', function(req, res, next) {
  let restaurantId = req.query;
  YelpHTTP.getRestaurantPhotos().then(restaurantPhotos => {
    res.send(restaurantPhotos);
  })
})

module.exports = router;