// ==UserScript==
// @name         TestBookBlogUnprotector
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  'WP Content Copy Protection & No Right Click' Unprotector
// @author       You
// @match        https://testbook.com/blog/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
//https://github.com/wp-plugins/wp-content-copy-protector
unsafeWindow.document.documentElement.style.webkitUserSelect = "auto";
unsafeWindow.document.documentElement.style.userSelect = "auto";
unsafeWindow.document.getElementsByTagName('body')[0].classList.remove("unselectable");
unsafeWindow.document.oncontextmenu = function(){return true;};
unsafeWindow.document.onkeydown = function(){return true;};
unsafeWindow.document.onselectstart = function(){return true;};
unsafeWindow.document.onmousedown = function(){return true;};
unsafeWindow.document.ondragstart = function(){return true;};
unsafeWindow.document.body.onmousedown = function(){return true;};
})();
