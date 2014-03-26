module.exports = function(store) {
    return function bootstrap(done) {
        var config = require('./config');
        var express = require('express');
        var http = require('http');

        var app = express();
        var server = http.createServer(app);

        function appConfiguration() {
            app.use(express.static(config.express.static));
            app.set('view engine', config.express.viewEngine);
        }

        app.configure(appConfiguration);

        config.app = app;
        config.server = server;
        config.store = store;

        done(config);
    }
}
