var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url === `/`){
    fs.readFile('./index.html', 'utf8', function(err, fileContents){
      response.end(fileContents);
    })
  }else if (request.url === `/ninjas`) {
    fs.readFile('./ninjas.html', 'utf8', function(err, fileContents){
      response.end(fileContents);
    })
  } else if (request.url === `/ninjas/dojos`) {
    fs.readFile('./dojo.html', 'utf8', function(err, fileContents){
      response.end(fileContents);
    })
  }
});

server.listen(6789);
