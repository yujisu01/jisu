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
		document.romoveEventListener('mousemove', onMouseMove);
	});
});

/* 마우스 움직임에 따른 처리 */
function onMouseMove(event){
	character.style.left = `${event.clientX - 100}px`;
	character.style.top= `${event.clinetY - 100}px`;
}
