/**
 * 1-071. 객체 요소값 확인하기
	- API response데이터 확인하고 싶을때
 */

// 객체 각 속성의 루프처리 방법을 확인해보자?
const userData={
	id:1, name:'뜨거워',age:26
};
// 키를 기준으로 루프
console.log(Object.keys(userData)); 
// 데이터를 기준으로 루프
console.log(Object.values(userData));
// 속성을 기준으로 루프
console.log(Object.entries(userData));


/**
	1-072. 객체요소 분할대입 (비구조화 할당) 하기
	- 객체 데이터를 정리하여 대입하고 싶을때
	- 객체의 일부데이터를 추출하여 사용하고 싶을때
 */

// 변수1,변수2와 같은이름의 키데이터 추출해서 변수에 대입
const userData1= {id:1, name:'ㄱ',age:12};
const {id,name,age}= userData1;
console.log(id);
console.log(name);
console.log(age);


const userData2 ={id1:'park', name1:'minyoung', age1:20};
const {age1,id1,addr}= userData2;
console.log(age1,addr,id1);

const userData3={id: 2, name:'두두'};
const {name: myName}= userData3;
console.log(myName); 	// 안되다가 됨;



/**
	1-073. 객체 수정 제한하기
	- 객체의 깊은 계층까지 수정을 제한하고 싶을때 (속성의 불변성 추가)
 */

// const도 속성의 추가,삭제,변경 가능함
const obj1={id:10, name:'텐텐',addr:'서울시 특별시 지리산'};
obj1.id=11;
obj1.age=150;
console.log(obj1.id);

// 속성의 추가,삭제,변경의 제한은 Object.freeze() 사용함
// 오류 검사 설정은 'use strict' 사용
// ES5에서 추가된 기능이다

'use strict';
const obj2= {id:12, name:'릴보이'};
Object.freeze(obj2);

console.log(obj2);
// freeze 되서 안먹힘
obj2.id=13;		
obj2.addr='서울';
console.log(obj2);

const obj3=[1,2,3];
Object.freeze(obj3);
//obj3.phsh(4);		// 속성 변경 못함

console.log(obj3);

// 객체 freeze 됐는지 확인 object.isFrozen()
const obj4={id:13, name:'1.3', age:14};
Object.freeze(obj4);
console.log(Object.isFrozen(obj4));	// true

// Object.freeze 말고 다른방법
const obj5={id:1, name:'대충'};
Object.seal(obj5);
console.log(Object.isFrozen(obj5));	// false로 나오긴 함
obj5.id=2;	// seal()은 변경은 가능
obj5.addr='seoul';	// 추가,삭제는 안됨
console.log(obj5);

// Object.preventExtensions() : 속성의 추가 안됨 (삭제,변경은 가능)



/**
	1-074. 데이터 타입 이해하기
	- 자바스크립트 데이터 타입 이해할때, 문자열과 숫자등 서식을 이해하고싶을때
 */

// 숫자,문자열,진리값, 객체등의 타입/ 원형데이터,참조데이터 있음

// 원시타입
// Boolean(진리값), String, Number, Undefined, Null, Symbol()

// 객체타입(복합형) : 배열, 객체등 원시타입 이외의 데이터
// Object, Array, Date



/**
	1-075. 가변성과 불가변성 이해 (Mutable/Immutable)
 */

// 원시타입이 불가변성, 객체타입은 가변성 

// 배열.. 변경이 가능하므로 가변성
const myArray=[1,2,3];
myArray[0]=100;
console.log(myArray);

let myNum=10;
myNum=20;
console.log(myNum);	// 10이 20으로 바뀌는게 아니라 20이라는 새로운 데이터를 참조하는 것이다.


/**
	1-076. 데이터 타입 확인하기
 */

// typeof를 사용한 각 타입의 확인결과
/**
	Undefined : undefined
	Null : object
	Boolean : boolean (true/false)
	String : string 
	Symbol : symbol (symbol())
	Number : number (1,30)
	Object : [1,2,3],{id:20, name:""}
	함수 : function (function(), class Myclass {})
 */

console.log(typeof true); 
console.log(typeof 10);
console.log(typeof '44');
console.log(typeof undefined);
console.log(typeof Symbol());

// object
console.log(typeof [1,2,3]);
console.log(typeof {id:10, name:'kart'});
console.log(typeof null);	

// function
console.log( typeof function() {console.log('test'); });
console.log(typeof class my{});




/**
	1-077. 객체 인스턴스 확인하기
 */
//instanceof: 데이터가 객체의 인스턴스인지 확인하는 연산자. 함수를 정의할때 특정 인스턴스만 구분하여 처리 가능

const today=new Date();
console.log(today instanceof Date);
console.log(today instanceof Array);

// Date 인스턴스가 전달되면 날짜를 출력하는 함수
function showCurrDate(argument){
	if(argument instanceof Date){
		console.log(`현재는 ${argument.toLocaleDateString()}입니다.`);
	}else{
		console.log('적절한 데이터 타입이 아닙니다.');
	}
}
const array1=[1,2,3];
showCurrDate(today);
//showCurrData(array1);


// 자신의 정의한 클래스의 인스턴스 판별에도 사용가능
class myClass1{}
class myClass2{}

const myIns1=new myClass1();
const myIns2=new myClass2();

console.log(myIns1 instanceof myClass1);
console.log(myIns2 instanceof myClass1);



/**
	1-078. 값 전달과 참조 전달 이햐하기
	- 원시타입과 객체타입의 처리를 이해하고 싶을때
 */

// 원시타입: 값에 의한 전달, 객체타입: 참조에 의한 전달

let aa=100;
let bb=aa; 	// 값에 의한 전달
aa=500;

console.log(aa,bb);

let a1= [1,2,3];
let b1= a1;
a1[0] = 100;	// 참조에 의한 전달
console.log(a1,b1);

// 전달받은 파라미터에 2를 더하는 함수
function myFunc(x){
	x=x+2;
}
// 변수 aa에 10 대입
aa=10;

// myFunc()에 aa 전달하고, 복사된 데이터 10을 함수에 전달
myFunc(aa);
console.log(aa);

// 전달받은 배열의 첫번째 요소에 20을 대입
function myFunc2(x){
	x[0]=20;
}
a1=[3,4,5,6];

//myFunc2()에 a1전달하고 배열 데이터 메모리의 위치를 함수로 전달
myFunc2(a1);
console.log(a1);



/**
	1-079. 데이터 타입 변환하기
	-숫자->문자, 문자->숫자
 */

// parseInt(문자열) : 문자->숫자
// parseFloat(문자열) : 문자-> 부동소수점 

const result = 100+Number('200');
console.log(result);

const boo = Boolean(0);	// false
console.log(boo);
const n = Number('사자'); //NaN
console.log(n);

// 데이터 타입이 자동으로 변환되는것은 암시형 변환이라고 함. (명시형 변환과 반대)
console.log(100+'200'); // 100200
console.log('200'-10);  // 190
console.log(1=='1'); 	// true (데이터와 타입을 모두 비교하는 경우는 '===' 사용하고 이떈 false나옴)

let o=10; o='ㅇㅇㅇ'; console.log(o);		// 자바스크립트는 동적타입 변환을 하므로 에러가 나지 않는다. 



/**
	1-080. 정의되지 않은 데이터 (undefined) 이해하기
 */

// 변수에 데이터 대입x, 객체 속성에 값대입x, 파라미터에 값 전달x

/**
	1-081. null 이해하기
 */


