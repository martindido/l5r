var fs = require('fs');
var path = require('path');
var config = {};

fs.readdirSync(__dirname).forEach(function(file) {
    var name = path.basename(file, '.js');
    if (!name || name === 'index') {
        return;
    }
    config[name] = require('./' + name);
});

module.exports = config;
