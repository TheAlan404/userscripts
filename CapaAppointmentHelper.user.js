// ==UserScript==
// @name         CAPA
// @version      2024-08-01
// @description  çapa appointment helper
// @author       gökçe deniz
// @match        https://itfrandevu.istanbul.edu.tr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.tr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const ID = "";
    // format: "(000) 000 00 00"
    const PHONE = "";
    const FATHER = "";
    // format: "dd.mm.yyyy"
    const BIRTHYEAR = "";

    if(window.location.pathname == "/") {
        CloseLoginInfo()
        $("#idnumber")[0].value = ID;
        $("#phonenumber")[0].value = PHONE
        $("#fathername")[0].value = FATHER
        $("#birthyear")[0].value = BIRTHYEAR
        setInterval(() => CloseLoginInfo(), 500)
        $("#securitycode")[0].focus()
    } else if (window.location.pathname == "/Home/Index2/") {
        let status = 0

        setInterval(() => {
            let buttons = [
                "#normalRandevu",
                ".RandevuShadowBox.randevuAlDiv",
                "li[data-key='5fHeviOako67kPUgW133Nw==']",
            ]

            if(!buttons[status]) return;
            let el = $(buttons[status])[0];
            if(el) {
                el.click();
                status++;
            }
        }, 750);
    }
})();




//
