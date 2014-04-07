var express = require("express");
var harp = require("harp");
var app = express();
var search = require('./search')

app.configure(function(){
   app.use(express.static(__dirname + "/public"));
   app.use(harp.mount(__dirname + "/public"));
});

// routes

app.get('/search', search.search)

// run

app.listen(9000);
