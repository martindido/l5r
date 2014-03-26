(function closure() {
    var required = ['require'];

    function module(require) {
        require(['stage']);
    };

    required.push('ticker');
    required.push('loader');
    required.push('background');
    define(required, module);
})();
