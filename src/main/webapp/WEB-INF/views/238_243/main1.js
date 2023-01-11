/**
 * 1-238. XMLHttpRequest로 데이터 읽어오기
- 구버전의 브라우저에서 데이터 전송하고싶을때
- new XMLHttpRequest() :인스턴스 생성
- open(메소드,url)   : 리퀘스트 초기화
- send() : 리퀘스트 전송
 */

// js에서 fetch()보다 오래된기능인 XMLHttpRequest()를 사용하면 처리가 복잡하지만, 저레벨 방식의 제어가 가능하고
// 구버전의 브라우저에서도 사용이 가능하다.
// XMLHttpRequest객체의 불러오기완료 확인은 load이벤트를 사용하며, 이벤트 핸들러에서
// responseText 속성을 사용해서 불러온 문자열 데이터 참조가 가능
const 