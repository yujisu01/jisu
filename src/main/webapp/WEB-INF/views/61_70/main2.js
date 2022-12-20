/**
	1-065. 요소의 개별변수에 분할대입하기
	- 배열의 요소를 변경하고 싶을때
 */
let a, b, c;
[a,b,c,d]=[1,2,3];

console.log(a,b,c,d);

// 분할대입은 값 변경이나 요소 위치 변경 가능
const array=['최엘비','오르내림','기리보이','안병웅','릴보이'];
[array[0], array[1]] = [array[1], array[0]];
console.log(array);

/**
	1-066. 배열 섞기(셔플)
	- 게임에서 요소의 값을 섞을때
	- Fisher Yates 알고리즘 사용. 
 */

const arrayLength=array.length;
// 피셔예이츠 알고리즘
for(let i=arrayLength-1; i>=0; i--){
	const randomIndex=Math.floor(Math.random() * (i+1));
	[array[i], array[randomIndex]]= [array[randomIndex], array[i]];
}
console.log(array);

// 재사용할수 있도록 처리작업을 함수로 만들기. 
// 배열 섞는 셔플작업이 shuffleArray() 함수에서 구현됨..

const arrayNum=[1,2,3,4,5,6,7,8,9,10];
const shuffle1=shuffleArray(arrayNum);
console.log(shuffle1);

const shuffle2=shuffleArray(array);
console.log(shuffle2);

function shuffleArray(sourceArr){
	//기존 배열 복제생성
	const arr= sourceArr.concat();
	//피셔예이츠 알고리즘
	const arrayLeng=arr.length;
	for(let i=arrayLeng-1; i>=0; i--){
		const random1 = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[random1]] = [arr[random1], arr[i]];
	}
	return arr;
}



/**
	1-067. 다양한 데이터타입을 가진 객체사용하기
	- 다양한 데이터를 하나의 객체로 만들고 싶을때
	- 연관배열(Associative Array)을 사용하고 싶을때
 */

// 연관배열이란..자료 구조의 하나인데 키를 통해 연관되는 값을 얻는것. Map, Dictionary로 부르기도 함..

//객체는 여러가지 속성을 가질수 있는데, 속성은 키와 값의 조합임. 3개의 속성을 가지는 객체 샘플
const person={
	id:1,
	name:'자라',
	age:250
};

// 속성 데이터타입은 제한 없음(숫자,문자열,배열,객체,함수를 모두 속성으로 사용가능)
console.log(person);

/**
	1-068. 객체 선언, 수정, 확인하기
	- 객체의 속성을 변경하고 싶을때
 */

console.log(person.id);
console.log(person['age']);
person['name']= '거북';
console.log(person.name);

// 다차원으로 저장
const response={
	result:true,
	list: [{id:1, name:'장튤뇽', age:21},
			{id:2, name:'김툴뇽', age:17}]
};
// 데이터확인
console.log(response.list[0].name);

// 값의변경
response.list[1].age=51;
console.log(response.list[1].age);

// 클래스데이터객체
const myClass={
	method1: function(){
		console.log('메소드1');
	},
	method2: () => {
		console.log('메소드2');
	}
	
};
myClass.method2();



/**
	1-069. 객체복사하기
	- object.assign({},복사대상객체)
 */

const obj1 = {
	result:true,
	member: [
		{id:1, name:'일1'},
		{id:2, name:'이이'},
		{id:3, name:'삼이'}
	]
};
// 객체복사
const copyObj1 = Object.assign({},obj1);
console.log(copyObj1);


// 오호,,object.assign() 복사는 같은곳을 참조하게 되는거므로, 복사 전 데이터를 수정하면
// 복사후 데이터에도 영향을 미친다.

// 스프레드 연산자를 사용해서 객체 복사함.
// 복사대상인 member배열의 첫번째요소 변경시 복사된데이터 역시 변경됨

const obj3= {
	id:1, 
	member: ['호랑','사자','돼지']
};
//const copy3 = {...obj3}; // 얕은복사(같은곳 참조복사)
obj3.member[0] = '문어';
//console.log(copy3.member[0]);



/**
	객체속성 (property) 확인하기
	- API response 특정데이터 확인하고 싶을때
	- 지정한 데이터가 객체에 존재하지 않아서 처리작업 취소하고 싶을때 
	- 객체.hasOwnProperty(키) :데이터유무 확인
	- 키 in 객체: 데이터 유무 여부 반환
 */

const userData={
	id:1, name: '아이유', age:29
};
console.log(userData.hasOwnProperty('addr'));
console.log('id' in userData);

console.log(obj1.id != null);