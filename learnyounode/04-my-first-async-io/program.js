var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, function(err,data){
  var fileString = data.toString();
  var lineCount = fileString.split('\n');
  console.log(lineCount.length-1);
})
