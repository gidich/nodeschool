var BufferList = require('bl');
var http = require('http');


var file1 = process.argv[2];
var file2 = process.argv[3];
var file3 = process.argv[4];

var filesProcessed = 0;

var fileResults1, fileResults2, fileResults3;

geturlData(file1,function(err,data){
  fileResults1 = data;
  filesProcessed++;
  writeItOut();
});
geturlData(file2,function(err,data){
  fileResults2 = data;
  filesProcessed++;
  writeItOut();
});
geturlData(file3,function(err,data){
  fileResults3 = data;
  filesProcessed++;
  writeItOut();
});

function writeItOut(){
  if(filesProcessed === 3){
    console.log(fileResults1);
    console.log(fileResults2);
    console.log(fileResults3);
  }
}

function geturlData(url,callback){
  var bl = new BufferList()
  http.get(url,function(response){
    response.setEncoding("utf8");
    var stream = response;
    stream.on("data", function(data){
      bl.append(data);
    });
    stream.on('end', function(){
      callback(null, bl.toString());
    });
  });
}