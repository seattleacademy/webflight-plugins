function animations(name, deps) {
    deps.io.sockets.on('connection', function (socket) {
        socket.on('/animations/animate', function (cmd) {
        	var client = deps.client;

        //      $('#rightMissile').click(function(ev) {
        //     console.log('rightMissile clicked');
        //     //ev.preventDefault();
        //     animations.animate('rightMissile', 2, 3);
        // });
 
 			  $('frontLeftGreenOthersRed').click(function(ev) {
            console.log('frontLeftGreenOthersRed');
            //ev.preventDefault();
            animations.animate('frontLeftGreenOthersRed', 2, 3);
        });
 			  $('frontRightGreenOthersRed').click(function(ev) {
 			console.log('frontRightGreenOthersRed');
 			animations.animate('frontRightGreenOthersRed', 2, 3);	

 			  });
				 $('rearRightGreenOthersRed').click(function(ev) {
 			console.log('frontRightGreenOthersRed');
 			animations.animate('frontRightGreenOthersRed', 2, 3);	

 			  }); 

 				$('rearLeftGreenOthersRed').click(function(ev) {
 			console.log('frontRightGreenOthersRed');
 			animations.animate('frontRightGreenOthersRed', 2, 3);	

 			  });
           
            $('frontLeftGreenOthersRed').click(function(ev) {
            console.log('frontLeftGreenOthersRed');
            //ev.preventDefault();
            animations.animate('frontLeftGreenOthersRed', 2, 3);
        });
 			  $('frontRightGreenOthersRed').click(function(ev) {
 			console.log('frontRightGreenOthersRed');
 			animations.animate('frontRightGreenOthersRed', 2, 3);	

 			  });
				 $('rearRightGreenOthersRed').click(function(ev) {
 			console.log('frontRightGreenOthersRed');
 			animations.animate('frontRightGreenOthersRed', 2, 3);	

 			  }); 

 				$('rearLeftGreenOthersRed').click(function(ev) {
 			console.log('frontRightGreenOthersRed');
 			animations.animate('frontRightGreenOthersRed', 2, 3);	

 			  });
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
