module.exports = function(done, config) {

    config.app.get('/', function index(req, res) {
        res.render('index.jade');
    });

    done(config);
}
