// ==UserScript==
// @name         B站自动切换宽屏模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动检测并切换B站播放器为宽屏模式
// @author       Your name
// @match        https://www.bilibili.com/video/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    function switchToWideScreen() {
        // 查找播放器容器
        const player = document.querySelector('.bpx-player-container');
        if (!player) return;

        // 检查data-screen属性
        if (player.getAttribute('data-screen') !== 'wide') {
            // 查找宽屏按钮
            const wideBtn = document.querySelector('.bpx-player-ctrl-btn.bpx-player-ctrl-wide');
            if (wideBtn) {
                wideBtn.click();
                console.log('已自动切换到宽屏模式');
            }
        }
    }
})();