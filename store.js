var Store = require('socket.io-clusterhub');
var instance = null;

function get() {
    if (instance) {
        return instance;
    }

    instance = new Store();

    return instance;
}

function destroy() {
    instance = null;
}

function reset() {
    destroy();
    return get();
}

module.exports = {
    get: get,
    destroy: destroy,
    reset: reset
}
