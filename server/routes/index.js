/*
index.js 
Author: Cindy Diaz
Webiste: Favourite People Website (http://midterm-cindydiaz.azurewebsites.net/)
This file includes all the routing for our website, handle get and post request
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing' });
});
/* GET People Page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'People' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
/* POST contac form*/
router.post('/send', function (req, res, next) {
    res.redirect('/'); //Handle post request for now redirecting to home page
});
module.exports = router;
