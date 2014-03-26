var asynquence = require('asynquence');

function cluster(done) {
    require('./cluster')(done);
}

asynquence()
    .then(require('./store'))
    .then(require('./cluster'))
    .val(require('./bootstrap'));
