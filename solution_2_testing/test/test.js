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

describe('GET /phrases', function() {
  it('should return statusCode 200', function(done) {
    request(baseUrl + '/phrases', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('POST /phrases', function() {
  it('should return statusCode 200', function(done) {
    request.post(
      {
        url: baseUrl + '/phrases',
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

describe('PUT /phrases/:id', function() {
  it('should return statusCode 200', function(done) {
    request.put(
      {
        url: baseUrl + '/phrases/1',
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

describe('DELETE /phrases/:id', function() {
  it('should return statusCode 200', function(done) {
    request.del(baseUrl + '/phrases/1', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});