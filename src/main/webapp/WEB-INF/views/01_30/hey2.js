console.log('----------상수(const)-------------');

// 1-007. 상수사용
const album='noimas';
// alert(album);

// 상수는 변수와 다르게 값 변경 불가능, 다만 상수로 선언된 배열과 객체 내부의 값은 변경가능
const arr=['김','계','림'];
arr[0]='괴';
console.log(arr);

const obj={ id:'noi', name:'mas'};
obj.name='meenoie';
console.log(obj);

// 데이터타입 같으면 상수도 변수처럼 계산 가능.

// 1-008. 주석처리
/*
주석처리
 */

// 1-009. 비교연산자 (이 외에 <,>,<=,>= 도 존재)

console.log('----------비교연산자-------------');

console.log('ㅇㅇ'=='ㅇㅇ'); // 값이 같은지
console.log('ㅇㅇ'!='ㅇㅇ'); // 값이 다른지
console.log('ㅇㅇ'===00); // 데이터타입이 같은지
console.log('ㅇㅇ'!==00); // 데이터타입이 다른지

console.log('---------데이터타입 비교--------------');

console.log(10=='10'); // 데이터타입 같은 걸로 간주함
console.log(10==='10'); // 데이터타입 다른 걸로 간주함

console.log('----------배열 참조 t/f-------------');

const arr1=[1,2,3];
const arr2=[1,2,3];
console.log(arr1==arr2); // 참조하는곳이 다르므로 f

const arr3=[1,2,3];
const arr4=arr3;
console.log(arr4==arr3); // 참조하는곳이 같으므로 t

console.log('----------복합형 대입연산자------------');

// 1-010. 복합형(축약형)대입연산자
let a=10;
let b=20; 
a+=b;
console.log(a);

let c='java';
let d='script';
c+=d;
console.log(c);

let e=5;
let f=2;
e*=f;
console.log(e);

console.log('---------Function사용--------------');

// 1-011. 함수사용하기

function myFunc1(g){
	const result =g+2;
	return result;
}

function calc1(h,i,j){
	const result = h+i+j;
	return result;
}

function myFunc2(){
	console.log('눈와요');
	return 100;
}
function myFunc3(k){
	const result = k+2;
	return result;
}
function myFunc4(){
	console.log('12월15일');
}
function myFunc5(){
	return 100;
	console.log('추워요'); // 실행x
}

function myFunc6(a,b){
	if(a>=100){
		return a;
	}
	return b;
}
function calc2(price,tax){
	const result = price + price * tax;
	return result;
}
const result=myFunc2();
console.log(result);

const pr=calc2(100,0.2)
console.log(pr);


// 1-012. 화살표 함수 (Arrow Function)
// - 함수 간략히 정의할때, this를 지정하고 싶을때
console.log('-----------화살표함수------------');

function calcSum(a,b,c) {
	const result = a+b+c;
	return result;
} 

// 이거를 화살표함수 사용하면

const calcSum0  = (a,b,c) => {
	const result =a+b+c;
	return result;
};

const calc = calcSum0(3,5,11);
console.log(calc);

console.log('-----------------------');

const mf01 = (a) => {
	return a+2;
};
// 괄호 생략해도 ㄱㄴ
const mf02 = a => {
	return a+2;
};
