(function closure() {
    var required = ['require', 'lib/mediator'];

    function module(require) {
        var required = ['mediator-js'];

        function module(Mediator) {
            window.mediator = new Mediator();
            $(window).resize(resize);
        };

        function resize() {
            window.mediator.trigger('resize');
        };

        require(required, module);
    };

    define(required, module);
})();
