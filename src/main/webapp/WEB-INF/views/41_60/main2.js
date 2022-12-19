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



/**
	1-051. 배열 요소 삭제하기
 */

// shift: 배열 첫위치 요소삭제
const shiftValue= arr3.shift();
console.log(shiftValue);
console.log(arr3);

// pop(): 배열 마지막 요소삭제
const popValue=arr3.pop();
console.log(popValue);
console.log(arr3);


/**
	1-052. 배열 요소 부분 변환하기
	- 배열내 요소를 다른요소로 변환하고 싶을때
	- splice(): 지정한 위치 요소를 추출하고, 새로운 요소 추가함. 
 */

arr3.unshift('뚠뚠');
arr3.push('똥똥');
console.log(arr3);

arr3.splice(1,0,'열심히');
console.log(arr3);
arr3.splice(6,1,'노동요');
console.log(arr3);

/**
	1-053. 배열 결합
	- concat()
 */

const newArray1= arr3.concat(arr4);
console.log(newArray1);

console.log([...arr3]);
console.log([...arr3, ...arr4]);

/**
	1-054. 배열요소 결합하여 문자열만들기
 */

console.log(arr3.join('_'));
console.log(arr3.join(''));

/**
	1-055. 배열 요소검색
	- 배열데이터의 특정요소를 확인
	- .indexOf(): 요소의인덱스 위치 확인
	- .lastIndexOf() : 끝에서부터 요소위치 검색
	- .includes() : 요소의 포함여부 확인
 */

console.log(['와','우','껌'].indexOf('우'));
console.log([1,2,3,4,5,6,3,5,34,15].indexOf(4));
console.log([0,1,2,3,4,5,33].lastIndexOf(33));

console.log(['마','바','사'].includes('마'));


/**
	1-056. 조건을 만족하는 배열요소 가져오기
	- .find() : 콜백함수 조건에 맞는 첫요소
	- .findIndex() : 콜백함수 조건에 맞는 첫요소의 인덱스
 */

// find()는 배열에서 조건을 만족하는 첫요소
//const targetUser= arr3.find((element) => element === '개');
const targetUser = arr3.find(element => {return element ==='개'});
console.log(targetUser);

// 유저정보 배열에서 가져온 데이터를 표시하는 검색시스템
// id키와 name키를 가지는 유저데이터 배열
const userDataList = [
	{id: 04, name:'april'},
	{id: 05, name:'march'},
	{id: 06, name:'june'},
	{id: 07, name: 'july'}
];

/* 검색 id 입력창 */
const searchIdInput=document.querySelector('#search-id-input');
/* 검색결과 표시창 */
const searchResult = document.querySelector('#search-result');

/*유저검색*/
function findUser(searchId){
	//해당데이터 가져오기
	const targetData=userDataList.find((data) => data.id ===searchId);
	//해당데이터 없으면 '유저검색 결과없음'으로 표시
	if(targetData==null){
		searchResult.textContent='유저검색 결과 없음';
		return;
	}
	// 검색결과의 이름을 표시
	searchResult.textContent=targetData.name;
}

// 문자가 입력될때마다 내용체크
searchIdInput.addEventListener('keyup', () => {
	// 검색 id 가져오기
	const searchId= Number(event.target.value);
	findUser(searchId);
});


// findIndex(): 배열에서 조건만족하는 첫번쨰요소의 인덱스반환
const target= arr3.findIndex((element) => element ==='일을');
console.log(target);



/**
	1-057. 배열요소 역순 정렬하기
	- 배열.reverse(); 
 */

const reverseArray=[1,2,3,4,5];
reverseArray.reverse();
console.log(reverseArray);


/**
	1-058. 배열요소 정렬방법 지정하기
	- 배열요소 오름차순/내림차순 정렬
	- 배열.sort
 */

const sortArr1=[0,5,8,3,1];
sortArr1.sort((a,b)=> {
	// a가 b보다 작으면 a,b의 순서로 정렬
	if(a<b){
		return 1;
		
	}
	// a와 b가 같으면 정렬순서 변화없음
	if(a===b){
		return 0;
	}
	if(a>b){
		return -1;
	}
});
console.log(sortArr1);

/**
	1-059. 객체를 포함하는 배열 정렬하기
 */

/* html에서 오름차순/내림차순 버튼 생성해서 클릭시 정렬순서 변경되는 샘플 */
const UDL=[
	{id: 08, name:'August'},
	{id: 09, name:'September'},
	{id: 10, name:'October'},
	{id: 11, name:'November'},
	{id: 12, name:'December'},
	{id: 25, name:'Christmas'}
];

// 오름차순으로 초기정렬
sortByAscending();


// 데이터 표시 업데이트
function updateList(){
	let listHtml='';
	
	for(const data of UDL){
		listHtml += `<li>${data.id} : ${data.name}</li>`;
	}
	document.querySelector('.user_list').innerHTML=listHtml;
	
}
// 오름차순 정렬
function sortByAscending(){
	UDL.sort((a,b) => {
		return a.id - b.id;
	});
	updateList();
}
// 내림차순 정렬
function sortByDescending(){
	UDL.sort((a,b) => {
		return b.id-a.id;
	});
	
	updateList();
	}
// 오름차순 버튼클릭시 처리작업
document.querySelector('.ascending').addEventListener('click',() => {
	sortByAscending();
});
// 내림차순 버튼클릭시 처리작업
document.querySelector('.descending').addEventListener('click',() => {
	sortByDescending();
});



/**
	1-060. 배열요소 알파벳순 정렬
 */

console.log(arr3.sort());
const comArr=['Dd','Bb','Cc','Aa','Ee','Ff'];
comArr.sort(
	(a,b) => b.localeCompare(a)
	);
console.log(comArr);