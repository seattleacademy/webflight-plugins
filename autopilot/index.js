function autopilot(name, deps) {
    deps.io.sockets.on('connection', function(socket) {
        socket.on('/autopilot/proc1', function(cmd) {
            //console.log("proc1", name, deps.client);
            var client = deps.client;
            //client.config('control:altitude_max','3000');
            //client.config('control:altitude_min','50');
           // client.config('control:control_vz_max','7.0000000e+02');
            client.config('control:control_vz_max','700');

            client.config('detect:detect_type','3');
            //client.config('detect:detect_type','2');
            //client.config('control:flying_mode','2');
            //client.config('control:control_yaw','1.7453293e+00');
           // client.takeoff();
        //     client
        //         .after(1000, function() {
        //             this.stop();
        //         })
        //         .after(3000, function() {
        //             this.clockwise(.2);
        //         })

        //         .after(3000, function() {
        //             this.stop();
        //             this.land();
        //         });
         });

    });
};
module.exports = autopilot;
