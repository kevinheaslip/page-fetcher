const request = require('request');
const fs = require('fs');
// download a resource at a URL to a local path
const fetcher = function() {
  const args = process.argv.slice(2);
  const url = args[0];
  const filePath = args[1];
  // make HTTP request and wait for response
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
    }
    // write body of URL to file
    const content = body;
    fs.writeFile(filePath, content, err => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
    });
  });
};

fetcher();
