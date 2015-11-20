(function(window, document, $, undefined) {
    'use strict';


    /*
     * Constructuor
     */
    var Setup = function Setup(cockpit) {
        console.log("Loading Setup plugin.");
        this.cockpit = cockpit;

        $('#controls').append('<div id="setupdata">...</div>');

        // Register the various event handlers
        this.listen();

    };

    /*
     * Register keyboard event listener
     */
    Setup.prototype.listen = function listen() {
        var setup = this;
    };



    window.Cockpit.plugins.push(setup);

}(window, document, jQuery));
