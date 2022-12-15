/*
	1-015. 조건문
	 - if문 사용
 */

console.log('---------------if/else문-----------------');

const price =20;

if(price>=50){
	alert('price는 50 이상입니다');
}else if(price >= 10){
	alert('price는 10이상 50미만');
}else{
	alert('price는 10미만');
}

console.log('--------------else if생략 가능-----------------');

if(true){
	alert('hello');
}
const randomNum= Math.random() * 10;
if(randomNum >= 5){
	alert('숫자는 5이상');
}else{
	alert('숫자는 5미만');
}
console.log(randomNum);




