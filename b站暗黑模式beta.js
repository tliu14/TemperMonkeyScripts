// ==UserScript==
// @name         B站自动设置暗黑模式Cookie
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  自动检测并设置B站暗黑模式cookie
// @author       Copilot
// @match        https://www.bilibili.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // 检查是否已存在 theme_style=dark
    if (document.cookie.split(';').some(c => c.trim().startsWith('theme_style=dark'))) {
        console.log('已存在 theme_style=dark，无需处理');
        return;
    }
    // 设置 theme_style=dark，作用于.bilibili.com，1年有效
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `theme_style=dark; domain=.bilibili.com; path=/; expires=${expires.toUTCString()}`;
    console.log('已设置 theme_style=dark，即将刷新页面。');
    location.reload();
})();