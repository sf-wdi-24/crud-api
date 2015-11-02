// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect('mongodb://localhost/crud-api');

// require models and seed data
var Book = require('./models/book'),
    seedBooks = require('./seeds/books');


// API ROUTES

// get all books
app.get('/books', function (req, res) {
  // find all books in db
  Book.find(function (err, books) {
    if (err) {
      // handle error
    } else {
      res.json(books);
    }
  });
});

// create new book
app.post('/books', function (req, res) {
  // create new book with form data (`req.body`)
  var newBook = new Book(req.body);

  // save new book in db
  newBook.save(function (err, savedBook) {
    if (err) {
      // handle error
    } else {
      res.json(savedBook);
    }
  });
});

// get one book
app.get('/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;

  // find book in db by id
  Book.findOne({ _id: bookId }, function (err, foundBook) {
    if (err) {
      // handle error
    } else {
      res.json(foundBook);
    }
  });
});

// update book
app.put('/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;

  // find book in db by id
  Book.findOne({ _id: bookId }, function (err, foundBook) {
    if (err) {
      // handle error
    } else {
      // update the books's attributes
      foundBook.title = req.body.title;
      foundBook.author = req.body.author;
      foundBook.image = req.body.image;
      foundBook.releaseDate = req.body.releaseDate;

      // save updated book in db
      foundBook.save(function (err, savedBook) {
        if (err) {
          // handle error
        } else {
          res.json(savedBook);
        }
      });
    }
  });
});

// delete book
app.delete('/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  var bookId = req.params.id;

  // find book in db by id and remove
  Book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
    if (err) {
      // handle error
    } else {
      res.json(deletedBook);
    }
  });
});


// RESET ROUTES

app.post('/reset', function (req, res) {
  Book.remove({}, function (err, removedBooks) {
    Book.create(seedBooks, function (err, createdBooks) {
      res.json(createdBooks);
    });
  });
});


// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});