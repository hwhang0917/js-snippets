# Javascript Snippets

아래 페이지들은 특별한 라이브러리를 사용하지 않고, 바닐라 자바스크립트를 연습하여 제작한 페이지들입니다.

## 바닐라 자바스크립트 연습 목록

1. <h3 id="p1"> 라이브 서치 (Live Search) </h3>

   [링크](https://hwhang0917.github.io/js-snippets/pages/livesearch/)

   불러온 데이터를 DOM element로 디스플레이, 그리고 키보드 입력 이벤트마다 DOM element들을 실시간 필터링합니다. 데이터는 파이썬을 이용하여 "모여봐요 동물의 숲"에서 K.K.의 음악 리스트를 크롤링하여 JSON으로 불러왔습니다. 기존에는 실제 RESTful API 서버를 만들어 AWS 또는 heroku 등에 배포하려 했으나, 구글 유튜브 API의 하루 Request 제한으로 인해 무산되었습니다. 결국, 실시간으로 크롤링할 필요가 없다고 판단하여 한 번만 크롤링 된 JSON 파일을 Static 페이지로 Github page를 통하여 호스팅하였습니다. <sup id="a1">[1](#f1)</sup>

   - <b>시행착오:</b>

     - 각 노래의 썸네일 클릭 시에 유튜브 영상 리스트 모달을 띄우도록 기획하였는데, JS에서 XMLHttpRequest 요청하여 외부 JSON 을 가져오는 과정이 비동기적으로 실행되어 오류가 발생하였습니다. 이를 해결하기 위하여 getSongs() 함수 내에서 addEventListener을 실행하는 함수를 콜백하여 실행하여 해결.
     - 유튜브 영상 iframe을 HTML 페이지에 추가하는 과정에서 Refused to display 'url' in a frame because it set 'X-Frame-Options' to 'sameorigin' 에러 발생하였습니다. 따라서 [유튜브 iframe API](https://developers.google.com/youtube/iframe_api_reference)를 참고하여서 API를 직접 import 하여서 문서에서 설명해준 예시대로 사용하였습니다.
     - 크롤링된 유튜브 영상들은 영문 제목을 유튜브에 검색했을때 가장 위의 결과물 5개 영상이였습니다. 때문에, 실제 노래와 맞지 않는 관련없는 영상이 포함되어있기도 하였습니다. 이에, 음악을 가져오는 소스를 [누키피디아](https://nookipedia.com/wiki/Main_Page)에 있는 flac 파일 링크로 대체하였습니다.

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

     - <i>0.3.0 버전</i>

       - 기존 유튜브였던 오디오 파일을 flac 링크로 대체
         - 모달에서 [HTML audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)를 띄움

     - - <i>0.3.1 버전</i>

       - 기존 검색창의 onkeyup 이벤트는 클립보드로부터 마우스로 붙여넣기한 이벤트를 인지하지 못하였음.
         - onkeyup 이벤트를 oninput 이벤트로 변경.

   - <b>TODO: </b>
     - [ ] 콜백 함수들을 Promise 패턴으로 리팩토링
     - [x] 유튜브 링크를 flac 파일로 대체

2. <h3 id="p2"> 한글 글자 카운터 및 통계 </h3>

   [링크](https://hwhang0917.github.io/js-snippets/pages/hangul-counter/)

   영문에서 자주 쓰는 알파벳을 통계를 읽어봤을 때 알파벳 e가 가장 많이 쓰인다는 것을 알게 되었는데, 한국어 (한글)도 이런 통계를 구하는 웹 어플리케이션을 만들어보겠다고 기획하게 되었습니다. 한글 같은 경우는 [나무위키의 현대 한글의 모든 문자 유니코드](https://namu.wiki/w/%ED%98%84%EB%8C%80%20%ED%95%9C%EA%B8%80%EC%9D%98%20%EB%AA%A8%EB%93%A0%20%EA%B8%80%EC%9E%90/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C)를 보게되면 알파벳 보다 훨씬 많은 량의 글자 조합이 가능한것을 알 수있습니다. 코드 자체는 입력된 문단의 텍스트를 단어별로 for 루프를 돌려, 글로벌로 선언된 오브젝트에 글자별로 카운터를 만들었습니다. 부가적으로 input 이벤트가 발생할 때마다 글자 수를 업데이트하여 표기하도록 만들었습니다.

   - <b>시행착오:</b>

     - 빈 JS 오브젝트에서 없는 글자는 undefined 타입인데, 여기서 ++ 연산자를 사용하여 increment시 NaN타입이 저장되는 것을 발견하였습니다. 그래서 통계를 계산하기 이전에 텍스트 문자별로 for 루프를 돌려 1로 지정되도록 initiate해주었습니다. 하지만 이런 방식을 사용할 시 텍스트에서 불필요한 for 루프가 돌게됩니다. 이를 해결하기 위해서 기존의 for 루프내 문자열이 undefined 일시 1로 initiate하는 조건문을 달았습니다.

   - <b>업데이트</b>

     - <i>0.1.0 버전</i>

       - 한글 글자수 카운터 추가
       - 한글 글자별 카운터 디스플레이
       - Favicon 추가

3. <h3 id="p3"> 클릭 & 로드 </h3>

   [링크](https://hwhang0917.github.io/js-snippets/pages/click-and-load/)

   현재 작업중... <br>
   드리블 프로젝트 예제를 보고 바닐라 자바스크립트로 클로닝 하였습니다. <sup id="a2">[2](#f2)</sup>

---

## 각주

<small id="f1">1</small> [ACNH JSON mock API](https://hwhang0917.github.io/acnh_json/) [⬆](#a1)
<br>
<small id="f2">2</small> [Dribble Upload](https://dribbble.com/shots/6052541-Upload-window-interactions) [⬆](#a2)
