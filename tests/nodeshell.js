console.log("starting zombie tests");

var Browser = require("zombie");
var assert = require("assert");

// Load the page from localhost
browser = new Browser()

browser.on("error", function(error) {
   console.error(error);
   process.exit(1);
})

browser.visit("http://localhost:3000/?_escaped_fragment_=").
  then(function() {
//    assert.equal(browser.text("title"), "ztest");
      assert.ok(browser.query("#greet"));  
  }).
  fail(function(error) {
    console.log("Oops", error);
    process.exit(1); 
  });


