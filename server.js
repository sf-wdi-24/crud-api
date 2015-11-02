// require express and other modules
var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(cors());

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/crud-api'
);

// require models and seed data
var Book = require('./models/book'),
    Wine = require('./models/wine'),
    seedBooks = require('./seeds/books'),
    seedWines = require('./seeds/wines');


// API ROUTES

// get all books
app.get('/books', cors(), function (req, res) {
  // find all books in db
  Book.find(function (err, books) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(books);
    }
  });
});

// create new book
app.post('/books', cors(), function (req, res) {
  // create new book with form data (`req.body`)
  var newBook = new Book(req.body);

  // save new book in db
  newBook.save(function (err, savedBook) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(savedBook);
    }
  });
});

// get one book
app.get('/books/:id', cors(), function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;

  // find book in db by id
  Book.findOne({ _id: bookId }, function (err, foundBook) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(foundBook);
    }
  });
});

// update book
app.put('/books/:id', cors(), function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;

  // find book in db by id
  Book.findOne({ _id: bookId }, function (err, foundBook) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      // update the books's attributes
      foundBook.title = req.body.title;
      foundBook.author = req.body.author;
      foundBook.image = req.body.image;
      foundBook.releaseDate = req.body.releaseDate;

      // save updated book in db
      foundBook.save(function (err, savedBook) {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.json(savedBook);
        }
      });
    }
  });
});

// delete book
app.delete('/books/:id', cors(), function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;

  // find book in db by id and remove
  Book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(deletedBook);
    }
  });
});

// get all wines
app.get('/wines', cors(), function (req, res) {
  // find all wines in db
  Wine.find(function (err, wines) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(wines);
    }
  });
});

// create new wine
app.post('/wines', cors(), function (req, res) {
  // create new wine with form data (`req.body`)
  var newWine = new Wine(req.body);

  // save new book in db
  newWine.save(function (err, savedWine) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(savedWine);
    }
  });
});

// get one wine
app.get('/wines/:id', cors(), function (req, res) {
  // get wine id from url params (`req.params`)
  var wineId = req.params.id;

  // find wine in db by id
  Wine.findOne({ _id: wineId }, function (err, foundWine) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(foundWine);
    }
  });
});

// update wine
app.put('/wines/:id', cors(), function (req, res) {
  // get wine id from url params (`req.params`)
  var wineId = req.params.id;

  // find wine in db by id
  Wine.findOne({ _id: wineId }, function (err, foundWine) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      // update the books's attributes
      foundWine.name = req.body.name;
      foundWine.year = req.body.year;
      foundWine.country = req.body.country;
      foundWine.description = req.body.description;
      foundWine.image = req.body.image;
      foundWine.price = req.body.price;

      // save updated book in db
      foundWine.save(function (err, savedWine) {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.json(savedWine);
        }
      });
    }
  });
});

// delete wine
app.delete('/wines/:id', cors(), function (req, res) {
  // get wine id from url params (`req.params`)
  var wineId = req.params.id;

  // find wine in db by id and remove
  Wine.findOneAndRemove({ _id: wineId }, function (err, deletedWine) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(deletedWine);
    }
  });
});


// RESET ROUTES

app.post('/reset', function (req, res) {
  Book.remove({}, function (err, removedBooks) {
    Book.create(seedBooks, function (err, createdBooks) {
      Wine.remove({}, function (err, removedWines) {
        Wine.create(seedWines, function (err, createdWines) {
          res.json(createdBooks.concat(createdWines));
        });
      });
    });
  });
});


// listen on port (production or localhost)
app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});