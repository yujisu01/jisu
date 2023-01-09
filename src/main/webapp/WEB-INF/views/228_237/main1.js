/**
 * 1-228. json 알아보기
	- json은 자바스크립트뿐만 아니라 php, 자바등 에서도 사용됨.
	- 범용적인 데이터 형식. 서버와의 통신이나, 외부파일 저장등에 사용
 */
var a=
{
	"students": 40, "grade": 4, "name": "C반"
};

var b=
{
	"name":"B학교","classes": [{"students":55, "grade":3,"name":"b반"},{"students":45, "grade":2,"name":"c반"}]
}
// 자바스크립트의 객체와 배열은 요소 마지막에 (,)를 사용하지만 json은 에러남

// 되는경우
var c=
{
	"name": [1,2,3,4]
}



/**
	1-229. json 문자열 객체로 변환하기
	- json 문자열을 자바스크립트 객체에서 사용하고 싶을때
	- 네트워크에서 받은 json문자열 사용하고 싶을때
	- JSON.parse(문자열)
 */
// JSON.parse()를 사용해 json문자열을 해석하고 자바스크립트 값과 객체로 변환한다.
// JSON.parse()로 변환한 문자열은 자바스크립트 객체로 처리되므로 마침표(.)를 사용해 참조

const jsonJava = `{"dog":20, "cat":15, "name":"댕냥"}`;
const jsonJavaData= JSON.parse(jsonJava);

console.log(jsonJavaData);
console.log(jsonJavaData.dog);
console.log(jsonJavaData.cat);
console.log(jsonJavaData.name);



/**
	1-230. 객체를 json 변환하기
	- 자바스크립트 객체를 json문자열로 변환하고 싶을때
	- JSON.stringify(obj)
 */
const javaJson = {a: 1000, b:'egg'};
const javaJsonString = JSON.stringify(javaJson);
console.log('----------------------------');
console.log(javaJsonString);



/**
	1-231. json변환에 들여쓰기 적용
	- 자바스크립트 객체르 json문자열로 변환
	- 가독성을 위해 json에 들여쓰기 적용
	- JSON.stringify(obj, null, '') 
 */
const javaJsonN = {"볼거1": 'Wednesday', "볼거2":'The Glory'};
const javaJsonStr= JSON.stringify(javaJsonN, null, '');
console.log('----------------------------');
console.log(javaJsonStr);



/**
	
 */
