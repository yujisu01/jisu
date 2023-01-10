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
	1-232. json 변환 기능 커스터마이징
	- 일부데이터만 json변환 작업 하고싶을때
	- JSON.stringify(obj, replacer, space) 
 */
// JSON.stringify()의 두번째인수는 replacer 함수를 호출하며, 이함수는 JSON데이터 변환룰 설정이 가능함. 
// 예를들어, 숫자인 경우 작업을 무효화하고 문자열인 경우에만 변환작업을 실행하도록 지정 가능

const replacer = (key, value) => {
	// 숫자형식은 처리제외
	if(typeof value==='number'){
		return undefined;
	}
	return value;
};

const obj={
	pref:'seoul', orange:100, flag:true, apple:100
};
const str= JSON.stringify(obj, replacer,' ');
console.log(str);


/**
	1-233. fetch()로 텍스트데이터 읽어오기 ( (CORS Policy z zzz))
 */
// fetch()를 사용하면 외부파일 가져오기 가능. 프로그램에서는 데이터다운로드 시간예측 불가능하므로 Promise의 then()을 사용해 비동기로 처리함.
// fetch()로 데이터를 가져온뒤 then()을 호출함.. 이게 첫번째 단계. 

const fetchBtn= document.querySelector('button');

fetchBtn.addEventListener('click', () => {
	async function load(){
		const data = await fetch('../mala.txt');	//(1)
		const text = await data.text();			//(2)
		console.log(text);						//(3)
		document.querySelector('#log').innerHTML= text;
	}
	load();
});


/**
	1-235. fetch()로xml읽기 (CORS Policy z zzz)
 */
const xmlBtn= document.querySelector('#xmlBtn');
xmlBtn.addEventListener('click' , ()=> {
	async function xmlLoad(){
		const response = await fetch('new.xml');
		const xmlTxt= await response.text();
		const xml= new DOMParser().parseFromString(xmlTxt, 'application/xml');
		
		console.log(xml);
		
		document.querySelector('#xmlLog').textContent= xmlTxt;
	}
	xmlLoad();
});



/**
	1-236. fetch()로 바이너리 데이터 읽기
 */
const bBtn= document.querySelector('#bBtn');
bBtn.addEventListener('click', ()=>{
	async function bLoad(){
		const res= await fetch('../image/han.jpg');
		const blob= await res.blob();
		
		const bImg= new Image();
		bImg.src=URL.createObjectURL(blob);
		document.querySelector('#bLog').appendChild(bImg);
	}
	bLoad();
});

