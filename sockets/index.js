module.exports = function(done, config) {
    var io = require('socket.io').listen(config.server);

    io.configure(function configuration() {
        io.set('store', config.store.get());
        io.set('log level', 1);
        io.enable('browser client minification');
        io.enable('browser client etag');
        io.enable('browser client gzip');
    });

    function onSocketConnection(socket) {
        console.log('Socket ' + socket.id + ' connected');

        socket.on('disconnect', function onSocketDisconnection() {
            console.log('Socket ' + socket.id + ' disconnected');
        });

        socket.emit('test', 'Testing...');

        socket.on('echo', function onSocketTested(data) {
            console.log('Socket ' + socket.id + ' tested', data);
        });

    }

    io.sockets.on('connection', onSocketConnection);

    config.io = io;

    done(config);
}
