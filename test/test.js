var request = require('request'),
    expect = require('chai').expect,
    baseUrl = 'http://localhost:3000',
    testBook = null;

describe('GET /books', function() {
  it('should return statusCode 200', function (done) {
    request(baseUrl + '/books', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('POST /books', function() {
  it('should return statusCode 200', function (done) {
    request.post(
      {
        url: baseUrl + '/books',
        form: {
          title: '',
          author: '',
          image: '',
          releaseDate: ''
        }
      },
      function (error, response, body) {
        testBook = response.body;
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});

describe('PUT /books/:id', function() {
  it('should return statusCode 200', function (done) {
    request.put(
      {
        url: baseUrl + '/books/' + testBook._id,
        form: {
          title: '',
          author: '',
          image: '',
          releaseDate: ''
        }
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});

describe('DELETE /books/:id', function() {
  it('should return statusCode 200', function (done) {
    request.del(baseUrl + '/books/' + testBook._id, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});