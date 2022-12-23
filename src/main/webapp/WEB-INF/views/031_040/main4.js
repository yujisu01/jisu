/**
 * 1-40. 정규표현식으로 특정문자 검색하기
	- 조건과 일치하는 문자열 검색
 */

console.log(/J/.test('JavaScript')); // J가 포함되있는지 -> t
console.log(/^iP/.test('iPhone')); 	// iPone의 시작 문자가 iP 인지 -> t
console.log(/\d/.test('레시피')); 	// 레시피 문자열내에 숫자 포함 여부 -> f
console.log(/Java.*/.test('JavaScript')); 	// Jav 다음의 문자 a가 0회이상 존재하는지???
console.log(/코.*피/.test('코드 레시피')); 		// 코 와 피 사이 문자가 존재하는지
console.log(/\d+\d+-\d+-/.test('010-1234-0000')); // 숫자-숫자-숫자ㅡ이 형식여부

// 정규표현으로 전화번호 형식을 체크하는 샘플.. 입력문자가 0으로 시작해서 10자리혹은 11자리가 아니면 알림 표시

/* 전화번호 입력 */
const phone = document.querySelector('#phoneNumberText');
/* 경고 */
const warning = document.querySelector('#warning');

// 문자 입력될때마다 내용체크
phone.addEventListener('keyup', () => {
	// 입력된 번호
	const phoneNumber= phone.value;
	// 전화번호에 하이픈은 공백으로
	const trimPhone = phoneNumber.replace(/-/g, '');
	
	// 0으로 시작하는 번호 형식 체크
	if (/^[0][0-9]{9,10}$/.test(trimPhone)===false){
		warning.innerText='전화번호 형식에 맞춰 입력해주세요';
	}else{
		warning.innerText='';
	}
});