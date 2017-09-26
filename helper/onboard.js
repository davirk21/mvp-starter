const request = require('request');
const bodyParser = require('body-parser')

let getPropertyByZip = (zip, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL



  // console.log("invoked", username);
  let options = {
    url: `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=${zip}&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=25
`,
    headers: {
      'apikey': '451eb36c41fccd08b37023ca88429054',
      'accept': 'application/json',

    }
  };
    
  request(options, function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:============', JSON.stringify(JSON.parse(body), null, 2));
   callback(JSON.parse(body));
    //console.log('typeof body:============', typeof body);

   // Print the HTML for the Google homepage.
});
}


module.exports.getPropertyByZip = getPropertyByZip;