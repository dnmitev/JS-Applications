/// <reference path="../scripts/_references.js" />
define(['requester', 'config', 'storage', 'cryptojs'], function (requester, config, storager) {
    "use strict";

    var url = config.apiURL;

    function login(username, password) {
        var data = {
            username: username,
            authCode: CryptoJS.SHA1(username + password).toString()
        };

        return requester.postJSON(url + "auth", data)
            .then(function (result) {
                storager.set('sessionKey', result.data.sessionKey);
                storager.set('username', username);
            });
    }

    function register(username, password) {
        var data = {
            username: username,
            authCode: CryptoJS.SHA1(username + password).toString()
        };

        return requester.postJSON(url + 'user', data)
            .then(function () {
                alert('Successful registration!');
            }, function (err) {
                alert(err.responseText);
            });
    }

    function logout() {
        return requester.put(url + "user", storager.get("sessionKey"))
            .then(function () {
                storager.remove("sessionKey");
                storager.remove("username");
            });
    }

    function isLoggedIn() {
        return storager.get("username") !== null;
    }

    function getCurrentUser() {
        return {
            username: storager.get("username"),
            sessionKey: storager.get("sessionKey")
        };
    }

    return {
        login: login,
        register: register,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getCurrent: getCurrentUser
    };
});