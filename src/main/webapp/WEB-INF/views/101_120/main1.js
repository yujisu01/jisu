/**
 * 1-101. 페이지 이동 하기
	- a 태그외의 방법
 */
console.log(location.href); 	// 현재 페이지 URL

const btn=document.querySelector('#urlBtn');
btn.addEventListener('click', (event) =>{
	location.href='file:///C:/Users/user/eclipse-workspace/jisu/src/main/webapp/WEB-INF/views/091_100/index.html'; 	// 해당 페이지 이동
});

/**
	1-102. 페이지 리로드하기
	- 새로고침
 */
const reBtn=document.querySelector('#reloadBtn');
reBtn.addEventListener('click', (event) =>{
	location.reload(true);
	console.log('tt');
});



/**
	1-103. 페이지 이동(앞/뒤로 가기)
	- 브라우저의 뒤로가기 버튼같은 동작
 */
const backBtn=document.querySelector('#bBtn');
backBtn.addEventListener('click', (event) =>{
//	if(history.go(-1)){
		history.back();
//	}else{
//		alert("페이지가 없습니다");
//	}
	
});
const forBtn=document.querySelector('#fBtn');
forBtn.addEventListener('click', (event) =>{
	history.forward();
});


/**
	1-104. 해시(#) 처리하기
	- 딥링크 구현
	- 해시값에 따라 처리 구분
 */

//location.hash 속성으로 앵커기능(페이지 내부의 링크기능,읽기쓰기 가능) 사용가능.
 const hash=location.hash;
console.log(hash);
//location.hash='app';


/**
	1-105. 해시변경 확인하기
	- 해시값 변경떄마다 작업을 처리
 */
// url의 해시가 변경될때마다 작업을 처리하고 싶을때 window객체의 hashchange 이벤트 확인.
window.addEventListener('hashchange',handleHashChange);
handleHashChange();

function handleHashChange(){
	const newHash= location.hash;
	document.querySelector('.hashLog').innerHTML=`현재 앵커는 ${newHash}입니다.`;
}


/**
	1-106. 새 윈도우창 열기
	- 현재페이지 그대로 둔채 새로운 창열기
 */
const winBtn = document.querySelector('#windowBtn');
winBtn.addEventListener('click', (event) => {
	window.open('file:///C:/Users/user/eclipse-workspace/jisu/src/main/webapp/WEB-INF/views/071_090/index.html');
});


/**
	1-107. 스크롤 크기 확인하기
	- 스크롤 크기에 따라 작업
 */
const x=window.scrollX;
const y=window.scrolly;
console.log(x,y);


/**
	1-108. 스크롤 설정
	- 페이지원하는 부분에 스크롤 넣을때
	- 상단(top)으로 가기 버튼
 */

//views/091_100/main1.js 에서 함


/**
	1-109. 타이틀 변경
	- 타이틀 동적으로 변환
	- 읽지않은 메시지건수를 타이틀 바에 표시
 */

const title=document.title='타이틀';
console.log(title);

document.querySelector('#btnHype').addEventListener('click', () =>{
	document.title='H y p e b o y 🍎';
});
document.querySelector('#btnDitto').addEventListener('click', () =>{
	document.title='D i t t o 🍊';
});


/**
	1-110. 포커스 확인
	- 페이지 포커스 유무를 확인하고 싶을대
	- 페이지에 포커스가 맞춰져 있을때만 음악 재생
 */
const focusOn = window.addEventListener('focus', () =>{
	document.querySelector('#focusLog').innerHTML = 'focus on';
	
	//var audio = new Audio('../101_120/image/5pm.mp3');
	//audio.play();
});

const focusOut = window.addEventListener('blur', () =>{
	document.querySelector('#focusLog').innerHTML = 'focus out';
});



// audio.play();
//audio.muted=true; 
//audio.play(); 
//audio.muted=false;


/**
	1-111. 전체화면 표시하기
	- 전체화면으로 콘텐츠 표시
	- 동영상을 전체화면으로 재생
	- 이어지는 콘텐츠 표시
 */
const fbtn = document.querySelector('#fullBtn');
fbtn.addEventListener('click', (event) => {
  // 전체 화면 전환
  myRequestFullScreen(document.body);
});

function myRequestFullScreen(element) {
  if (element.requestFullscreen) {
    // 표준 사양
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Safari, Chrome
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    // IE11+
    element.msRequestFullscreen();
  }
}

const btnExit = document.querySelector('#fullExitBtn');
btnExit.addEventListener('click', (event) => {
  // 전체 화면 해제
  myCancelFullScreen();
});

function myCancelFullScreen() {
  if (document.exitFullscreen) {
    // 표준 사양
    document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
    // Safari, Chrome
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    // IE 11+
    document.msExitFullscreen();
  }
}



/**
	1-112. 온라인/오프라인 대응하기
	- 오프라인 화면에 네트워크 연결상태 표시하고 싶을때
 */

// 접속상태확인
const online= navigator.onLine;
if(online === true){
	console.log('ON');
}else{
	console.log('OFF');
}

if(online === true){
	onLog('📶 O N');
}else{
	onLog('❎️ O F F');
}

// 온라인 상태가되면
window.addEventListener('online', () => {
	onLog('📶 O N');
});
// 오프라인 상태라면
window.addEventListener('offline', () => {
	onLog('❎️ O F F');
});
function onLog(message) {
	document.querySelector('.onLog').innerHTML=message;
}

// F12-> Network-> 체크박스 offline으로 체크 하고 확인
