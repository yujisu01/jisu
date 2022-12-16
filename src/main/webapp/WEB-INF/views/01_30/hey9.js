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


/**
	1-028. 문자열 공백 처리하기
	- 문자열.trim() : 공백제거 (트리밍이라고 함)
 */

const tar1= '    Hi     ';
const trim1= tar1.trim();
console.log(trim1); 

const tar2= 'god\n';
const trim2= tar2.trim();
console.log(trim2);


/**
	1-029. 문자열 검색(인덱스검색)
	- 대상문자열.indexOf(검색대상문자열,[검색시작인덱스*])
	- 대상문자열.lastIndexOf(검색대상문자열, [검색시작인덱스*])
	- 대상문자열.search(정규표현)
	- 지정한 문자열 못찾으면 -1 반환
 */

console.log('--------------문자열 검색---------------');

const myStr= 'javascript를 배워보자';

// 지정문자열 존재
const a1= myStr.indexOf('javascript');
console.log(a1);

const a2= myStr.indexOf('배워');
console.log(a2);

// 지정문자열 존재X
const b1=myStr.indexOf('ht');
console.log(b1);

// 검색시작 인덱스 지정
const c1= myStr.indexOf('java', 3);
console.log(c1);


console.log('--------------index.html파일과 ---------------');

const targetString='JavaScript를 배우자';
document.querySelector('.result1').innerHTML=targetString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML=targetString.indexOf('배우자');



/**
	1-030. 문자열 검색(부분검색)
	- 지정문자열 포함여부 확인
	- 입력폼의 부적절한 문자 체크시
	- 대상문자열.includes(검색대상문자열,[검색시작인덱스]) : 위치상관없이 지정문자열 포함돼있으면 true
	- 대상문자열.startsWith(검색대상문자열,~) : 시작문자열이 인수와 같은지 확인
	- 대상문자열.endsWith(검색대상문자열,~) : 종료문자열확인
 */

const ms= 'newJeans 공주님';

const aa= ms.includes('newJeans');
console.log(aa);
const bb= 'newJeans 공주님'.startsWith('공주님');
console.log(bb);
const cc= 'newJeans 공주님'.endsWith('공주님');
console.log(cc);
