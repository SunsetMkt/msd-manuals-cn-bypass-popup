// ==UserScript==
// @name         MSD Manuals CN Bypass Popup
// @namespace    https://www.msdmanuals.cn/
// @version      0.1
// @description  Automatically sets localStorage keys before DOM load to bypass the disclaimer popup on www.msdmanuals.cn.
// @license      GPL-3.0-only
// @match        *://www.msdmanuals.cn/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    try {
        localStorage.setItem("popupClicked", "true");
        localStorage.setItem("lastPopupClick", new Date().getTime().toString());
        console.log("[Userscript] MSD Manuals popup state initialized successfully.");
    } catch (e) {
        console.error("[Userscript] Failed to set localStorage:", e);
    }
})();
