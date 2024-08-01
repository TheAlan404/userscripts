// ==UserScript==
// @name         Discord Media URL Fixer
// @version      1.1.0
// @description  Removes width and height query strings from discord media urls
// @author       https://deniz.blue
// @match        https://media.discordapp.net/*
// @match        https://cdn.discordapp.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @updateURL    https://github.com/TheAlan404/userscripts/raw/main/DiscordMediaURLFixer.user.js
// @downloadURL  https://github.com/TheAlan404/userscripts/raw/main/DiscordMediaURLFixer.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let q = new URLSearchParams(location.search);
    if(q.has("width") || q.has("height")) {
        q.delete("width");
        q.delete("height");
        location.search = q.toString();
    }
})();


