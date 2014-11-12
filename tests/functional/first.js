// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var Browser = require("zombie");
var assert = require("assert");

browser = new Browser();

describe('home page', function() {

   before(function(done) {
     this.browser = new Browser({ site: 'http://localhost:3000' });
     done();
   });

  before(function(done) {
     this.browser.visit('/',done);
   });

   it('should show a greeting', function() {
       assert.equal(this.browser.text('#greet'), 'Hello World!');
   });
});

