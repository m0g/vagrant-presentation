var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', { name: String });
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  var kitty = new User({ name: 'Zildjian' });
  kitty.save(function (err) {
    res.json(kitty);
  });


});

module.exports = router;
