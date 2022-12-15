/*
	1-013. 함수 파라미터 초깃값 설정
	 - 함수 파라미터를 생략가능하도록 설정하고 싶을때
 */

// @param 선언시 error발생.
// experimental support for decorators is a feature that is subject to change in a future release
// 그냥 넘어가자 

//@param price;
//@param tax;

function calcFunc(price,tax=0.08){ // 디폴트 파라미터(tax)
	const result = price+price*tax;
	return result;
}
console.log('----------------Default Parameter-----------------');
// tax 인수 생략시, 초깃값 0.08 사용
const result1= calcFunc(100);
console.log(result1);

// tax 전달값 지정시 해당값 사용함 
const result2= calcFunc(100,0.1);
console.log(result2);

/* 
	1-014. 다수의 파라미터를 가지는 함수 정의
	 - 임의의 파라미터를 가지는 함수를 정의하고 싶을때
	 - 파라미터 개수가 미정일때
*/

function cSum(...prices){
	let sum=0;
	for(const value of prices){
		sum += value;
	}
	return sum;
}
console.log('--------------다수 파라미터-------------------');

const sum1= cSum(10,70); // 2개 인수 전달, 2개 요소 가지는 배열형태
console.log(sum1);

const sum2 = cSum(5,10,15); // 3개 인수 전달, 3개 요소 가지는 배열형태
console.log(sum2);
