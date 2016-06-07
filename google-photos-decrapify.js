// ==UserScript==
// @name         Google Photos Decrapify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make google photos load faster
// @author       You
// @match        https://plus.google.com/photos/albums/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var metaNode = document.head.querySelector('meta[property="og:image"]');
    //console.log("TM: ", metaNode);
    var newLocation = metaNode.content.replace(/\/s0-d\//,"/s0/");
    //console.log("USER MONKEY CALLED", newLocation);
    var oldLocation = document.location;
    //history.pushState(oldLocation);
    //location.assign(newLocation);
    location.assign(newLocation);
    //console.log(`location.assign("${newLocation}")`)
})();
