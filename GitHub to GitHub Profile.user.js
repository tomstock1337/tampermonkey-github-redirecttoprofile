// ==UserScript==
// @name         GitHub Redirect to User Profile
// @namespace    https://www.thomasstockwell.com
// @version      0.2
// @description  Redirects the GitHub homepage to your User Profile page
// @author       Thomas Stockwell
// @include      /https?:\/\/(www\.)?github\.com\/?$/
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @downloadURL  https://github.com/tomstock1337/tampermonkey-github-redirecttoprofile/raw/main/GitHub%20to%20GitHub%20Profile.user.js
// @updateURL  https://github.com/tomstock1337/tampermonkey-github-redirecttoprofile/raw/main/GitHub%20to%20GitHub%20Profile.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var j = jQuery.noConflict();
    var username = j('meta[name="user-login"]').attr('content');
    var url = window.location.href;

    window.location.replace(url+username);
})();