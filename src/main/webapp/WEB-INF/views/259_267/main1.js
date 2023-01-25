/**
 * 1-259. 함수내부 변수와 상수 범위알기
	- 처리를 단위로 분할
	- 변수,상수의 유효범위 좁히고싶을대
 */
{
	const a=100;
	console.log(a);
	{
		console.log(a);
	}
}

{
	{
	const aA= 200;
	}
	//console.log(aA);
}

const b = 980;	 // 전역
{
	console.log(b);
}


function fu(){
	const val= 'value1';
	console.log(val);
	
	function cFu() {
		console.log(val);
	}
	cFu();
}
fu();

//스코프를 벗어나므로 에러 발생
//console.log(val);

console.log('-----------------');

if(true){
	const tVal = 'liar';
	console.log(tVal);
}




/**
	1-260. 클래스 정의하기
	- 특정기능을 클래스로 만듬
	- 자바스크립트에서객체지향 프로그래밍 구현하고 싶을때
 */
console.log('-----------------');
class myClass{
	constructor() {
		console.log('클래스 초기화');
	}
}


class my{
	constructor(value1, value2){
		console.log(`${value1}`);
		console.log(`${value2}`);
	}
}
new my('spam','cham');

class finish{
	constructor(){
		this.myfield='mooooooong';
	}
	myMethod(){
		console.log(this.myfield);
	}
}



/**
	1-261. 클래스사용하기 (인스턴스화)
	- 클래스를 인스턴스화
	- 생성한 클래스를 사용하고자 할때
	- NEW 클래스명()
 */
class me{
	constructor(){
		this.classField= 12;
	}
	classMethod(){
		console.log('261.메소드 실행');
	}
}
const myInstance = new me();
console.log(myInstance.classField);
myInstance.classMethod();



/**
	1.262- 클래스에서 변수사용하기
	- 클래스에 변수사용
	- api통신 결과 클래스를 생성
 */
class testClass {
	constructor() {
		this.testField1 = 1000;
		this.testField2 = 3500;
	}
}
const testInstance = new testClass();
console.log(testInstance.testField1);
console.log(testInstance.testField2);

class test2Class{
	constructor(snoopy1,snoopy2){
		this.snoopy1 = snoopy1;
		this.snoopy2 = snoopy2;
	}
}
const test2Instance = new test2Class('ny','ko');
console.log(test2Instance.snoopy1);
console.log(test2Instance.snoopy2);


/* API 통신결과를 보관하는 클래스 */
class ApiResultData {
	constructor(){
		this.result;
		this.errorMessage;
		this.userName;
		this.age;
	}
}
/* response 데이터 변환(ApiResultData로 변환)을 위한 함수 */
function parseData(response) {
	const apiResultData = new ApiResultData();
	
	apiResultData.result= response.result;
	apiResultData.errorMessage = response.error_message;
	apiResultData.userName = response.user_name;
	apiResultData.age = response.age;
	
	console.log(`${apiResultData.userName} / ${apiResultData.age}세`);
}

// API response데이터
const apiResponse = {
	result:true,
	user_name:'스누피',
	age: 11,
	error_message: 'error'
};

parseData(apiResponse);