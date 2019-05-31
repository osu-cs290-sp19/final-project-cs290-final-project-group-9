//Setting up the document for serving dynamically generated pages
var path = require('path');
var express = require('express');
var handlebars = require('handlebars');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3001;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));


//Importing kitten data
var kittenData = require('./kittenData');
var kittens = {
    kittens: kittenData
};


//Routing

//home page
app.get('/', function(req, res, next) {
    res.status(200).render('kittenContainer', kittens);
});

//style sheet
app.get('*/style.css', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'style.css'));
});

//interactive java
app.get('*/index.js', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.js'));
});

//404 page
app,get('*', function(req, res, next) {
    res.status(404).render('404');
})



//Listener
app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("== Server is listening on port", port);
});

