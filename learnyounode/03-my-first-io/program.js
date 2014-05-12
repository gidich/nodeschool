var fs = require('fs');

var filename = process.argv[2];
var fileBuffer = fs.readFileSync(filename)
var fileString = fileBuffer.toString();
var lineCount = fileString.split('\n');
console.log(lineCount.length-1);