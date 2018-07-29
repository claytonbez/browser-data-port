const
    readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout),
    io = require("socket.io")(8000);

io.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
    socket.on("data", (data) => {
        console.info(`RCV FROM REMOTE SERVER VIA BROWSER LINK --`);
        console.info(`${data}`);
    });
});

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