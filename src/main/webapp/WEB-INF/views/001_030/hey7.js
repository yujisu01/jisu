
/*
	1-020. 진위 여부 판별하기
	 - 브라우저 버전에 따라 알림창 띄우고 싶을때
	 - 입력항목에 따라 확인버튼을 무효화하고 싶을때
	 - boolean으로 판별, 주로 if문과 함께 조건에 따라 작업처리 구분할때 사용 
*/

const isIOS = navigator.userAgent.includes('iPhone');
if(isIOS){
	// iOS용 처리작업
}

console.log('-------------${}------------------');

const name='아이유';

if (name){
	alert( name );	// ${name} 해도 안나와서 그냥 name 변수 자체로 넣어줬떠니 나옴
}
// addr이 null이므로 표시x
const addr = '';
if(addr){
	alert('얘야 ${addr}에 살고있군아');
}

console.log('-------------문자열의 문자포함 여부----------------');

const fig='java script'.includes('a');
console.log(fig); // !fig 면 false

console.log('-------------진릿값에 느낌표 붙이기----------------');

console.log(!'제이팍'); // 결과는 모두 false
console.log(!24);
console.log(![1,2,3]);

console.log('----------느낌표 두번쓰면 boolean형으로 변환------------');

console.log(!!'제이팍');
console.log(!!24);
console.log(!![1,2,3]);


/*
	1-021. 숫자 다루기
	- 수 계산할때 
	- 자바스크립트에서는 수의 표현이 제한됨
	- 먼 삼각함수로 애니메이션 궤적 구하기도 가능하대;
	- Nan : 숫자가 아닌값 혹은 부정확한 값
 */

console.log('----------수를 구하는 함수------------');

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); // 다룰수 있는 최대 정수값
console.log(Number.MIN_SAFE_INTEGER); // 다룰수 있는 최소 정수값
console.log(Number.POSITIVE_INFINITY); // 양의 무한값 (infinity)
console.log(Number.NEGATIVE_INFINITY); // 음의 무한값 (-infinity)

// 이제 이 수를 벗어나는 값은 계산결과에 오차 생김 


/*
	1-022. 어림 계산 (반올림, 올림, 버림)
	 - 소수점 버릴때
	 - 화면 크기를 정수로 조절할때
 */

console.log('----------어림(6.24)------------');

console.log('round',Math.round(6.24)); // 반올림
console.log('floor',Math.floor(6.24)); // 버림
console.log('ceil',Math.ceil(6.24));  // 올림
console.log('trunc',Math.trunc(6.24)); // 값의 정수부분만

console.log('----------어림(7.8)------------');

console.log('round',Math.round(7.8));
console.log('floor',Math.floor(7.8));
console.log('ceil',Math.ceil(7.8));
console.log('trunc',Math.trunc(7.8));

console.log(Math.trunc(-8.6));

console.log('----------6.24와 -7.49 처리결과------------');

//let roundItem = document.querySelector("#round");
//let round = Math.round(6.24);
//roundItem.innerHTML = html;
//alert(html);

// error. 
// Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')



const result1= document.querySelector(".result1");
result1.nodeValue=Math.round(6.24);
//document.querySelector('#result1').value=Math.round(6.24);
console.log(result1.nodeValue);

//document.querySelector('.result2').innerHTML=Math.ceil(6.24);
//document.querySelector('.result3').innerHTML=Math.floor(6.24);
//document.querySelector('.result4').innerHTML=Math.trunc(6.24);
//document.querySelector('.result5').innerHTML=Math.round(-7.49);
//document.querySelector('.result6').innerHTML=Math.ceil(-7.49);
//document.querySelector('.result7').innerHTML=Math.floor(-7.49);
//document.querySelector('.result8').innerHTML=Math.trunc(-7.49);


