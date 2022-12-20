/**
 * 1-061. 배열요소 추출하여 새 배열 만들기
	- 배열요소 전체에 대한 처리작업
	- id와 이름을 가지는 객체배열에서 id만 가지는 배열을 새로 만들고 싶을때
 */

// map()은 배열에서 요소를 추출하여 새로운 배열생성, 배열의 루프처리작업에 씀. 
// forEach()와 비슷하지만 반환값이 존재함..

const idList=[4,10,20];
const userIdList=idList.map((value => `userid_${value}`));
console.log(userIdList);

// 콜백함수는 요소 데이터 이외에도 인덱스와 기존배열을 인수로 받을수 있다
const idList2=[3,4,1];
const userIdList2=idList2.map((value,index) => `userid_${index+1}_${value}`);
console.log(userIdList2);

// id와 이름을 가지는 객체배열에서 id만 가지는 배열을 작성하는 샘플
const responseData=[
	{id:10, name:'dog'},
	{id:20, name:'cat'},
	{id:30, name:'monkey'}
]
// const idList = responseData.map(value => value.id);
const idList3 = responseData.map(value => {return value.id});
console.log(idList3);


/**
	1-062. 조건을 만족하는 배열요소 추출하여 새배열 만들기
	- 유저정보 배열에서 19세 이상인 유저 정보만 가져와서 배열생성
	- filter()
 */

const newArray1= [10,20,30,40,50].filter((value) => value>=30);
console.log(newArray1);

const newArray2=[12,3,4,5,6,7,8].filter((value) => {
	return value>=7;
});
console.log(newArray2);
const newArray3=[5,6,7,8,9,10].filter(function(value) {
	return value >= 8;
});
console.log(newArray3);

// 20세이상, 30세이상, 40세이상의 레이블을 가지는 버튼 생성해서 클릭에 따라 유저리스트를 출력하는 샘플
const userDataList=[
	{name:'김지코',age:19},
	{name:'박지코',age:29},
	{name:'이지코',age:32},
	{name:'유지코',age:41},
	{name:'신지코',age:20},
	{name:'최지코',age:35}
];

//.button 요소의 이벤트 설정
document.querySelectorAll('.button').forEach((element) => {
	element.addEventListener('click', (event) => {
		onClickButton(event);
	});
});

/* 버튼클릭시 처리 */
function onClickButton(event){
	// 클릭한 버튼의 요소
	const button = event.target;
	// 버튼요소에서 data-age 가져오기
	const targetAge= button.dataset.age;
	// targetAge 이상의 유저배열 생성
	const filterList= userDataList.filter((data) => data.age>=targetAge);
	// 배열을 출력
	updateList(filterList);
}
/* 유저배열 출력 */
function updateList(filterList){
	let listHtml ='';

	for (const data of filterList){
		listHtml += `<li>${data.name} : ${data.age}세</li>`;
	}
		document.querySelector('.user_list').innerHTML= listHtml;
	
}



/* 
	1-063. 배열요소 하나로 정리하기
	- 배열요소를 계산해서 하나의 값으로 만들때
*/

// reduce()는 배열요소를 하나의 값으로 반환하다. 배열에 3개의 값을 넣고 합계를 구하는 샘플
// 3개의 값을 가지는 배열
const priceList=[100,200,500];

// 합계를 저장하는 변수
const sum=priceList.reduce((previous, current) => {
	return previous+current;
});

// 다음과 같이 생략가능
//priceList.reduce((previous, current) => previous+current);
console.log(sum);

const priceList1=[99,100,199];

let sum1=0; // 합계 저장변수

for(const price of priceList1) {
	sum1+=price;
}
console.log(sum1);

// 2차배열을 1차배열로 만드는 플래트닝에도 사용가능
const array=[['김','이','박','최','백','계','오','성','한'],['유','윤','윙']];
const flatArray=array.reduce((preVal, curVal) => {
	return preVal.concat(curVal);
});
console.log(flatArray);

// reduce()는 요소 처리작업이 좌->우, reduceRight()는 우->좌
const array2=['오성','한음'];
const member1=array2.reduce((previous1, current1) => {
	return `${previous1}과 ${current1}`;
});
console.log(member1);

const member2=array2.reduceRight((previous1, current1) => {
	return `${previous1}과 ${current1}`;
});
console.log(member2);


/**
	1-064. 유사배열 객체를 배열로 변환하기
	- 문자열과 유사배열을 배열로 변환하고 싶을때
	- 반복가능한 객체를 배열로 변환하고 싶을때
 */

// 스프레드 연산자 사용시, 유사배열객체를 배열로 변환가능. 
// 유사배열 특징: length()로 크기 확인가능, 인덱스가 부여된 요소 가짐
// document.querySelectorAll(selector)는 인수 selector와 일치하는 요소 데이터를 모두 불러오지만
// 반환값은 NodeListOf 객체임. length와 인덱스가 부여된 요소를 가진다. 따라서 NodeListOf는 유사배열임.

const allDivElementList=document.querySelectorAll('div');
console.log(allDivElementList.length); // div 요소의 수를 출력
console.log(allDivElementList);		// NodeList[div.button-wrapper]
console.log(allDivElementList[2]);	// 인덱스가 부요된 요소
// NodeList는 유사배열임.. 배열X, 따라서 배열에서 사용가능한 filter()는 사용못함

//allDivElementList.filter((element) => element.classList.contains('on'));

// 스프레드 연산자를 사용해서 유사배열을 배열로 변환할수 있다.
const allDiv=document.querySelectorAll('div');
const elementArray=[...allDiv];
console.log(elementArray);
// 배열용 메서드인 filter() 사용해보기
const consoleElement=elementArray.filter((element) => element.classList.contains('20'));
console.log(consoleElement);

// 문자열도 length와 인덱스로 접근이 가능하기 떄문에 유사배열이다.
const myString='ㅎㅇgd';
console.log(myString.length);
console.log(myString[2]);

console.log([...myString]);

// ... 이거 말고 Array 사용도 가능
const my='문자열배열로만들어보자';
console.log(Array.from(my));
const newMy=Array.from(my, (character) => `${character}~`);
console.log(newMy);

const dog='강아지언어배우기';
const newDog=[...dog].map((character) => `${character}멍`);
console.log(newDog);


