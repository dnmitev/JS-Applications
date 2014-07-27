/// <reference path="_references.js" />
define(['jquery', 'q'], function ($, Q) {
    "use strict";

    function makeRequest(url, type, data) {
        var deferred = Q.defer();

        $.ajax({
            url: url,
            type: type,
            contentType: 'application/json; charset=utf-8',
            data: data,
            success: function getReferredResolved(requestedData) {
                deferred.resolve(requestedData);
            },
            error: function getReferredRejected(errorData) {
                deferred.reject(errorData.responseText);
            }
        });

        return deferred.promise;
    }

    function makeGetRequest(url) {
        return makeRequest(url, 'GET');
    }

    function makePostRequest(url, data) {
        var stringifiedData = JSON.stringify(data);
        return makeRequest(url, 'POST', stringifiedData);
    }

    return {
        getJSON: makeGetRequest,
        postJSON: makePostRequest
    };
});