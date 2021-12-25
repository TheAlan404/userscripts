// ==UserScript==
// @name         YoutubeKeybinds
// @version      0.2
// @description  'S' => search box\n'R' => related/recommended videos\n'B' => unfocus/focus to body (can be used to navigate to search box after pressing R)
// @author       Dennis_#3272
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       document-end
// @grant        none
// @updateURL    https://github.com/TheAlan404/userscripts/raw/main/YoutubeKeybinds.user.js
// @downloadURL  https://github.com/TheAlan404/userscripts/raw/main/YoutubeKeybinds.user.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        const search = document.getElementsByTagName("input").search;
        const related = document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer")[1];

        window.__related = related;
        console.log(related);

        const keybinds = {
            s: [true, () => {
                search.focus();
                search.select();
            }],
            r: [true, () => {
                // Proof that im a shitcoder:
                related.children[0].children[0].children[0].children[0].focus();
            }],
            b: [
                (e) => ["A", "BUTTON"].includes(e.target.tagName),
                () => document.activeElement.blur()],
        };

        window.addEventListener("keypress", (e) => {
            let k = e.key.toLowerCase();
            if(!keybinds[k] || (keybinds[k][0] === true && e.target != document.body)) return;
            if(typeof(keybinds[k][0]) == "function" && !keybinds[k][0](e)) return;
            e.preventDefault()
            keybinds[k][1]();
            console.log(`[YoutubeSearchKeybind] Keybind '${k}' was pressed`);
        });

        console.log("[YoutubeSearchKeybind] Running.");
    }, 1000);
})();
