//Setting up the document for serving dynamically generated pages
var path = require('path');
var express = require('express');
var handlebars = require('handlebars');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3330;

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || "cs290_hirschet";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_hirschet";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_hirschet";

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));


//Importing kitten data
var kittenData = require('./kittenData');


//Routing

//home page
app.get('/', function(req, res, next) {
    res.status(200).render('mainPage', kittenData);
});

//receive a donated cat
app.post('/addCat', function(req, res, next) {
    if (req.body) {
        kittenData.kittens.push(req.body);
        //console.log(req.body);
        res.status(200).send("Kitten successfully added.");
    }
    else {
        res.status(404).send({
            error: "Request body must be filled out."
        });
    }
});





//style sheet
app.get('*/style.css', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'style.css'));
});

//interactive java
app.get('*/index.js', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.js'));
});

//about us page
app.get('*/aboutus', function(req, res, next) {
    res.status(200).render('AboutUs');
});

//404 page
app.get('*', function(req, res, next) {
    res.status(404).render('404');
})

//Listener and database setup
MongoClient.connect(mongoUrl, function (err, client) {
    if (err) {
        throw err;
    }
    db = client.db(mongoDBName);
    app.listen(port, function(err) {
        if (err) {
            throw err;
        }
        console.log("== Server is listening on port", port);
    });
});
