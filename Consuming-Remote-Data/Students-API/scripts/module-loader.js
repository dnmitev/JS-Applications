/// <reference path="_references.js" />
define(['requester', 'templater', 'view', 'config'], function (requester, templater, viewEngine, configuration) {
    "use strict";

    return {
        request: requester,
        template: templater,
        view: viewEngine,
        config: configuration,
        redirect: function (newLocation) {
            window.location.hash = newLocation;
        }
    };
});