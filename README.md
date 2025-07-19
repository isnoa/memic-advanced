## 📌 현재 사용가능한 스크립트

### 1. 미밐 불필요한 광고 요청 차단
- **기능**: `NO_CONTENT` 응답을 반환하는 의미 없는 광고 API 요청을 차단합니다.
- **차단 대상**: `https://rest.memic.at/v2/ads/display-board/random`
- **호환 사이트**: `memic.at`, `shelter.id` 도메인 전체
- **기술**: `fetch`와 `XMLHttpRequest`를 Override해서 특정 URL 차단
- **설치 RAW**: https://github.com/isnoa/memic-advanced/raw/refs/heads/main/memic_ads_request_block.user.js

### 2. 미밐 게시글 자동새로고침
- **기능**: 5초 간격으로 자동 새로고침을 수행하며, 상태를 저장하여 페이지 재방문 시에도 설정이 유지됩니다.
- **주요 특징**:
  - 커뮤니티 페이지(`?type=community`)에서만 동작
  - 페이지 가시성 변경 시 최적화 (탭 전환 감지)
  - SPA(React/Angular) 환경 대응을 위한 URL 변경 감지
  - 사용자 설정 저장 (`GM_setValue`/`GM_getValue` 사용)
- **UI**: 헤더에 토글 버튼이 추가되며, 활성화 상태에 따라 아이콘 색상 변경
- **설치 RAW**: https://github.com/isnoa/memic-advanced/raw/refs/heads/main/memic_article_autorefresh.user.js

---

## 🛠 설치 방법
1. Tampermonkey 확장 프로그램 설치 ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/))
2. 원하는 스크립트의 "설치 RAW" 링크를 열어 자동 설치

---

## Thanks to

### 프론트 부분 기여: @raws6633
