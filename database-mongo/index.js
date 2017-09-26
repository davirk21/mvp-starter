var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

var db = mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true,
  /* other options */
});

// var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  address: String,
  postal: String
});

var Item = mongoose.model('Listing', itemSchema);

let save = (properties) => {
  properties = properties.property;
  return Promise.all(
    properties.map(function(property){
      var newEntry = new Item ({
        address: property.address.oneLine,
        postal: property.address.postal1
      }).save()
          console.log('hhhhhhhhh',newEntry)
    })
    )

}


let selectAll = function(zip) {

  return Item.find({postal: zip}).limit(10)

};




module.exports.selectAll = selectAll;
module.exports.save = save;