/*
	1-023. 임의의 수 다루기
	 - 임의의 확률을 사용해 작업하려고 할때
	 - 애니메이션에 임의의 값을 부여할때
	 - Math.random() : 부동소수점의 유사난수를 반환 (0~1)
 */

// Math.floor(Math.random() * 100) : 0이상 100미만 정수
// 10 + Math.floor(Math.random() * 10) : 10이상 20미만 정수
// crypto.getRandomValues() : 안전한 난수 사용하려면 이거씀. 

const rectangle = document.querySelector('.rectangle');

// 버튼 클릭 시 onClickButton( ) 실행
document.querySelector('.button').addEventListener('click', onClickButton);

/** 버튼을 누를 때마다 그라데이션 색상을 변경 */
function onClickButton() {
  // 0~359 사이 임의의 수를 가져오기
  const randomHue = Math.trunc(Math.random() * 360);
  // 그라데이션의 시작과 끝의 색상을 결정
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  // 직사각형의 그라데이션 처리 변수(--start, --end)
  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}



// 임의의 부호없는 32비트 배열난수 생성
//console.log(crypto.getRandomValues(new Unit32Array(10)).join(''));



/*
	1-024. 수학계산 함수 사용
	 - 절댓값 구할때 (Math.abs())
	 - 제곱근 구할때 (Math.sqrt())
	 - 대수 구할때 
	 - Math.E : 자연로그 e를 반환
 */

console.log(Math.abs(-10)); //절댓값
console.log(Math.pow(2,10)); // 2의 10승
console.log(Math.sign(2)); // 양수니까 1
console.log(Math.sign(-2)); // 음수니까 -1
console.log(Math.sqrt(16)); // 16의 제곱근
console.log(Math.log(Math.E)); // 자연로그 e는 1이래 



/* 
	1-025. 삼각함수 사용
	 - 삼각함수 계산할때
	 - 좌표에서 각도 구할때
	 - 호를 그리는 애니메이션 효과 줄때
 */
console.log('-----------삼각함수-------------');

console.log(Math.PI); //원주율
console.log(Math.cos(90 * Math.PI) / 180); // 코사인 다까먹었는데
console.log(Math.sin(90 * Math.PI) / 180); // sin90
console.log(Math.tan(45 * Math.PI) / 180);
console.log((Math.atan2(1,1) * 180)/ Math.PI); // (1,1)의 좌표가 이루는 각도 =45도 

/*
 Math.cos()와 Math.acos()에 전달하는 값의 단위는 라디안(radian)이라고 함.
 원주 길이는 '파이' 로 표현하니까 도수를 라디안으로 변환하는편이 사용하기 쉬움. 도수 변환식은 다음과 같다
	라디안=(도수*Math.PI) / 180;
 */ 

// 삼각함수를 사용해 원을 그리는 애니메이션 만들기. 반지름이 100인 원주에 degree위치 좌표 나타내기
//let degree =0; //각도
//const rotation = (degree * Math.PI) / 180; // 회전각을 라디안으로 구했다
//const targetX = 100 * Math.cos(rotation);
//const targetY = 100 * Math.sin(rotation);

// 이때 degree를 일정주기로 1도씩 증가시키면 호를 그리는 애니메이션 구현이 가능함.

const character = document.querySelector('.character');
let degree=0;
loop(); // 루프 개시


/**
 * 화면이 갱신될 때마다 실행되는 함수
 */
function loop() {
  // 회전각을 라디안으로 구하기
  const rotation = (degree * Math.PI) / 180;
  // 회전각으로 위치 구하기
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
  // character 위치 반영하기
  character.style.left = `${targetX}px`; // 와 `이거`였어; 
  character.style.top = `${targetY}px`;
  // 각도 1도 증가시키기
  degree += 1;
  // 다음 화면 갱신 타이밍에서 loop( ) 실행
  requestAnimationFrame(loop);
}


