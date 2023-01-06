/**
 * 1-219. 지정 시간후 작업실행하기
	-작업 처리 지연시키고 싶을때
	- 비표시 요소를 지정시간 경과후 표시하고 싶을때
 */
console.log('실행 시작시간', new Date().toLocaleTimeString());

setTimeout(() => {
	console.log('setTimeout 실행후 시간', new Date().toLocaleTimeString());
},1000);		// 1초후 실행


/**
	1-210. 지정시간후 작업실행 해제하기
	- setTimeout() 처리 해제
 */
const timerId = setTimeout(timer1, 2000);

//console.log('실행 해제', new Date().clearTimeout(timerId));

function timer1(){
	console.log(new Date().toLocaleTimeString());
}
clearTimeout(timerId);




/**
	1-221.시간주기 작업 확인하기 ~ 1-222. 시간 주기 작업 해제 
	- 애니메이션 관련함수 호출,주기적으로 작업처리하고 싶을때
 */

// setInterval(함수,밀리초) 를 사용해 지정밀리초 간격으로 함수 실행이 가능함.
// setTimeout()은 함수 한번만 호출, setInterval()은 지정시간 간격으로 함수호출

console.log('-----------------');
console.log('실행시작 시간', new Date().toLocaleTimeString());

// setInterval(() => {console.log('setInterval 실행시간', new Date().toLocaleTimeString());
// },3000);		// 3초 간격으로 실행

const intervalId= setInterval(interTimer, 2000);
let cnt=0;

function interTimer() {
	cnt+=1;
	console.log(cnt, new Date().toLocaleTimeString());
	if(cnt === 3) {
		clearInterval(intervalId);
		console.log('시간 작업 해제');
		console.log('-------------------------');
	}
}



/**
	1-223. 비동기화 Promise 사용하기
	- new Promise(함수) 
	- Promise인스턴스.then(함수)  : 성공시 콜백함수 호출
 */
// 비동기 처리작업기능을 하는 Promise객체를 사용하면 작업이 용이해짐
// fetch()를 시작으로, 브라우저의 표준기능에도 Promise 사용이 증가함. await이나 async와 같은기능도 알아둬야함
// Promise 생성자 인수는 비동기 처리작업을 하는 함수를 지정하며 함수내부에서 비동기 처리완료 메소드인 resolve()를 호출함
// then()을 사용해서 resolve()실행후 작업을 처리함. 

//9초후 작업을 Promise 사용하는 코드
const promise= new Promise((resolve) => {
	setTimeout(() => {
		resolve(); 		// resolve 호출시 Promise처리완료
	},9000);
});

//then()으로 다음작업 처리
promise.then(() => {
	console.log('다음 작업실행');
});


/**
	1-224. Promise 성공/실패 처리하기
	- 실패 가능성이 있는 비동기 작업 처리
	- Promise인스턴스.catch(함수): 실패시 콜백함수호출
 */
// promise로 실패한 작업을 처리하고 싶을때 생성자인수에 reject를 포함하는 함수를 지정한다.
// reject는 처리의 실패를 나타내는 작업을 할당. reject가 실행되면 catch()가 호출댐

// 메소드 체인(연결)해서 코드 가볍게 하기
const flag=0;
new Promise((resolve, reject) => {	// 생성자에 reject 지정
	if(flag===true){
		resolve('safari');
	}else{
		reject('chrome');
	}
})

.then((value) => {
	console.log(value);		
})
.catch((value) => {		// 실패시 출력
	console.log(value);
});

