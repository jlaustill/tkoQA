define(function (require) {
    "use strict";
    var ko = require("knockout");

    return function AppViewModel () {
        var self = this;

        self.name = ko.observable("John Doe");
    }; // return
}); // define