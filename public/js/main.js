(function closure() {
    var config = {
        baseUrl: 'js/game',
        paths: {
            lib: '../lib',
            createjs: '//code.createjs.com/createjs-2013.12.12.min',
            jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
        }
    };
    var required = ['require', 'jquery', 'createjs'];

    function module(require) {
        require(['game']);
    };

    requirejs.config(config);
    requirejs(required, module);
})();
