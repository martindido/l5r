define(function module() {
    var stage;

    function $ready() {
        stage = new createjs.Stage('game');
        createjs.Touch.enable(stage);
        stage.enableMouseOver(30);
        resize();
        mediator.on('resize', resize);
        prioritize();
        mediator.trigger('ready', stage);
    };

    function resize() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        if (width < 800) {
            width = 800;
        }
        if (height < 600) {
            height = 600;
        }
        stage.canvas.width = width;
        stage.canvas.height = height;
    };

    function ready() {
        mediator.trigger('load');
    };

    function prioritize() {
        var channel = mediator.getChannel('ready');

        channel.setPriority(ready, channel._subscribers.length);
    };

    mediator.on('ready', ready);
    $($ready);
});
