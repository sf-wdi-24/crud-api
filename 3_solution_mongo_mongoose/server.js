// SERVER-SIDE JAVASCRIPT

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// configure bodyParser (for handling data)
app.use(bodyParser.urlencoded({extended: true}));

// connect to mongodb
mongoose.connect('mongodb://localhost/catchphrasely');

// require `Phrase` model
var Phrase = require('./models/phrase');

// STATIC ROUTES

// root (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// API ROUTES

// get all phrases
app.get('/api/phrases', function (req, res) {
  // find all phrases in db
  Phrase.find(function (err, phrases) {
    res.json(phrases);
  });
});

// create new phrase
app.post('/api/phrases', function (req, res) {
  // create new phrase with form data (`req.body`)
  var newPhrase = new Phrase({
    word: req.body.word,
    definition: req.body.definition
  });

  // save new phrase in db
  newPhrase.save(function (err, savedPhrase) {
    res.json(savedPhrase);
  });
});

// get one phrase
app.get('/api/phrases/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Phrase.findOne({_id: targetId}, function (err, foundPhrase) {
    res.json(foundPhrase);
  });
});

// update phrase
app.put('/api/phrases/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Phrase.findOne({_id: targetId}, function (err, foundPhrase) {
    // update the phrase's word and definition
    foundPhrase.word = req.body.word;
    foundPhrase.definition = req.body.definition;

    // save updated phrase in db
    foundPhrase.save(function (err, savedPhrase) {
      res.json(savedPhrase);
    });
  });
});

// delete phrase
app.delete('/api/phrases/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id and remove
  Phrase.findOneAndRemove({_id: targetId}, function (err, deletedPhrase) {
    res.json(deletedPhrase);
  });
});

// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});