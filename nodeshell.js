#!/usr/bin/env node

var Browser = require("zombie");
var assert = require("assert");

// Load the page from localhost
browser = new Browser()

browser.on("error", function(error) {
   console.error(error);
   process.exit(1);
})

browser.visit("http://localhost:3000/").
  then(function() {
//    assert.equal(browser.text("title"), "first");
//    console.log("done");
    process.exit(0);
  
  });


