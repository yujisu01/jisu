/**
 * 1-251. 정보/에러/경고 출력
	- 자바스크립트의 실행결과 확인시
	- 상태에 따라 콘솔사용 분류 할때
 */
console.log('console.log');
console.info('console.info')
console.warn('console.warn');
console.error('console.error');


/**
	1-252. 객체구조 출력하기
	- 깊은 계층의 데이터 요소 확인시
	- console.dir(객체) : 객체구조 출력
	- console.table(객체) : 객체구조
 */

//(1) dir
const myDir = {
	id: 2, name: '과자'
};
console.dir(myDir);

console.dir(document.body); 		// body요소의 구조출력

//(2) table (테이블 식으로 출력됨)
const myArray = [
	{id:100, name:'ab', age:12},
	{id:200, name:'cd', age:15},
	{id:300, name:'eg', age:55}
];

console.table(myArray);



/**
	1-253. 에러 파악하기
	- undefined같이 에러 발생시 확인
 */
const a=10;
console.log(`상수 a의 값은 ${a}입니다.`); 
// a에 값을 다시 대입하면 에러발생
//a=20;
console.warn('다음 작업을 실행합니다.');



/**
	1-254. 에러객체 생성하기
	- 에러 내용을 설정하고 싶을때
	- new Error(에러내용) : Error인스턴스 생성
 */
// Error인스턴스.message : 에러내용
// 개발자가 의도적으로 발생시킬수도 있다. 이를 에러던지기 라고 하며(Throw Error)
// 함수에 부정확한 값이 있거나, API에서 의도치않은 값 반환되는 경우에 사용함

const error= new Error('에러발생');
console.log(error.message);



/**
	1-255. 에러 발생시키기
	- API통신중 부정확한 값 발견시 에러처리 하고싶을때
	- throw Error인스턴스 : 에러던지기
 */

// 파라미터 value가 숫자타입이 아닌경우 에러 발생
function myError(value){
	if(typeof value !== 'number'){
		// 에러생성
		const error= new Error(`${value}는 숫자타입이 아닙니다.`);
		console.error(error.message);	// 에러내용 표시
		throw error;	// 에러던지기
	}
	console.log(`${value}는 숫자타입 입니다.`);
}
myError(5);
//myError('뿡순이');



/**
	1-256. 에러발생 확인하기
	- 에러종류 확인시
	- 에러 발생해도 작업을 계속 진행하고 싶을때
	- 에러발생시 특정처리를 실행하고 싶을때
	- try{}catch(error){} : 에러처리
 */
// try에러 에러 발생시 catch에서 처리
const aa=800;
try{
	aa=900;	// 에러발생
}catch(error){
	console.log(`에러가 발생했습니다: ${error.message}`);
}
console.log(`상수 a의 값은 ${aa}입니다.`);




/**
	1-257. 에러발생시 실행코드 설정
	- 에러가 발생해도 실행을 중단하고 싶지 않을때
	- 에러발생시 특정처리를 실행하고 싶을때
 */
function generateError() {
	try{
		if(Math.random() > 0.5){	// 50%확률로 에러발생, else문으로 에러없음 처리
			throw new Error();
		}else{
			console.log('-------------------');
			console.log('🔵에러없음🔵');
		}
	// catch문으로 에러발생시 처리
	}catch(error){
		console.log('-------------------');
		console.log('❗에러발생❗');		
	// 에러발생 여부 상관없이 finally문 실행
	}finally{
		console.log('에러처리가 완료되었습니다.');
	}
}
//3초마다 generateError()실행
setInterval(generateError, 3000);



/**
	1-258. 에러종류 파악하기
	- RangeError : 값이 허용범위내에 없음
	- ReferenceError : 선언되지 않은 변수호출
	- SyntaxError : 언어구문 부정확
	- TypeError : 데이터 타입 부정확
	- URIError : URI부정확
 */

// (1) Uncaught SyntaxError: Unexpected token 'null' 에러발생
try{
	//let obj  null;
}catch(error){
	console.log(error);
}

// (2) TypeError: Cannot read property 'myMethod' of null at ~
try{
	const o = {a:null};
	o.a.myMethod();
}catch(error){
	console.log(error);
}