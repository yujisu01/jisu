/**
 * 1-113. 이벤트 처리 이해하기
	- 유저의 조작에 따라 이벤트를 실행하고 싶을때
 */
const button=document.querySelector('.button');
button.addEventListener('click', onClickButton);

function onClickButton(){
	console.log('clickEvent');
}


/**
	1-114. 이벤트 추가하기
	- 이벤트 함수 지정
 */
//요소 참조정보 가져오기
button.addEventListener('click', function() {
	console.log('버튼 클릭');
});


/**
	1-115. 이벤트 리스너 1회 실행하기
	- 이벤트를 1회만 실행
	- capture:이벤트 캡쳐여부
	- once: 리스너 1회실행여부
	- passive: 패시브 이벤트여부
 */
const option ={once:true};
document.querySelector('.btn').addEventListener('click', onClickBtn, option);

function onClickBtn() {
	alert('일회용 ');
}



/**
	1-116. 이벤트 리스너 삭제
	- 이벤트 처리 삭제
 */
//removeEventListener() 

const box=document.querySelector('.box');
box.addEventListener('click', onClickB);

// 3초후 리스너의 함수를 삭제
setTimeout(() => {
	box.removeEventListener('click', onClickB);
},3000);

function onClickB(){
	alert('box click event ON');
	console.log(setTimeout);
}


/**
	1-117. 페이지 로드시 이벤트 사용
	- DOM요소 액세스 타이밍에 맞춰 작업처리시
	- 이미지 로딩 완료후 작업을 처리할때
	- DOMContentLoaded : html문서 로딩 완료시점
	- load : 모든 리소스 로딩완료시점
 */
// dom 액세스 타이밍에 처리 실행
window.addEventListener('DOMContentLoaded', () => {
	//.box1 요소 개수 가져오기
	const boxNum= document.querySelectorAll('.box1').length;
	// length 사용을 안하면 [object NodeList] 로 출력
	//const boxNum= document.querySelectorAll('.box1');
	console.log(`박스 개수는 ${boxNum}입니다.`);
});
const boxN=document.querySelectorAll('.box1').length;
console.log(`${boxN}`);

//script태그에 defer(맨날 설정하긴함)설정하면 html로딩후 스크립트 실행됨.
//이는 DOMContentLoaded보다 발생시점 앞섬. 그래서 defer설정하면
//DOMContentLoaded설정은 필요가 없다네?? 나 이해좀시켜주실분


/**
	1-118. 클릭이벤트 사용
 */
document.querySelector('.btnClick').addEventListener('click', () => {
	alert('그저 그렇다');
});



/**
	1-119. 마우스 조작이벤트 사용
	- 마우스 움직임에 따라 이미지에 애니메이션 효과
	- mousedown : 마우스 버튼 누를때
	- mouseup : 마우스 버튼 떼는 시점
	- mousemove : 마우스 움직이는 시점
 */
const logArea= document.querySelector('#log2');

// 영역에서 마우스버튼 누르면 로그출력
logArea.addEventListener('mousedown', () =>{
	logArea.innerHTML= `마우스 클릭 이벤트 발생`;
//	alert('마우스 클릭!');
});
// 영역에서 마우스버튼 떼면 로그 출력
logArea.addEventListener('mouseup', () =>{
	logArea.innerHTML=`마우스 버튼 떼는 이벤트 발생`;
	//alert('마우스 떼기!');
});
// 영역에서 마우스 움직이면 로그 출력
logArea.addEventListener('mousemove', () =>{
	logArea.innerHTML= `마우스 이동 이벤트 발생`;
//	alert('마우스 이동!');
});



/**
	1-120. 마우스 오버 이벤트 사용
	- 마우스오버
	- mouseenter : 요소의 위치에 있음
	- mouseleave : 요소 벗어날때
 */

document.querySelector('#mouseBox').addEventListener('mouseenter', () => {
	mouseLog('요소 안');
});
document.querySelector('#mouseBox').addEventListener('mouseleave', () => {
	mouseLog('요소 밖');
});

function mouseLog(message){
	console.log(message);
}


window.addEventListener('scroll', () =>{
	console.log('스크롤작업', window.scrollX, window.scrollY);
});
