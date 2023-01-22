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