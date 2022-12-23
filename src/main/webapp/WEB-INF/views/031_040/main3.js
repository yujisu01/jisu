/**
 * 1-036. 문자열 합치기
	- `${문자열1}${문자열2}..`
 */

// +로 문자열 합치기
const country='korea';
const state='seoul';
console.log(country+state);

// 템플릿 문자열 `` 사용해서 결합
console.log(`${country}${state}`);

// 입력받은 성과 이름을 결합
/* 성 입력란 */
const familyName= document.querySelector('#familyName');
/* 이름 입력란 */
const firstName= document.querySelector('#firstName');
/* 성명 */
const fullName= document.querySelector('#fullName');

// 문자입력때 마다 onKeyUp() 실행
firstName.addEventListener('keyup', onKeyUp);
familyName.addEventListener('keyup', onKeyUp);

/* 문자 입력떄마다 실행되는 함수 */
function onKeyUp(){
	// 성
	const family = familyName.value;
	// 이름
	const first = firstName.value;
	// 섬명출력
	fullName.innerHTML= family+''+first;
}



/**
	1-037. 문자열 대소문자 변환하기
	- 소문자를 대문자로 변환
	- 서버에서 반환된 대문자-> 소문자로 변환
 */

console.log('TEST'.toLowerCase());
console.log('spider man'.toUpperCase());

// 대소문자 상관없이 입력폼에 특정단어 입력하면 알림을 표시하는 샘플

const nameInput= document.querySelector('.name-input');
const warningMessage=document.querySelector('.warning-message');

// .name-input에 문자 입력할때마다 실행
nameInput.addEventListener('input', () => {
	// 입력된문자 가져옴
	const inputStr = nameInput.value;
	// 입력된 문자를 소문자로 변환
	const normalStr= inputStr.toLowerCase();
	
	// 'test'포함 여부 알림
	if(normalStr.includes('test') === true){
		warningMessage.textContent='test가 포함되어 있음';
	}else{
		warningMessage.textContent = '';
	}
});




/*
*	1-038. 문자열과 식 함께 다루기
	- 여러 문자열 다루고 싶을때
	- 문자열 내 변수를 다루고싶을때
*/

const uName="댕댕이";
const tat='<div class="container">' + '안녕하세요'+ uName +'님'+ '</div>';
console.log(tat);

const tag=`<div class="container"> 안녕하세요 ${uName} 님 </div>`;
console.log(tag);

const str2= `123 x 123은 ${123 * 123} 입니다.`;
console.log(str2);

// 오늘날짜 불러오기
const today= new Date();
// #main내부의 html코드를 동적으로 작동
document.querySelector('#main').innerHTML = `
	<h1>오늘 ${today.getMonth() +1}/ ${today.getDate()}의 날씨</h1>
	<p>서울은 맑음</p>
`;



/**
	1-039. 정규표현식 사용하기
	- 조건과 일치하는 문자열 검색
	- 많은 문자열을 패턴에 따라 일괄적으로 변환할려고 할때
 */

// 예를들어서.. 접속한 브라우저가 iOS인지 확인하고 싶을때 유저 에이전트를 통해 ios유저인지 확인할수 있다
// 정규표현을 사용한 코드
/*if (/iPhone|iPod|chorome/.test(navigator.userAgent)){
	alert('접속한 브라우저는 ios입니다');
}
// 정규표현을 사용하지 않은 코드
if(
	navigator.userAgent.includes('iPhone') ||
	navigator.userAgent.includes('iPod') ||
	navigator.userAgent.includes('iPad')
){
	alert('접속한 브라우저는 iOS입니다');
}
*/

const test= navigator.userAgent.toLowerCase();
let result;
if(test.indexOf('chrome') >= 0){
	result='chrome';
	alert('chrome');
}else if(test.indexOf('edg')>=0){
	result='edge';
	alert('?');
}
console.log(test);



