(function(window, document, $, undefined) {
    'use strict';


    /*
     * Constructuor
     */
    var AutoPilot = function AutoPilot(cockpit) {
        console.log("Loading AutoPilot plugin.");
        this.cockpit = cockpit;

        $('#controls').append('<input type="button" id="proc1" value="proc1">');

        // Register the various event handlers
        this.listen();

    };

    /*
     * Register keyboard event listener
     */
    AutoPilot.prototype.listen = function listen() {
        var autopilot = this;

        $('#proc1').click(function(ev) {
            ev.preventDefault();
            autopilot.proc1();
        });


    };


    AutoPilot.prototype.proc1 = function proc1() {
        this.cockpit.socket.emit("/autopilot/proc1");
    };


    window.Cockpit.plugins.push(AutoPilot);

}(window, document, jQuery));
