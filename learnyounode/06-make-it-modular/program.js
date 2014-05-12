var mymodule = require('./module');
var directory = process.argv[2];
var filter = process.argv[3]; 

mymodule(directory,filter,function(err,data){
  if(err){
    console.error("error!!" + err)
  }
  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
  }
});


