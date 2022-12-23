/**
 * 1-091. 경과 시간확인하기
	- 데이터 통신시간을 확인하고 싶을대
	- 자바스크립트 처리시간 확인
 */
// Date 객체로 시간 차이 계산하기. 


const old=Date.now();
setInterval(()=> {
	const curr=Date.now();
	//경과한 밀리초 가져오기
	const diff = curr-old;
	// 초 단위 변환은 1000으로 나누고 소수점 처리하기
	const sec=Math.floor(diff/1000);
	
	document.querySelector('#log').innerHTML=`${sec}초 경과`;
});



/**
	1-092. 카운트다운
	- 제한시간 지정해서 카운트다운
	- setInterval(함수,밀리초) : 밀리초후 함수실행
 */

const totalTime=15000; 	// 10초
const oldTime=Date.now();

const timerId = setInterval(() => {
	const currentTime = Date.now();
	const differ=currentTime-oldTime;
	// 남은 밀리초 계산
	const remainSec=totalTime-differ;
	// 밀리초를 정수의 초단위로 변환
	const remain = Math.ceil(remainSec/1000);
	
	let label = `남은 시간 ${remain}초`;
	// 0초 이하의 처리작업
	if(remainSec <= 0){
		// 타이머 종료
		clearInterval(timerId);
		// 타이머 종료 표시
		label='종료';
	}
	//console.log(currentTime);
	//console.log(differ);
	//console.log(remainSec);
	//console.log(remain);
		// 화면에 표시
		document.querySelector('#logTimer').innerHTML=label;
},1000);


/**
	1-093. 아날로그 시간 표시하기
 */

setInterval(() => {
	// 현재시간
	const now= new Date();
	// 시간을 단위로 추출하기
	const h=now.getHours(); // 0~23
	const m=now.getMinutes();	// 0~59
	const s=now.getSeconds(); 	// 0~59
	// 시계바늘의 각도반영
	// 시침(시침은 시와함께 분의 각도도 고려)
	const degH= h*(360/12) + m*(360/12/60);
	const degM= m*(360/60);
	const degS= s*(360/60);
	
	const eH = document.querySelector('.lineHour');
	const eM = document.querySelector('.lineMin');
	const eS = document.querySelector('.lineSec');
	
	eH.style.transform = `rotate(${degH}deg)`;
	eM.style.transform = `rotate(${degM}deg)`;
	eS.style.transform = `rotate(${degS}deg)`;
},50);



const x=window.scrollX;
const y=window.scrolly;
console.log(x,y);


const scrBtn=document.querySelector('#scrollBtn');
scrBtn.addEventListener('click', (event) =>{
	window.scrollTo(100,0);
	console.log(window.scrollTo(100,0));
});