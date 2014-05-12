
module.exports = function(directory,filter,callback)
{
  var err;
  var fs = require('fs');
  var path = require('path');

fs.readdir(directory,function(err,list){
  if(err){
    return callback(err,null);
  }
  var results = []
  var j = 0;
  for(var i = 0; i <= list.length; i++){
    if(path.extname(list[i]) === "." +filter){
      //console.log(list[i]);
      results[j] = list[i];
      j++;
    }
  }
  callback(null, results);
});
}