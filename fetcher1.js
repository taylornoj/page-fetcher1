const request = require('request'); //use request library
const fs = require('fs') 


const fetcher = (url, path) => {
  request(url, (error, response, body) => {
    const size = body.length;
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return
      } else {
       console.log(`Downloaded and saved ${size} bytes to ${path}`)
      }
    
     });
  });
};
  
const args = process.argv.slice(2); //get command line
let url = args[0]; //URL at zero index
let path = args[1]; //path at first index

fetcher(url, path);
