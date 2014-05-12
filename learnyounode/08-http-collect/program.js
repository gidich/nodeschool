var BufferList = require('bl');
var bl = new BufferList()
var blString;

var http = require('http');
http.get(process.argv[2],function(response){
  response.setEncoding("utf8");
  var stream = response;
  stream.on("data", function(data){
    bl.append(data);
  });
  stream.on('end', function(){
    blString = bl.toString();
    console.log(blString.length);
    console.log(blString);
  });
});

