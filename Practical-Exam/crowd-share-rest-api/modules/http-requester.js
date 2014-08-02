/// <reference path="_references.js" />
define(['jquery', 'q'], function ($, Q) {
    "use strict";

    function makeRequest(url, type, data) {
        var deferred = Q.defer();

        if (data) {
            data = JSON.stringify(data);
        }

        $.ajax({
            url: url,
            type: type,
            data: data,
            contentType: "application/json",
            success: function (data, textStatus, xhr) {
                deferred.resolve({ data: data, textStatus: textStatus, xhr: xhr });
            },
            error: function (errorData) {
                deferred.reject(errorData);
            }
        });

        return deferred.promise;
    }

    function makeRequestWithHeaders(url, type, sessionKey, data) {
        var deferred = Q.defer();

        if (data) {
            data = JSON.stringify(data);
        }

        $.ajax({
            url: url,
            type: type,
            headers: { 'X-SessionKey': sessionKey },
            contentType: "application/json",
            data: data,
            success: function (data, textStatus, xhr) {
                deferred.resolve({ data: data, textStatus: textStatus, xhr: xhr });
            },
            error: function (errorData) {
                deferred.reject(errorData);
            }
        });
    }

    function makeGetRequest(url) {
        console.log('get');
        return makeRequest(url, 'GET');
    }

    function makePostRequest(url, data) {
        return makeRequest(url, 'POST', data);
    }

    function putRequest(url, sessionKey) {
        return makeRequestWithHeaders(url, 'PUT', sessionKey);
    }

    return {
        getJSON: makeGetRequest,
        postJSON: makePostRequest,
        put: putRequest
    };
});