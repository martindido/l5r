(function closure() {
    var required = ['require', 'mediator'];

    function module(require) {
        require(['components']);
    };

    define(required, module);
})();
