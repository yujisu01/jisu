/**
 * 1-219. 지정 시간후 작업실행하기
	-작업 처리 지연시키고 싶을때
	- 비표시 요소를 지정시간 경과후 표시하고 싶을때
 */
console.log('실행 시작시간', new Date().toLocaleTimeString());

setTimeout(() => {
	console.log('setTimeout 실행후 시간', new Date().toLocaleTimeString());
},2000);		// 1초후 실행


/**
	1-210. 지정시간후 작업실행 해제하기
	- setTimeout() 처리 해제
 */
const timerId = setTimeout(timer1, 3000);

//console.log('실행 해제', new Date().clearTimeout(timerId));

function timer1(){
	console.log(new Date().toLocaleTimeString());
}
clearTimeout(timerId);

