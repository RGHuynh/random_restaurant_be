require('dotenv').config();
const fetch = require('node-fetch')

const YELP_HTTP =  "https://api.yelp.com/v3";
const API_KEY = "Bearer " + process.env.YELP_API_KEY;
const BUSINESS_SEARCH = "/businesses/search?";
const TERM = "term=restaurant";
const RADIUS = "radius=30000";
var location = "location='New York'";

var params = {
  method: "GET",
  headers: {
    Authorization: API_KEY
  }
}

fetch(YELP_HTTP + BUSINESS_SEARCH + TERM + '&' + RADIUS + '&' + location, params).then(res => res.json()).then(data => { data.businesses.forEach(business => {console.log(business.name)})})
