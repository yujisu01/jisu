/*
	1-016. 조건문 사용 (switch)
	 - 조건을 만족하는 다수의 데이터 사용하고 싶을때
	 - switch(식): 식에 따라 처리를 분기
	 - case값: 처리내용 : 해당 조건 만족하면 처리
	 - default: 처리내용 : 만족하는 조건 하나도 없을때 default값이니까 이걸로 처리
	 - switch 는 === 비교를 한다. (스위치식은 값과, 데이터타입 비교가 모두 이뤄짐.예시에서 확인)
 */

const fruit = 'melon';

switch (fruit){
	case 'apple':
		alert('이건애플');
		break;
	case 'sponge':
		alert('이건스펀지');
		break;
	case 'melon':
		alert('이건멜론');
		break;
	default:
		alert('이건지수');
		break;
}

const myFruit = 'bts';

switch (myFruit){
	case 'bts':
	case 'peach':
		alert('방탄 복숭아');
		break;
}

console.log('-----------스위치식에서 데이터타입 비교--------------');

const val = '100';	// 문자타입

switch (val){
	case 100:
		console.log('숫자타입의 100');
		break;
	default:
		console.log('문자타입의 100');
		break;
}

