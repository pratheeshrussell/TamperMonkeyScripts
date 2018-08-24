// ==UserScript==
// @name         Facebook Warn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevents Facebook Login to an extent
// @author       Pratheesh Russell.S
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

var config_removereg = 2; // 0 to show register options; 1 to remove register options; 2 to remove register options and show youtube playlist
var config_removefooter = 1; //0 does not remove footer; 1 removes footer
(function() {
    'use strict';
if(isloggedin() === 0 && window.location.href ==="https://www.facebook.com/") {
    remove_loginform("white");
    remove_recentlogins();
    remove_registerops("reg_box");
    remove_footer();
} else if((isloggedin() === 0) && (window.location.href.search("/login") >= 0)) {
    remove_loginform("black");
    remove_footer();
    document.getElementById("header_block").parentNode.removeChild(document.getElementById("header_block"));
} else if((isloggedin() === 0) && (window.location.href.search("/r.php") >= 0)) {
    remove_loginform("white");
    remove_registerops("reg_form_box");
    remove_footer();
}
    else {
        document.getElementById("contentArea").innerHTML = "<div style='font-size:30px;background:white;'><b>Don't waste your time on Facebook</b></div>" + document.getElementById("contentArea").innerHTML;
   // alert("Don't waste your time on Facebook");
    }
})();


function isloggedin(){
if(document.getElementById("login_form")){
    return 0;
} else {
    return 1;
}}
function remove_loginform(color){
    var loginform = document.getElementById("login_form");
    loginform.parentNode.innerHTML = "<h1 style='color:"+color+";font-size:20px'><b>Don't waste your time on Facebook</b></h1>";
}
function remove_recentlogins() {
    var recentlogins = document.getElementsByClassName("removableItem");
    var recentlogins_parent = recentlogins[0].parentNode.parentNode;
    recentlogins_parent.innerHTML = "<p>Watch some useful videos from youtube instead of spending time on facebook</p>";
}
function remove_footer(){
    if(document.getElementById("pageFooter") && (config_removefooter === 1)){
    var pgfooter = document.getElementById("pageFooter");
    pgfooter.parentNode.innerHTML = "";
}
}
function remove_registerops(elemid){
    if(document.getElementById(elemid) && config_removereg >0) {
    var new_reg = document.getElementById(elemid).parentNode.parentNode.parentNode;
    if (config_removereg === 2) {
        var x = Math.floor((Math.random() * 5) + 1);
        var playlist = getplaylist(x);
    new_reg.innerHTML = `<div style='height:500px'><iframe width="560" height="315"
        src="https://www.youtube.com/embed/videoseries?list=`+ playlist +`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    } else {
        new_reg .innerHTML = "<div style='height:500px'></div>";
    }}
}

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