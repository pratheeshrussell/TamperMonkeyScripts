// ==UserScript==
// @name         National Geographic Unblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enable scroll and contextmenu!
// @author       Pratheesh Russell
// @match        https://www.nationalgeographic.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationalgeographic.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     // Get rid of modal that comes on scroll
     document.addEventListener("scroll", event => event.stopPropagation(), { capture: true });

     // remove image right click protection
    const imgElements = document.querySelectorAll(`[data-mptype="image"]`);
    imgElements.forEach(imgel => {
        imgel.addEventListener("contextmenu", event => event.stopPropagation(), { capture: true });
        const savedImg = imgel.cloneNode(true);
        imgel.parentNode.replaceChild(savedImg ,imgel);
    });

})();
