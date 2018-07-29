"use strict";
//------------------------------------------------------------------------------
// UnityCORE
// v1.0
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// DECLARATIONS
//------------------------------------------------------------------------------
console.log(process.cwd());
const http = require('http'),
    express = require('express'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io')(server),
    readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
//------------------------------------------------------------------------------
// EXPRESS SETUP
//------------------------------------------------------------------------------
var options = {
  index: "index.html"
}
app.use(express.static(__dirname + "/public",options));

//------------------------------------------------------------------------------
// SOCKET SETUP
//------------------------------------------------------------------------------
io.on('connection',(socket)=>{
	console.log('connection --> %s', socket.handshake.address);
	socket.on('data',function(data){
        console.log('RECEIVED VIA LOCALPORT ON DISPLAYED SITE ---');
        console.log(data);
    });
});
//------------------------------------------------------------------------------
// FINAL INITILAZATION
//------------------------------------------------------------------------------
server.listen(80, ()=> {
  console.log('Socket.io Server running on port 80');
});
//--------------------------------------------------------------------------------
// READLINE INTERFACE FOR TESTING
//--------------------------------------------------------------------------------
rl.on('line', function (data) {
    io.emit('data', data);
    rl.prompt();
}).on('close', function () {
    // only gets triggered by ^C or ^D
    console.log('Server Shutdown done!');
    process.exit(0);
});
rl.setPrompt("$>>");
rl.prompt();
//------------------------------------------------------------------------------
// END OF SCRIPT
//------------------------------------------------------------------------------
