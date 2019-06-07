//Setting up the document for serving dynamically generated pages
var path = require('path');
var express = require('express');
var handlebars = require('handlebars');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

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
// var kittenData = require('./kittenData');

//Routing

//home page
app.get('/', function(req, res, next) {
    var collection = db.collection('cats');
    collection.find({}).toArray(function(err, kitties){
      if (err) res.status(500).send("Unfortunately the database was hosted on Alderaan...");

      // else if (cats.length) {
      else{
        var kittens = {
          kittens: kitties
        }
        console.log('==cats:', kittens);
        res.status(200).render('mainPage', kittens);
      }
      // } else {
      //   next();
      // }
    });
});

app.post('/getCat', function(req, res, next) {
  console.log('== recieved a request for cat');
  if (req.body){
    var collection = db.collection('cats');
    console.log('==ID:', req.body.id);
    collection.find(ObjectId(req.body.id)).toArray(function(err, cats){
      if (err){
        console.log('==error with DB');
        res.status(500).send("Kylo threw a tantrum and smashed the database");
      } else if (cats.length) {
        console.log('==sending cat:', cats[0]);
        res.status(200).send(cats[0]);
      } else {
        console.log('==array is empty');
        next();
      }
    })
  } else {
    res.status(400).sent("invalid request");
  }
});

//receive a donated cat
app.post('/addCat', function(req, res, next) {
    if (req.body) {

      var collection = db.collection('cats');
      collection.insertOne(req.body, function(err, result){
        if (err) res.status(500).send("Ewoks have sabotaged the database!");
        else {
          console.log(result);
          res.status(200).send("Kitten successfully added.");
        }
      });
    } else {
      res.status(400).send("Invalid Request");
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
});

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
