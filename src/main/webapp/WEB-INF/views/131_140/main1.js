/**
 * 1-131. 사이즈 벗어난 화면 처리하기
	- 스마트폰 가로,세로 화면전환시 작업처리
	- matchMedia(미디어쿼리), matchMedia.addListener(처리)
 */

//matchMedia()는 인수에 따라 미디어쿼리 정보반환함.
//const mediaQueryList1= matchMedia('(min-width: 500px)');
//console.log(mediaQueryList1);

/*출력결과
	{
		matches: true,		// 윈도창 크기가 500px이상일때
		media:'(min-width:500px)'
	}
*/

// 윈도창 크기가 600px이상인 경우와 미만인 경우에 대해 색상을 변경하는 샘플
// .rectangle 요소에 대해 크기 600px를기준으로 bigSize 클래스설정. 이 요소에따라 색변경됨
const rectangle= document.querySelector('.rectangle');
const mediaQueryList= matchMedia('(min-width: 600px)');

// 미디어쿼리변화 시점에 따라 처리
// addEventListener / addListener 차이?
// 
mediaQueryList.addListener(onMediaQueryChange);

/* 미디어쿼리변화 시점에 따라 실행되는 함수 */ 
function onMediaQueryChange(mediaQueryList) {
	if(mediaQueryList.matches===true){
		rectangle.classList.add('big-size');
		console.log('윈도우 창 크기가 600px 이상입니다');
	}else{
		rectangle.classList.remove('big-size');
		console.log('윈도우 창 크기가 600px 미만입니다.');
	}
}

// 화면 표시 시점에 onMediaQueryChange() 1회실행
onMediaQueryChange(mediaQueryList);


/**
	1-132. 이벤트 작동 설정하기
	- 비동기 처리타이밍을 표시할때
	- 이벤트타깃.dispatchEvent(이벤트)
	- new Event('이벤트',[{detail:데이터}])
	
 */
// dispatchEvent() 는 이벤트 타깃에 임의의 이벤트 발생시킴. 
// 프로그램시작 1초후 #myBox요소클릭이벤트를 실행하는 샘플
const boxElement= document.querySelector('#myBox');

boxElement.addEventListener('click', () =>{
	boxElement.innerHTML= 'click event';
});
setTimeout(() => {
	boxElement.dispatchEvent(new Event('click'))
},1200);




/**
	1-133. 기본이벤트 작동 해지설정하기
	- 마우스 휠의 기능 무효화
	- 터치기능 무효화
	- preventDefault() : 기본이벤트 작동해지
 */

/* 마우스휠 무효화 전환변수 */
let enableMouseWheel=true;

/* 체크박스 클릭시 처리작업 */
document.querySelector('#mouseWheelToggle').addEventListener('click', ()=>{
	// 체크박스에 값들어오면 마우스휠기능 무효화
	enableMouseWheel=event.target.checked===false;
});
// 스크롤 요소에서 스크롤시 처리작업
document.querySelector('.scrollable-element').addEventListener('wheel', (event) => {
	// 마우스 휠기능 작동상태시 무효처리 스킵
	if(enableMouseWheel===true) {
		return;
	}
	// 마우스 휠무효화시 event.preventDefault()작동
	event.preventDefault();
});





