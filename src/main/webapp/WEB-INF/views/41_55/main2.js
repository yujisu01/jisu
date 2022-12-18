/**
 * 1-045. 배열 정의하기
	- 배열 정의할때
	- 배열 데이터 값 가져올떄
 */

const arr1=[]; // 빈배열
const arr2=[0,2,8];
const arr3=['개','미'];
const arr4=[1,'곰',false];
console.log(arr4);
const arr6=[{id:1,name:'우'}, {id:2, name:'유'}];
console.log(arr6[0]);
console.log(arr2.length);

const arr7= new Array('유','유자');
console.log(arr7[1]);

const arr8= new Array(10);
arr8[0]='사';
console.log(arr8);

/**
	1-046. 배열 길이 확인하기
 */

console.log(arr4.length);

/**
	1-047. 배열 요소다루기(1)
	- 배열 요소 데이터 처리
 */
const array1= ['박노이','김노이','유노이'];
array1.forEach((value, index) => {
	// 인덱스와 값 순서대로 출력
	console.log(value, index);
});

for(value of array1){
	console.log(value);
}

// 유저데이터배열을 루프 처리하여 html에 출력하는 샘플..
const userList=[
	{id:1, name:'서울', address:'seoul'},
	{id:2, name:'고양이', address:'goyang'},
	{id:3, name:'수원', address:'suwon'}
];

// container
const container = document.querySelector('.container');

// 유저리스트 배열의 각 요소별 루프처리
userList.forEach((userData)=>{
	container.innerHTML += `
		<div class="card">
			<h2>${userData.name}</h2>
			<p>지역 : ${userData.address}</p>
		</div>
	`;
});


/**
	1-048. 배열요소 다루기(2)
	- 배열 루프처리중 요소의 인덱스가 불필요할때
 */

const array=['가','나','다','라','미','바'];
//배열각 요소별 루프처리
for(const value of array){
	console.log(value);
}

/**
	1-049. 배열 요소 다루기(3)
 */

const arrayLength=array.length;
console.log(arrayLength);

for(let i=0; i<arrayLength; i++){
	console.log(array[i]);
}

/**
	1-050. 배열 요소 추가하기
	- 요소를 배열의 처음혹은 마지막에 추가할때
	- unshift() : 배열 첫위치에 추가, push() : 배열 마지막위치에 추가
 */

// unshift()와, push()는 초기화 이후 배열에 요소 추가할때 사용. 

arr3.unshift('열심히');
console.log(arr3);

arr3.push('일을');
arr3.push('하네');
console.log(arr3);
