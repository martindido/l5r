define(function module() {
    var stage;
    var loader;
    var container = new createjs.Container();

    function ready(theStage) {
        stage = theStage;
        stage.addChild(container);
        mediator.on('resize', resize);
        mediator.on('background:resize', cache);
    };

    function loaded(loader) {
        loader = loader;
        background(loader.getResult('background'));
        logo(loader.getResult('logo'));
        prioritize();
        resize();
    };

    function background(image) {
        var background = new createjs.Bitmap(image);

        function resize() {
            console.log('second');
            var aspectRatio = image.width / image.height;
            var canvasAspectRatio = stage.canvas.width / stage.canvas.height;
            var scaleOver = 'width';
            var scale;

            if (aspectRatio > canvasAspectRatio) {
                scaleOver = 'height';
            }
            scale = stage.canvas[scaleOver] / image[scaleOver];
            background.scaleX = scale;
            background.scaleY = scale;
            background.regX = image.width / 2;
            background.regY = image.height / 2;
            background.x = stage.canvas.width / 2;
            background.y = stage.canvas.height / 2;
        };

        container.addChild(background);
        mediator.on('background:resize', resize);
    };

    function logo(image) {
        var logo = new createjs.Shape();

        logo.x = 10;
        logo.y = 15;
        logo.graphics.beginBitmapFill(image).drawRect(0, 0, image.width, image.height);
        container.addChild(logo);
    };

    function resize() {
        console.log('first');
        mediator.emit('background:resize');
    };

    function cache() {
        console.log('last');
        container.cache(0, 0, stage.canvas.width, stage.canvas.height);
    };

    function prioritize() {
        var channel = mediator.getChannel('background:resize');

        channel.setPriority(cache, channel._subscribers.length);
    };

    mediator.on('ready', ready);
    mediator.on('loaded', loaded);
});
