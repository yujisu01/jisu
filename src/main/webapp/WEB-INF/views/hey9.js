/**
	1-026. 문자열 다루기
	 - 문자열길이 확인시
	 - 문자열 검색,추출, 변환
	 - 문자열 나누거나 결합할때 
 */

/*
	특수문자 사용
	- \' (작은따옴표), \" (큰따옴표)
	- \` (백틱) , \\ (역슬래시)
	- \n (줄바꿈), \r (되돌리기)
 */

console.log('\'');
console.log('\n');

/**
	1-027. 문자열 길이 확인하기
	- 문자열.length (문자열길이)
	- Array.from(문자열).length 
 */
console.log('----------------문자열길이확인-----------------');

console.log('웹디자인'.length);
console.log('JavaScript'.length);
console.log('                  '.length);

console.log('--------------문자수 카운팅----------------');

let textarea = document.querySelector('.textarea');
let string_num = document.querySelector('.string_num'); // 입력중인문자수
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp(){
	// 입력된 텍스트
	const inputText = textarea.value;
	string_num.innerText= inputText.length;
}





