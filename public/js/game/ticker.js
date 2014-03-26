define(function module() {
    var stage;

    function ready(theStage) {
        stage = theStage;
        createjs.Ticker.addEventListener('tick', tick);
    };

    function tick(event) {
        prioritize();
        mediator.emit('tick', event);
    };

    function update(event) {
        stage.update(event);
    };

    function prioritize() {
        var channel = mediator.getChannel('tick');

        channel.setPriority(update, channel._subscribers.length);
    };

    mediator.on('ready', ready);
    mediator.on('tick', update);
});
