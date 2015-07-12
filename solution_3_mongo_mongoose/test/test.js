var request = require('request'),
    expect = require('chai').expect,
    baseUrl = 'http://localhost:3000';

describe('GET /', function() {
  it('should return statusCode 200', function(done) {
    request(baseUrl, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('GET /api/phrases', function() {
  it('should return statusCode 200', function(done) {
    request(baseUrl + '/api/phrases', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('POST /api/phrases', function() {
  it('should return statusCode 200', function(done) {
    request.post(
      {
        url: baseUrl + '/api/phrases',
        form: {
          word: 'AJAX',
          definition: 'Asynchronous JavaScript and XML'
        }
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});

describe('PUT /api/phrases/:id', function() {
  it('should return statusCode 200', function(done) {
    request.put(
      {
        url: baseUrl + '/api/phrases/1',
        form: {
          word: 'AJAX',
          definition: 'Asynchronous JavaScript and XML'
        }
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});

describe('DELETE /api/phrases/:id', function() {
  it('should return statusCode 200', function(done) {
    request.del(baseUrl + '/api/phrases/1', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});