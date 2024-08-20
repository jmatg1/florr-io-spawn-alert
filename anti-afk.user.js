// ==UserScript==
// @name         Anti AFK
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Anti AFK
// @author       @jmatg1
// @match        https://florr.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=florr.io
// @grant        none
// ==/UserScript==

fetch('https://raw.githubusercontent.com/jmatg1/florr-io-spawn-alert/main/anti-afk.js?v='+Math.random())
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    eval(data);
  });
