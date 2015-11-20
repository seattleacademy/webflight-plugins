function animations(name, deps) {
    deps.io.sockets.on('connection', function (socket) {
        socket.on('/animations/animate', function (cmd) {
        	var client = deps.client;

            
            console.log("animate", cmd, cmd.name, cmd.duration);
            //duration = cmd.duration || 15;
            client.animateLeds(cmd.name);
        });
    });
};

module.exports = animations;

// var LED_ANIMATIONS = exports.LED_ANIMATIONS = [
//   'blinkGreenRed',
//   'blinkGreen',
//   'blinkRed',
//   'blinkOrange',
//   'snakeGreenRed',
//   'fire',
//   'standard',
//   'red',
//   'green',
//   'redSnake',
//   'blank',
//   'rightMissile',
//   'leftMissile',
//   'doubleMissile',
//   'frontLeftGreenOthersRed',
//   'frontRightGreenOthersRed',
//   'rearRightGreenOthersRed',
//   'rearLeftGreenOthersRed',
//   'leftGreenRightRed',
//   'leftRedRightGreen',
//   'blinkStandard',
// ];
