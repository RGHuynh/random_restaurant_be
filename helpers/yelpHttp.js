require('dotenv').config();
const fetch = require('node-fetch')

const YELP_HTTP =  "https://api.yelp.com/v3";
const API_KEY = "Bearer " + process.env.YELP_API_KEY;
const BUSINESS_SEARCH = "/businesses/search?";
const TERM = "term=restaurant";
const RADIUS = "radius=30000";
const LIMIT = "limit=6";
var location = "location='New York'";

var params = {
  method: "GET",
  headers: {
    Authorization: API_KEY
  }
}

module.exports.getRestaurants = function() {
  return fetch(YELP_HTTP + BUSINESS_SEARCH + TERM + '&' + RADIUS + '&' + location + '&' + LIMIT, params)
  .then(res => {return res.json()})
  .then(data => { 
    let restaurants = data.businesses.map(restaurant => {
      return ({
        "name": restaurant.name.replace(/\\/g, ''),
        "rating": restaurant.rating,
        "coordinates": restaurant.coordinates,
        "price": restaurant.price,
        "location": restaurant.location,
        "phone": restaurant.phone,
        "image": restaurant.image_url
      })
    })
    return restaurants;
  })
}

