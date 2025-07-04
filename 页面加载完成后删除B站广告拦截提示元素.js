// ==UserScript==
// @name         页面加载完成后删除B站广告拦截提示元素
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  页面加载完成后删除B站广告拦截提示元素
// @author       Your name
// @match        *://*.bilibili.com/video/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    console.log('页面加载完成后删除B站广告拦截提示元素');
    document.querySelectorAll('.adblock-tips').forEach(el => el.remove());
})();