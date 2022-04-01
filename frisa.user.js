// ==UserScript==
// @name         Stack Overflow Frisa Lank Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       DonaldDuck313
// @match        https://stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = "http://web.archive.org/web/20220331235805cs_/https://cdn.sstatic.net/Sites/stackoverflow/primary.css?v=0f27d01e00c2";
    document.head.prepend(css);

    document.body.classList.add("theme-custom", "theme-frisa");
})();
