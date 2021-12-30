// ==UserScript==
// @name         YoutubeKeybinds
// @version      0.3
// @description  'S' => search box
//               'R' => related/recommended videos
//               'B' => unfocus/focus to body (can be used to navigate to search box after pressing R)
// @author       Dennis_#3272
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       document-end
// @grant        none
// @updateURL    https://github.com/TheAlan404/userscripts/raw/main/YoutubeKeybinds.user.js
// @downloadURL  https://github.com/TheAlan404/userscripts/raw/main/YoutubeKeybinds.user.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        const search = () => document.getElementsByTagName("input").search;
        const related = () => document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer")[1];

        const keybinds = {
            s: [{ body: true, playerOnly: false }, () => {
                search().focus();
                search().select();
            }],
            r: [{ body: true, playerOnly: true }, () => {
                // Proof that im a shitcoder:
                related().children[0].children[0].children[0].children[0].focus();
            }],
            b: [{ playerOnly: false, filter: (e) => ["A", "BUTTON"].includes(e.target.tagName) },
                () => document.activeElement.blur()
            ],
        };

        window.addEventListener("keypress", (e) => {
            let k = e.key.toLowerCase();
            if(!keybinds[k]) return;
            let sets = keybinds[k][0];
            if(sets.body && e.target != document.body) return;
            if(sets.filter && !sets.filter(e)) return;
            if(sets.playerOnly && window.location.pathname != "/watch") return;
            e.preventDefault();
            keybinds[k][1]();
            console.log(`[YoutubeSearchKeybind] Keybind '${k}' was pressed`);
        });

        console.log("[YoutubeSearchKeybind] Running.");
    }, 1000);
})();
