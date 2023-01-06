/**
	1-225. Promse 병렬 처리하기
	- 비동기처리 일괄시작후 모든처리가 끝나면 다음작업 시작하고싶을때
	- Promise.all(배열) 
 */
const arrFunc= [];	// 배열 선언

for(let i=0; i<5; i++){
	const func =(resolve) => {
		console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString());
		const delayMsec= 2000 * Math.random();		// 0~2초 지연 
		
		// 지연처리
		setTimeout(()=> {
			console.log(`처리 ${i} 완료`, new Date().toLocaleTimeString());
			resolve();	// resolve() 가 있어야 처리 완료
		}, delayMsec); // delayMsec 없으면 지연처리 안됨
	};
	// 배열저장
	arrFunc.push(func);
}

console.log(arrFunc);

// 함수를 포함한 배열을 Promise 배열로 변환
const arrPromise = arrFunc.map((func) => new Promise(func));

console.log(arrPromise);

// 병렬처리실행
Promise.all(arrPromise).then(() => {
	console.log('모든 작업 완료');
});


/**
	1-226. Promise 직렬처리하기
	- 외부데이터를 가져와 후속처리작업에 사용하고싶을때
	- 처리가 끝난 데이터를 다음작업에 이어서 사용하는 방법
 */
// 직렬처리는 await과 async를 사용하는것이 더 간단하다.
Promise.resolve()
.then(() => new Promise((resolve) => {
	setTimeout(() => {
		console.log('첫번째 Promise', new Date().toLocaleTimeString());
		resolve();
		}, 2000);
	})
)
.then(()=> new Promise((resolve) => {
	setTimeout(() => {
		console.log('두번째 Promise', new Date().toLocaleTimeString());
		resolve();
	},1000);
	})
);

// await, async 사용

start(); 
async function start() {
	await new Promise((resolve) => {
		setTimeout(() => {
			console.log('세번쨰 Promise (async 사용)', new Date().toLocaleTimeString());
			resolve();
		},4000);
	});
	
	await new Promise((resolve) => {
	setTimeout(() => {
		console.log('네번째 Promise (await 사용)', new Date().toLocaleTimeString());
		resolve();
		},1000);
	});
}


/**
	1-227. Promise 동적 직렬 처리하기
	- 비동기처리를 순서대로 시작후 모든 처리 완료때까지 대기하고 싶을때
 */
// 코드를 작서하면서 promise으 실행여부를 미리 알수있으면 앞에서 기술한 방식으로 코드사용 가능..
// 하지만 동적으로 promise수가 변하는 경우에는 해당방식으로 사용불가.
// 이경우, 비동기 처리실행 함수를 배열에 보관하고, 루프문 사용해서 promise와 await로 처리를 연결함
// promise는 인스턴스화 한 순간 함수가 실행되므로 실행직전까지 인스턴스화 하지 않아야 한다.
// 루프문에서 await은 promise의 완료를 기다리므로, 배열에 보관된 비동기 처리를 순서대로 실행함

const listFunctions=[];
for(let i=0; i<5; i++){
	const listf=(resolve) => {
		setTimeout(() => {
			console.log(`함수 ${i} 완료.`,new Date().toLocaleTimeString());
			resolve(); 	// promise완료
		},5000);
	};
	// 배열에 보관
	listFunctions.push(listf);
}
	// 배열내용 출력
	console.log(listFunctions);
	
	execute();
	
	// async,await 안쓰면 한번에 모든처리완료
	 async function execute(){
		for(let i=0; i<listFunctions.length; i++){
			const listf= listFunctions[i];		
			 await new Promise(listf);	// await 안쓰면 한번에 다 출력댐
			}
	}
