/**
 * 1-121. 마우스오버 이벤트 사용하기(이벤트 버블링)
	-mouseover, mouseout
 */
// mouseover,mouseout은 mouseenter, mouseleave와 다르게 이벤트버블링 발생
// 이벤트버블링이란? 자식요소에서 발생한 이벤트가 부모요소까지 전잘되는것.
// ex: 버블링이 일어나는 mouseover의 이벤트 리스너를 부모와 자식요소 모두에 설정하면
// 자식요소에서 발생한 이벤트가 부모요소에서도 발생하는것 이라고 한다..

document.querySelector('.box').addEventListener('mouseover', () =>{
	log('.box요소 위치에 마우스가 있음');
});
document.querySelector('.inner').addEventListener('mouseover', () =>{
	log('.inner요소 위치에 마우스가 이씀');
});
function log(message){
	console.log(message);
}


/**
	1-122. 마우스 좌표 확인하기
	- event.clientX, event.clinetY : 브라우저 좌측상단 기준 X,Y좌표
	- event.offsetX, event.offsetY : 요소 좌측상단 기준 x,y좌표
	- event.pageX, event.pageY : 페이지 좌측상단 기준 x,y좌표
	- event.screenX, screenY : 디바이스 좌측상단 x,y좌표
 */
/* 캐릭터이미지 */
const character= document.querySelector('.character');

// 화면에서 마우스 클릭시 캐릭터 이동시작
document.addEventListener('mousedown', () => {
	// 마우스 움직임에 따라 캐릭터 이동
	document.addEventListener('mousemove', onMouseMove);
	
	// 화면에서 마우스 클릭 떼면 캐릭터 이동 멈춤
	document.addEventListener('mouseup', () => {
		document.removeEventListener('mousemove', onMouseMove);
	});
});

/* 마우스 움직임에 따른 처리 */
function onMouseMove(event){
	character.style.left = `${event.clientX - 100}px`;
	character.style.top= `${event.clinetY - 100}px`;
}


/**
	1-123. 스크롤 이벤트 처리하기
	- 스크롤 분량에 따라 요소의 표시를 지연시킬때
 */

window.addEventListener('scroll', () =>{
	console.log('스크롤작업', window.scrollX, window.scrollY);
});




/**
	1-124. 텍스트 선택 이벤트 처리하기
	- 텍스트선택시점에 작업 처리/무효화 할때
 */

const balloon = document.querySelector('#balloon');	// 말풍선
const paragraph = document.querySelector('.paragraph');	// 대상 문자열

// 선택 작업시 처리
paragraph.addEventListener('selectstart', () => {
	// 클릭 해제시 처리 
	paragraph.addEventListener('mouseup', (event) => {
		// 선택한 문자열 가져오기 
		const selectionCharacters= window.getSelection().toString();
		if(selectionCharacters.length>0){
			// 한글자 이상인 경우 문자를 표시
			balloon.innerHTML=selectionCharacters;
			balloon.classList.add('on');
			balloon.style.left=`${event.clientX-balloon.clientWidth / 2}px`;
			balloon.style.top=`${event.clientY-balloon.clinetHeight * 9}px`;
		}else{
			// 선택된 문자열이 없으면 말풍선 닫기
			removePopup();
		}
		}, {once:true}
	);
});

// 말풍선 클릭시 닫기
balloon.addEventListener('click', removePopup);
// 말풍선 닫기
function removePopup(){
	balloon.classList.remove('on');
}



/**
	1-125. 터치이벤트 처리
	- 스마트폰 터치반응처리
	- touchstart(): 터치시작지점, touchmove() : 터치포인트 움직이는 시점, touchend(): 터치종료
 */
const targetBox= document.querySelector('.box25'); // 터치이벤트 확인용
const logArea = document.querySelector('.log');		// 로그출력 영역

targetBox.addEventListener('touchstart', () =>{
	logArea.innerHTML = '터치시작';
});

// 터치 위치이동시 영역에 로그표시
targetBox.addEventListener('touchmove', () =>{
	logArea.innerHTML = '터치위치 이동';
});

// 터치종료시 영역에 로그표시
targetBox.addEventListener('touchend', () => {
	logArea.innerHTML = '터치종료';
});
// 확인 어케하지...



/**
	1-126. 터치이벤트 정보 확인하기
	- 마우스움직임에 따라 작업처리
	- 터치에 반응하는 요소 처리 (멀티 터치는 동시발생 가능하므로 각각의 터치정보에 액세스)
	- event.changedTouches
 */
const targetBox26= document.querySelector('.box26');
const log26= document.querySelector('.log26');

// 화면의 터치위치 변경시 로그표시
targetBox26.addEventListener('touchmove', () =>{
	const touch = event.changedTouches;
	
	log26.innerHTML = `
		${touch[0].pageX.toFixed(2)}<br>
		${touch[0].pageY.toFixed(2)}
	`;
});



/**
	1-127. 키보드 입력 이벤트 처리하기
	- 문자입력때마다 작업 실행
	- keydown() : 키를 누르는시점, keyup() : 누른키를 뗴는 시점, keypress(): 문자키가 눌러진시점
 */

document.querySelector('.textarea').addEventListener('keydown', () => {
	console.log('keydown:키보드 눌렀어요');
});
document.querySelector('.textarea').addEventListener('keypress', () => {
	console.log('keypress: 문자 입력됏어요');
});
document.querySelector('.textarea').addEventListener('keyup', () =>{
	console.log('keyup: 키눌림 해제됏어요');
});

// .class, #id
/* 텍스트 영역 */ 
const textarena = document.querySelector('.textarena');
const string_num = document.querySelector('.string_num'); // 입력중인 문자수

//텍스트입력시마다 onKeyUp() 실행
textarena.addEventListener('keyup', onKeyUp);

function onKeyUp(){
	const inputText = textarena.value; // 입력된 텍스트
	string_num.innerText = inputText.length;
}




/**
	1-128. 입력된 키정보 확인하기
	- 눌러진 키값 보기
 */
const textlog= document.querySelector('.textLog');

textlog.addEventListener('keyup', (event) => {
	console.log(event.key);	// 눌러진 키값
	console.log(event.code); 	// 눌러진 버튼의코드
	console.log(event.altKey); 	// alt키 눌렀는지
	console.log(event.ctrlKey); // ctrl키 눌렀는지
	console.log(event.shiftKey); // shift키 눌렀는지
	console.log(event.metaKey);	// 윈도키 눌렀는지
	console.log(event.repeat);	// 현재키 눌러진 상태확인
	console.log(event.isComposing);	// 입력중 상태확인 (특수기호등 입력변환작업중인 경우)
	console.log(event.keyCode);		// 눌러진키의 아스키 코드값(숫자로 반환)
	console.log('----------');
});

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
	const keyCode = event.keyCode;
	
	if(keyCode === 39){console.log('→ ㅋㅋ');}
	if(keyCode === 37){console.log('← ㅋㅋ');}
	if(keyCode === 38){console.log('↑ ㅋㅋ');}
	if(keyCode === 40){console.log('↓ ㅋㅋ');}
}



/**
	1-129. 탭화면 이벤트 처리하기
	- 브라우저탭 비활성화(백그라운드)시 시스템에 부하주는 작업을 멈추고 싶을때
	- 스마트폰 슬립모드에서 브라우저 복귀시점의 작업을 처리하고 싶을대
	- visibilitychange: 브라우저 탭상태가 변경되는 시점
 */
document.addEventListener('visibilitychange', () =>{
	console.log('------------------------');
	// 다른 창 갔따올때마다 랜덤숫자 하나씩 
	if(document.visibilityState === 'visible') {
		const ran= Math.random()*100;
		const randomNum = ran.toFixed(0);
		console.log(randomNum);
		return;
	}
	if(document.visibilityState === 'hidden') {
		console.log('콘텐츠 비활성화 (백그라운드) 상태');
	}
});


//if(document.visibilityState === 'visible'){
//	playsound();
//}
document.addEventListener('visibilitychange', () => {
	if(document.visibilityState === 'visible'){
		playsound();
		return;
	}
	if(document.visibilityState === 'hidden'){
		stopsound();
	}
});

function playsound(){
	const myAudio=document.getElementById("myAudio");
	myAudio.play();
}
function stopsound(){
	myAudio.pause();
}





/** 
	1-130. 화면사이즈 이벤트 처리
	- 윈도창 크기에 따라 처리분류할때
	- 레이아웃 크기조정
	- resize(): 브라우저 윈도창의 사이즈변환시점
*/

/* 가로길이 표시 */
const widthLog= document.querySelector('#widthLog');
/* 세로길이 표시 */ 
const heightLog= document.querySelector('#heightLog');

// 윈도사이즈 변경시마다 처리실행
window.addEventListener('resize', () =>{
	widthLog.innerText= `${window.innerWidth}px`;
	heightLog.innerText= `${window.innerHeight}px`;
});



