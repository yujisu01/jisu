/**
 * 1-034. 지정 문자열 변환
	- 문자열을 다른 문자열로 변경
	- 문자열내 불필요한 줄바꿈 코드를 <br>로 바꾸고싶을때
	- 빈칸 제거하고 싶을때 
	- 대상문자열.replace(문자열1,문자열2) : 문자열1을 2로바꾸기
 */

const imgName='img1.png';
const img2= imgName.replace('img1.png','img2.png');
console.log(img2);

// 문자열내 줄바꿈 코드 제거
const inText='mee\nㅡ노이';
console.log(inText.replace('\n',''));

// 하이픈 제거
let phone='010-1234-0000';
console.log(phone.replace('-','')); // 0101234-0000 
console.log(phone.replace(/-/g, '')); // g옵션(문자열 전체일치검색) 지정시 01012340000 출력

// 하이픈 없애주는 작업 html 페이지랑 같이 

document.querySelector('#submitButton').addEventListener('click',
	(event) => {
		// 전화번호 가져오기
		const phoneNumber= document.querySelector('#phoneText').value;
		
		// 전화번호에 하이픈 있으면 공백으로 변환
		const trimPhone= phoneNumber.replace(/-/g,'');
		alert(`전화번호는 ${trimPhone}입니다.`);
		
		// 버튼의 기본작동 해제 
		//event.preventDefault();
	});
	
	
/*
	1-035. 문자열 나누기
	- url의 해시데이터 가져올때
	- 공백 기준으로 문자열 나눌때
*/

const myUrl='http://example.com/?id=123456&name=Lion&age=28';
console.log(myUrl.split('&')); // 'http://example.com/?id=123456', 'name=Lion', 'age=28'
console.log(myUrl.split(/&|\?/)); //'http://example.com/', 'id=123456', 'name=Lion', 'age=28'

console.log('Javascript'.split('')); // 한글자씩 
console.log('Javascript'.split()); // 전체출력 "Javascript"


/* url로 전달된 문자열에서 파라미터데이터를 불러오는 샘플 */

// 해시데이터 보관을 위한 객체
const hashes={};

// url의 파라미터를 배열로 가져오기
const params= location.search.split(/&|\?/).filter((value) => {
	return value.includes('=');
});
console.log(params);

// hashes[key]=value의 형태로 객체에 보관
params.forEach((parameter) => {
	// hoge=fuga를 ['hoge','fuga']배열로 정리
	const paramList = parameter.split('=');
	const key=paramList[0];
	// value를 디코딩
	const value=decodeURIComponent(paramList[1]);
	
	hashes[key]=value;
console.log(paramList);
});
// 파라미터 데이터처리
// hashes에 id가 포함된경우 처리작업
if (hashes['id'] != null){
	document.querySelector('.id').innerHTML=hashes['id'];
}
if (hashes['name'] != null){
	document.querySelector('.name').innerHTML=hashes['name'];
}
if(hashes['age']!=null){
	document.querySelector('.age').innerHTML=hashes['age'];
}

