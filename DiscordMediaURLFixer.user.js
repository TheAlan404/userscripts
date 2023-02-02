// ==UserScript==
// @name         Discord Media URL Fixer
// @version      1.0.0
// @description  Fixes discord media URL's
// @author       TheAlan404 (github)
// @updateURL    https://github.com/TheAlan404/userscripts/raw/main/DiscordMediaURLFixer.user.js
// @downloadURL  https://github.com/TheAlan404/userscripts/raw/main/DiscordMediaURLFixer.user.js
// @match        https://media.discordapp.net/attachments/*
// @match        https://cdn.discordapp.com/attachments/*
// @match        https://cdn.discord.com/attachments/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discordapp.net
// @grant        none
// ==/UserScript==

/*
> media.discordapp.net is our image resizer we use to serve different resolutions of your attachments on the fly.
>
> there is aggressive caching there, which is why images will persist for a while longer after they are deleted from chat - but they will eventually go away.
https://www.reddit.com/r/discordapp/comments/9z88ci/comment/ea7g6zl/
*/

(function() {
    'use strict';

    if(location.search) {
        let origin = location.origin == "https://media.discordapp.net" ? "https://cdn.discordapp.com" : location.origin;
        location.assign(origin + location.pathname);
    };
})();
