// SERVER-SIDE JAVASCRIPT

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    mongoose = require('mongoose');

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// configure bodyParser (for handling data)
app.use(bodyParser.urlencoded({extended: true}));

// connect to mongodb
mongoose.connect('mongodb://localhost/catchphrasely');

// require `Phrase` model
var Phrase = require('./models/phrase').Phrase;

// STATIC ROUTES

// root (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// API ROUTES

// phrases index
app.get('/api/phrases', function (req, res) {
  // find all phrases in db
  Phrase.find(function (err, phrases) {
    // respond with all phrases or error
    if (err) {
      res.json(err);
    } else {
      res.json(phrases);
    }
  });
});

// create new phrase
app.post('/api/phrases', function (req, res) {
  // create new phrase with form data (`req.body`)
  var newPhrase = new Phrase({
    word: req.body.word,
    definition: req.body.definition
  });

  newPhrase.save(function (err, savedPhrase) {
    // respond with `savedPhrase` or error
    if (err) {
      res.json(err);
    } else {
      res.json(savedPhrase);
    }
  });
});

// update phrase
app.put('/api/phrases/:id', function (req, res) {

  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Phrase.findOne({_id: targetId}, function (err, foundPhrase) {
    console.log(foundPhrase);
    if (err) {
      res.json(err);
    } else {
      // update the phrase's word and definition
      foundPhrase.word = req.body.word;
      foundPhrase.definition = req.body.definition;

      foundPhrase.save(function (err, savedPhrase) {
        // respond with `savedPhrase` or error
        if (err) {
          res.json(err);
        } else {
          res.json(savedPhrase);
        }
      });
    }
  });
});

// delete phrase
app.delete('/api/phrases/:id', function (req, res) {
  
  // set the value of the id
  var targetId = req.params.id;

  Phrase.findOneAndRemove({_id: targetId}, function (err, deletedPhrase) {
    if (err) {
      res.json(err);
    } else {
      res.json(deletedPhrase);
    }
  });
});

// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});