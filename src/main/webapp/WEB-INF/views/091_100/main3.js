/**
	1-097. 윈도우 사이즈 확인하기
	- 화면을 브라우저 크기에 맞춰 표시
	- 화면폭에 맞춰 처리작업과 레이아웃 변경
 */
// window.innerWidth(), window.innerHeight()
// 단위는 px
const wid= window.innerWidth;
const hei= window.innerHeight;
console.log(wid, hei);
window.addEventListener('resize', resizeHandler);

function resizeHandler(event) {
  // 새로운 화면의 가로 길이
  const ww = innerWidth;
  // 새로운 화면의 세로 길이
  const hh = innerHeight;

  document.querySelector('.value-width').innerHTML = `가로 길이는 ${ww}px입니다.`;
  document.querySelector('.value-height').innerHTML = `세로 길이는 ${hh}px입니다.`;
};


/**
	1-098. 디바이스 화소 확인하기
	- 디바이스 화소비율에 따라 제어방식 구분
	- 고해상도 디바이스에서 큰이미지 사용
 */
const dpr= window.devicePixelRatio;
console.log(dpr);



/**
	1-099. 캔버스에 디바이스 화소맞추기
	- 캔버스요소를 고해상도 디스플레이로 표시하고 싶을때
 */

///디바이스 화소비율 가져오기
//const dpr = window.devicePixelRatio;
// 캔버스의 논리적 크기
const w = 1000;
const h = 1000;

// 캔버스 요소 사이즈 조정
const canvas = document.querySelector('canvas');
canvas.width = w * dpr; // 실제 크기는 배가 됨
canvas.height = h * dpr;
canvas.style.width = w + 'px'; // 화면 표시 단위 설정
canvas.style.height = h + 'px';

const context = canvas.getContext('2d');
// 스케일 설정
context.scale(dpr, dpr); // 내부적으로 두 배의 사이즈
// 원을 그림
context.fillStyle = 'purple';
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
context.fill();

// 화면에 로그를 표시
document.querySelector('.canLog').innerHTML = `디바이스의 픽셀 비율은 ${dpr}입니다.`;



/**
	1-100. 터치 디바이스 사용 확인하기
	-데스크탑과 모바일 브라우저에 따라 처리 구분하기
	- window.ontouchstart : 터치기능 시작이벤트 (함수)
	- window.pointerEnabled : 포인터 사용가능여부 (진릿값)
	- window.maxTouchPoints : 포인터의 최대치 (숫자)
 */

const isSupported=!!(
	'ontouchstart' in window || 
	(navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);
console.log(isSupported);

// ontouchstart를 사용해서 iOS와 안드로이드 단말기 확인가능
// 윈도용 터치 디바이스 확인은 pointerEnabled속성을 사용하며, 
// maxTouchPoints값이 0이상인 경우에도 터치조작이 가능한 디바이스이다.
