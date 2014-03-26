define(function module() {
    var loader = new createjs.LoadQueue(false);
    var assetsDir = 'img/';
    var assets = [{
        id: 'background',
        src: assetsDir + 'background.jpg'
    }, {
        id: 'logo',
        src: assetsDir + 'logo.png'
    }];

    function load() {
        if (loader.loaded) {
            loaded();
        }
        else {
            loader.addEventListener('complete', loaded);
        }
    };

    function loaded() {
        mediator.trigger('loaded', loader);
    };

    loader.loadManifest(assets);
    mediator.on('load', load);
});

