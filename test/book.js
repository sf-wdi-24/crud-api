var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

var ctrl = require('../controllers');
var BooksCtrl = ctrl.books;

var testHelpers = require('./testHelpers');
var context = testHelpers.context;
var pending = testHelpers.pending;


describe('Books Controller', function(){
	describe('#index', function() {
		describe(context('success'), function(done){
			it('responds with status code 200', function(){
				request(app)
				.get('/books')
				.expect(200, done)
			});
			it('responds with JSON', function(done){
				request(app)
				.get('/books')
				.expect('Content-Type', /json/, done)
			});
			// it('finds all books from the database', pending);
			// it('responds with an object that has only the key "books"', pending);
			// it('responds with an object that has all books from the database as the value for key "books"', pending);
			// it('updates the Watcher tally for book INDEX requests', pending);
		})
		describe(context('error'), function(){
			// it('responds with status code 500', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message as the value', pending);
		})
	})
	describe('#create', function() {
		describe(context('error'), function(){
			// it('responds with status code 500', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message as the value', pending);
		})
		describe(context('success'), function(){
			// it('responds with status code 201', pending);
			// it('creates a new book in the database based on the request body', pending);
			// it('responds with an object - the newly saved book', pending);
			// it('updates the Watcher tally for book CREATE requests', pending);
		})
	})
	describe('#nuke', function() {
		describe(context('book remove error'), function(){
			// it('responds with status code 500', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message as the value', pending);
		})
		describe(context('book create error'), function(){
			// it('responds with status code 500', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message as the value', pending);
		})
		describe(context('success'), function(){
			// it('removes all books from the database', pending);
			// @TODO update nuke to accept seed data as a parameter, for easier testing
			// it('creates new books in the database based on data from seed file ', pending);
			// it('redirects to "/books"', pending);
		})
	})
	describe('#show', function() {
		// it('looks up a book based on parameter from the request path', pending);
		// @TODO - actually primarily testing controllers/utils.js with these first 3 contexts
		describe(context('book find error'), function(){
			// it('responds with status code 500', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message as the value', pending);
		})
		describe(context('found book is null'), function(){
			// it('responds with status code 404', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message "Nothing found by this ID." as the value', pending);
		})
		describe(context('success'), function(){
			// it('responds with status code 200', function(){
			// 	request(app)
			// 	.get('/books/1')
			// 	.expect(200, done)
			// });
			// it('responds with JSON', pending);
			// it('responds with an object - the book found', pending);
			// it('updates the Watcher tally for book SHOW requests', pending);
		})
	})	
	describe('#destroy', function() {
		// it('looks up a book based on parameter from the request path', pending);
		// @TODO - actually primarily testing controllers/utils.js with these first 3 contexts
		describe(context('book destroy error'), function(){
			// it('responds with status code 500', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message as the value', pending);
		})
		describe(context('found book is null'), function(){
			// it('responds with status code 404', pending);
			// it('responds with an object that has key "error"', pending);
			// it('responds with an object that has key "error" with the error message "Nothing found by this ID." as the value', pending);
		})
		describe(context('success'), function(){
			// it('responds with status code 200', function(){
			// 	request(app)
			// 	.del('/books/1')
			// 	.expect(200, done)
			// });
			// it('responds with an object - the book found', pending);
			// it('removes the book found from the database', pending);
			// it('updates the Watcher tally for book DESTROY requests', pending);
		})
	})	
	describe('#update', function() {
	// 	it('looks up a book based on parameter from the request path', pending);
		// @TODO - actually primarily testing controllers/utils.js with these first 3 contexts
		describe(context('book update error'), function(){
	// 		it('responds with status code 500', pending);
	// 		it('responds with an object that has key "error"', pending);
	// 		it('responds with an object that has key "error" with the error message as the value', pending);
		})
		describe(context('found book is null'), function(){
	// 		it('responds with status code 404', pending);
	// 		it('responds with an object that has key "error"', pending);
	// 		it('responds with an object that has key "error" with the error message "Nothing found by this ID." as the value', pending);
		})
		describe(context('success'), function(){
	// 		it('responds with status code 200', function(){
	// 			request(app)
	// 			.get('/books/1')
	// 			.expect(200, done)
	// 		});
	// 		it('updates the book in the database based on request body', pending);
	// 		it('responds with an object - the updated version of the book found', pending);
	// 		it('updates the Watcher tally for book UPDATE requests', pending);
		}) 
	})
})