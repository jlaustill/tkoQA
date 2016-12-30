require.config({
    "baseUrl": "./",
    "config": {
        "moment": {
            "noGlobal": true
        }
    },
    "generateSourceMaps": true,
    "name": "main",
    "optimizeCss": "none",
    "optimize": "none",
    "paths": {
        "app.viewmodel": "../app/viewmodels/app.viewmodel",
        "knockout": "../node_modules/tko/dist/ko",
        "knockout-amd-helpers": "../node_modules/knockout-amd-helpers/build/knockout-amd-helpers",
        "text": "../node_modules/text/text"
    },
    "preserveLicenseComments": false,
    "shim": {
        "knockout": {
            "exports": "ko"
        }
    }
}); // config

define(function (require) {
    "use strict";
    var ko = require("knockout");
    require("knockout-amd-helpers");
    require("text");

    var AppVM = require("app.viewmodel");
    var appVM = new AppVM();
    ko.applyBindings(appVM);

}); // define
