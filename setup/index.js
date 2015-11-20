function setup(name, deps) {
    deps.io.sockets.on('connection', function(socket) { //SEE SDK 2.0 starting at page 70
            var client = deps.client;
            console.log('setup open');
            client.config('control:altitude_max','3000'); //in millimeters
            //client.config('control:altitude_min','50'); //in millimiters
            client.config('control:control_vz_max','700'); //Speed in mm/sec, 200 to 2000

            client.config('detect:detect_type','3');
            //client.config('detect:detect_type','2');
            //client.config('control:flying_mode','2');
            //client.config('control:control_yaw','1.7453293e+00'); // radians per second
    });
};
module.exports = setup;
