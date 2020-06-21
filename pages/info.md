# Javascript Snippets

아래 페이지들은 특별한 라이브러리를 사용하지 않고, 바닐라 자바스크립트를 연습하여 제작한 페이지들입니다.

## 바닐라 자바스크립트 연습 목록

1. <h3 id="p1"> 라이브 서치 (Live Search) </h3>

   [링크](https://hwhang0917.github.io/js-snippets/pages/livesearch/)

   불러온 데이터를 DOM element로 디스플레이, 그리고 키보드 입력 이벤트마다 DOM element들을 실시간 필터링합니다. 데이터는 파이썬을 이용하여 "모여봐요 동물의 숲"에서 K.K.의 음악 리스트를 크롤링하여 JSON으로 불러왔습니다. 기존에는 실제 RESTful API 서버를 만들어 AWS 또는 heroku 등에 배포하려 했으나, 구글 유튜브 API의 하루 Request 제한으로 인해 무산되었습니다. 결국, 실시간으로 크롤링할 필요가 없다고 판단하여 한 번만 크롤링 된 JSON 파일을 Static 페이지로 Github page를 통하여 호스팅하였습니다. <sup id="a1">[1](#f1)</sup>

   - <b>시행착오:</b>

     - 각 노래의 썸네일 클릭 시에 유튜브 영상 리스트 모달을 띄우도록 기획하였는데, JS에서 XMLHttpRequest 요청하여 외부 JSON 을 가져오는 과정이 비동기적으로 실행되어 오류가 발생하였습니다. 이를 해결하기 위하여 getSongs() 함수 내에서 addEventListener을 실행하는 함수를 콜백하여 실행하여 해결.
     - 유튜브 영상 iframe을 HTML 페이지에 추가하는 과정에서 Refused to display 'url' in a frame because it set 'X-Frame-Options' to 'sameorigin' 에러 발생하였습니다. 따라서 [유튜브 iframe API](https://developers.google.com/youtube/iframe_api_reference)를 참고하여서 API를 직접 import 하여서 문서에서 설명해준 예시대로 사용하였습니다.

   - <b>업데이트</b>

     - <i>0.1.0 버전</i>

       - 유튜브 영상 리스트 모달 추가
       - Favicon 추가
       - 검색창 크기 증가

     - <i>0.2.0 버전</i>

       - Bug Fix: 나무위키 이미지 URL 변동으로 인한 이미지 미로딩 해결
         - 크롤링 소스를 [누키피디아](https://nookipedia.com/wiki/Main_Page)로 변경
         - 크롤링한 이미지를 다운받아 클라우드에 저장: imgdb API 사용
         - [imgdb](https://imgbb.com/)에 이미지를 저장하여 해당 URL로 썸네일 대체
       - Scrapper Bug Fix: [한글 제목을 스크래핑시 오류 해결](https://github.com/hwhang0917/acnh_json/blob/dev/python/songScrapper/koreanTitleScrapper.md)
       - 검색창 설명 삭제

     - <i>0.2.1 버전</i>

       - 개발로그 링크 추가
       - 썸네일 플레이 버튼 CSS border => 텍스트로 변경
       - [웹스크래퍼](https://hwhang0917.github.io/acnh_json/) JSON 형식 변경에 따라 썸네일 클릭시 불러오는 유튜브 중지

   - <b>TODO: </b>
     - [ ] 콜백 함수들을 Promise 패턴으로 리팩토링
     - [ ] 유튜브 링크를 flac 파일로 대체

2. <h3 id="p2"> 한글 단어 카운터 </h3>

   [링크](https://hwhang0917.github.io/js-snippets/pages/hangul-counter/)

   현재 작업중... <br>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio sapien, consectetur sed lacus in, luctus cursus urna. Suspendisse non enim nec diam mattis consectetur eu id sem. Fusce accumsan augue sit amet purus pharetra, sit amet lobortis dui vestibulum. Morbi accumsan diam non facilisis tempor. Cras tristique augue a risus vestibulum, eu suscipit nisl vehicula. Aenean risus diam, ullamcorper nec massa in, laoreet volutpat metus. Nulla rhoncus lectus sit amet est sodales rutrum ac sit amet diam.

---

## 각주

<small id="f1">1</small> [ACNH JSON mock API](https://hwhang0917.github.io/acnh_json/) [↩](#a1)
