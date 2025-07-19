// ==UserScript==
// @name         미밐 불필요한 광고 요청 차단
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  의미 없는 NO_CONTENT 응답 요청하는 API 하나 차단합니다.
// @match        *://memic.at/*
// @match        *://shelter.id/*
// @grant        none
// @author       isnoa
// ==/UserScript==

(function () {
  "use strict";

  const BLOCK_URL = "https://rest.memic.at/v2/ads/display-board/random";
  const originalFetch = window.fetch;

  // XHR 차단
  Object.defineProperty(window, "XMLHttpRequest", {
    value: class extends XMLHttpRequest {
      open(method, url) {
        if (url === BLOCK_URL) {
          this.readyState = 4;
          this.status = 204;
          setTimeout(() => this.onreadystatechange?.(), 0);
          return;
        }
        super.open(method, url);
      }
    },
  });

  // Fetch 차단
  window.fetch = function (input, init) {
    const url = typeof input === "string" ? input : input.url;
    return url === BLOCK_URL
      ? Promise.resolve(new Response(null, { status: 204 }))
      : originalFetch.call(this, input, init);
  };
})();
