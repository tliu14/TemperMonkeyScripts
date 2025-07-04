// ==UserScript==
// @name         B站自动切换宽屏模式
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  自动检测并切换B站播放器为宽屏模式
// @author       Your name
// @match        https://www.bilibili.com/video/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    function switchToWideScreen() {
        const player = document.querySelector('.bpx-player-container');
        if (!player) return false;
        if (player.getAttribute('data-screen') !== 'wide') {
            const wideBtn = document.querySelector('.bpx-player-ctrl-btn.bpx-player-ctrl-wide');
            if (wideBtn) {
                wideBtn.click();
                console.log('已自动切换到宽屏模式');
                return true;
            }
        }
        return false;
    }

    // 只在需要时触发检测
    const observer = new MutationObserver(() => {
        if (switchToWideScreen()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    // 首次进入页面也检测一次
    switchToWideScreen();
})();