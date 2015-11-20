PILOT_ACCELERATION = 0.04;

(function(window, document, $, undefined) {
    'use strict';




    // on press, replace current buttons with new one
    // remove unpress
    // set timeout after press to cancel (or stop) after so many seconds

    /*
     * Constructuor
     */
    var Animations = function Animations(cockpit) {
        console.log("Loading Animations plugin.");
        this.cockpit = cockpit;
        //$('.main-container .wrapper').append('<div id="animations">Here are the animations</div>');

        //$('#controls').append('<span id="animations">...</span>');
        $('.main-container .wrapper').append("<div id='animations'>" + "</div>");
        $('#animations').append('<li id="phiM30Deg">phiM30Deg 1000</li>');
        $('#animations').append('<li id="turnaround">turnaround 5000</li>');
        $('#animations').append('<li id="wave">wave 5000</li>');
        $('#animations').append('<li id="flipAhead">flipAhead 15</li>');
        $('#animations').append('<li id="flipBehind">flipBehind 15</li>');
        $('#animations').append('<li id="flipLeft">flipLeft 15</li>');
        $('#animations').append('<li id="flipRight">flipRight 15</li>');


        // Register the various event handlers
        this.listen();


    };

    /*
     * Register keyboard event listener
     */
    Animations.prototype.listen = function listen() {
        var animations = this;


        $('#phiM30Deg').click(function(ev) {
            console.log('phiM30Deg clicked');
            //ev.preventDefault();
            animations.animate('phiM30Deg', 1000);
        });

        $('#turnaround').click(function(ev) {
            console.log('turnaround clicked');
            //ev.preventDefault();
            animations.animate('turnaround', 5000);
        });

        $('#wave').click(function(ev) {
            console.log('wave clicked');
            //ev.preventDefault();
            animations.animate('wave', 5000);
        });

        $('#flipAhead').click(function(ev) {
            console.log('flipAhead clicked');
            //ev.preventDefault();
            animations.animate('flipAhead', 15);
        });
        $('#flipBehind').click(function(ev) {
            console.log('flipBehind clicked');
            //ev.preventDefault();
            animations.animate('flipBehind', 15);
        });
        $('#flipLeft').click(function(ev) {
            console.log('flipLeft clicked');
            //ev.preventDefault();
            animations.animate('flipLeft', 15);
        });
        $('#flipRight').click(function(ev) {
            console.log('flipRight clicked');
            //ev.preventDefault();
            animations.animate('flipRight', 15);
        });
        // $('#ftrim').click(function(ev) {
        //   ev.preventDefault();
        //   pilot.ftrim();
        // });

    };

    /*
     * Requets a device callibration. Beware that for some device
     * such as the compass, the drone will perform some motion.
     */
    Animations.prototype.animate = function animate(name, duration) {
        console.log('animate', name, duration);
        this.cockpit.socket.emit("/animations/animate", {
            "name": name,
            "duration": duration
        });
    };



    window.Cockpit.plugins.push(Animations);

}(window, document, jQuery));
