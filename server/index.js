var express = require('express');
var bodyParser = require('body-parser');
var onboard = require('../helper/onboard.js')
var db = require('../database-mongo/index.js')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.post('/properties', function (req, res) {
  var zip = req.body.zip;

  var listings = onboard.getPropertyByZip(zip, function(results){
    db.save(results, function(){
      
    }).then(function(){
      db.selectAll(zip).then(function(data){
        console.log(">>>>>>>>>>>",data)
        res.send(data);

      });
    })
  })


    
  
});


app.get('/properties', function (req, res) {
  res.send('please enter a Zip');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

