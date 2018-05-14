var expect  = require('chai').expect;
var request = require('request');

describe('Views', function() {

  function assertStatus(port, route, statusCode) {
    request('http://localhost:'+port+'/'+route, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  }

  describe ('Home Page', function() {
    it('page status', function(done) {
      assertStatus(3000, '', 200);
      done();
    });
  });

  describe ('Raspberry Pi Info Page', function() {
    it('page status', function(done) {
      assertStatus(3000, 'piinfo', 200);
      done();
    });
  });

  describe ('ADS-B Data Page', function() {
    it('page status', function(done) {
      assertStatus(3000, 'adsb', 200);
      done();
    });
  });

});
