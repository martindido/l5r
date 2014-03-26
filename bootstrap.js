module.exports = function(store, worker) {
    var asynquence = require('asynquence');

    function bootstrap(config) {
        config.server.listen(config.express.port, function onServerListening() {
            var serverId = 1;
            if (worker) {
                serverId = worker.id;
            }
            console.log('Express server %d listening on port %d', serverId, config.express.port);
        });
    }

    function onBootstrapError(error) {
        console.log('Bootstrap error: ' + error);
    }

    asynquence().or(onBootstrapError)
        .then(require('./app')(store))
        //.then(require('./sockets'))
        .then(require('./router'))
        .val(bootstrap);
}
