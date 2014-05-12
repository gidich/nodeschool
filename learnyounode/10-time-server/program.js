var net = require('net');

var server = net.createServer(function(socket)
{
  var date = new Date();
  socket.write(date.getFullYear() + '-' + pad(date.getMonth()+1) + '-' + pad(date.getDate()) + ' ' + date.getHours() + ':' + date.getMinutes()+ '\n');
  socket.end();
})
server.listen(process.argv[2]);

function pad(num) {
  return ("0"+num).slice(-2);
}