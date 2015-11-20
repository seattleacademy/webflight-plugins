function animations(name, deps) {
    deps.io.sockets.on('connection', function (socket) {
        socket.on('/animations/animate', function (cmd) {
        	var client = deps.client;

            
            console.log("animate", cmd, cmd.name, cmd.duration);
            //duration = cmd.duration || 15;
            client.animate(cmd.name,cmd.duration);
        });
    });
};

module.exports = animations;

// static const int32_t MAYDAY_TIMEOUT[ARDRONE_NB_ANIM_MAYDAY] = {
//     1000,  // ARDRONE_ANIM_PHI_M30_DEG
//     1000,  // ARDRONE_ANIM_PHI_30_DEG
//     1000,  // ARDRONE_ANIM_THETA_M30_DEG
//     1000,  // ARDRONE_ANIM_THETA_30_DEG
//     1000,  // ARDRONE_ANIM_THETA_20DEG_YAW_200DEG
//     1000,  // ARDRONE_ANIM_THETA_20DEG_YAW_M200DEG
//     5000,  // ARDRONE_ANIM_TURNAROUND
//     5000,  // ARDRONE_ANIM_TURNAROUND_GODOWN
//     2000,  // ARDRONE_ANIM_YAW_SHAKE
//     5000,  // ARDRONE_ANIM_YAW_DANCE
//     5000,  // ARDRONE_ANIM_PHI_DANCE
//     5000,  // ARDRONE_ANIM_THETA_DANCE
//     5000,  // ARDRONE_ANIM_VZ_DANCE
//     5000,  // ARDRONE_ANIM_WAVE
//     5000,  // ARDRONE_ANIM_PHI_THETA_MIXED
//     5000,  // ARDRONE_ANIM_DOUBLE_PHI_THETA_MIXED
//     15,  // ARDRONE_ANIM_FLIP_AHEAD
//     15,  // ARDRONE_ANIM_FLIP_BEHIND
//     15,  // ARDRONE_ANIM_FLIP_LEFT
//     15,  // ARDRONE_ANIM_FLIP_RIGHT
// };
