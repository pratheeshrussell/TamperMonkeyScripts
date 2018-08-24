// ==UserScript==
// @name         Facebook Warn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevents Facebook Login to an extent
// @author       Pratheesh Russell.S
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.getElementById("login_form")) {
    var loginform = document.getElementById("login_form");
    loginform.parentNode.innerHTML = "<h1 style='color:white;font-size:20px'><b>Don't waste your time on Facebook</b></h1>";
    var recentlogins = document.getElementsByClassName("removableItem");
    var recentlogins_parent = recentlogins[0].parentNode.parentNode;
    recentlogins_parent.innerHTML = "<p>Watch some useful videos from youtube instead of spending time on facebook</p>";
    var x = Math.floor((Math.random() * 5) + 1);
    var playlist = getplaylist(x);
    var new_reg = document.getElementById("reg_box").parentNode.parentNode.parentNode;
    new_reg .innerHTML = `<div style='height:500px'><iframe width="560" height="315"
        src="https://www.youtube.com/embed/videoseries?list=`+ playlist +`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    var pgfooter = document.getElementById("pageFooter");
    pgfooter.parentNode.innerHTML = "";
} else {
    alert("Don't waste your time on Facebook");
}
})();

function getplaylist(x){
    switch (x) {
    case 1:
        return "PLX2gX-ftPVXUjkEEXJoC0mx8mxTlfqpCn";
        break;
    case 2:
        return "PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab";
        break;
    case 3:
        return "PLSQl0a2vh4HA356b7gPXjBrmD0wUpfjJB";
        break;
    case 4:
        return "PLGO_AWB1C4GRczkkVWUyXCteFP_5CNpZY";
        break;
    case 5:
        return "PLoaVOjvkzQtyjhV55wZcdicAz5KexgKvm";
        break;
}
}
