module.exports = function(done, store) {
    var cluster = require('cluster');

    if (cluster.isMaster) {
        var cpuCount = require('os').cpus().length;
        var i;

        for (i = 0; i < cpuCount; i++) {
            cluster.fork();
        }
        cluster.on('exit', function onClusterExit(worker) {
            console.log('Express server %d exiting', worker.id);
            cluster.fork();
        });
    }
    else {
        done(store, cluster.worker);
    }
}
