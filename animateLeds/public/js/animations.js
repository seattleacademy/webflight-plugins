(function(window, document, $, undefined) {
    'use strict';


    /*
     * Constructuor
     */
    var Animations = function Animations(cockpit) {
        console.log("Loading Animations plugin.");
        this.cockpit = cockpit;
        //$('.main-container .wrapper').append('<div id="animations">Here are the animations</div>');

        //$('#controls').append('<span id="animations">...</span>');
        $('.main-container .wrapper').append("<div id='animations'>" + "</div>");
        $('#animations').append('<li id="blinkGreenRed">blinkGreenRed</li>');
        $('#animations').append('<li id="blinkGreen">blinkGreen</li>');

        // Register the various event handlers
        this.listen();


    };

    /*
     * Register keyboard event listener
     */
    Animations.prototype.listen = function listen() {
        var animations = this;


        $('#blinkGreenRed').click(function(ev) {
            console.log('blinkGreenRed clicked');
            //ev.preventDefault();
            animations.animate('blinkGreenRed', 2, 3);
        });

        $('#blinkGreen').click(function(ev) {
            console.log('blinkGreen');
            //ev.preventDefault();
            animations.animate('blinkGreen', 2, 3);
        });



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
