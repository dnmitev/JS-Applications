/// <reference path="_references.js" />
define(['requester', 'templater', 'view', 'config', 'sorter', 'storage', 'message', 'user'], function (requester, templater, viewEngine, configuration, sorter, storager, message, user) {
    "use strict";

    return {
        request: requester,
        template: templater,
        view: viewEngine,
        config: configuration,
        sorter: sorter,
        storager: storager,
        message: message,
        user: user,
        redirect: function (newLocation) {
            window.location.hash = newLocation;
        }
    };
});