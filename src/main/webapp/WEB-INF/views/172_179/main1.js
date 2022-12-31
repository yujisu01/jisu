/**
 * 1-172. 드롭다운 메뉴값 읽어오기~ 1-173. 메뉴값 변경 확인하기
	-select요소.value
 */
const selectElement= document.querySelector('#mySelect');
//console.log(selectLog);

selectElement.addEventListener('click', selectHandleChange);

function selectHandleChange(event) {
	const selectValue= selectElement.value;
	const selectLog= `선택된 메뉴는 ${selectValue}입니다.`;
	document.querySelector('.selectLog').innerHTML= selectLog;
}



/**
	1-174. 슬라이더 값 읽어오기~ 1-175. 슬라이더값 변경확인
	-슬라이더 값 확인/변경시
	-input요소.value
 */
//  input요소 type속성을 range로 설정하면 슬라이더가 표시됨. min~max설정.
// 타입은 숫자가 아닌 문자열이다.

const rangeElement= document.querySelector('#myRange');

rangeElement.addEventListener('click', rangeHandleChange);

function rangeHandleChange(event){
	const rangeValue= rangeElement.value;
	document.querySelector('.rangeLog').innerHTML= `제 나이는 ${rangeValue}살 입니다.`;
	
}



/**
	1-176. 색상 선택 정보 읽어오기~ 1-177.색상선택 정보변경 확인
	- 컬러피커의 선택된색을 확인/변경
 */
const colorElement= document.querySelector('#myColor');

colorElement.addEventListener('change', (event) => {
	const colorValue= event.target.value;
	const colorLog= `${colorValue} 색깔이에요`;
	const colorLogElement= document.querySelector('.colorLog');
	colorLogElement.innerHTML= colorLog;	//html설정 text나오게
	colorLogElement.style.backgroundColor= colorValue; 	//선택한 색깔 박스 배경색으로 설정
	
});



/**
	1-178. 풀다운 메뉴 사용하기
	- 시도별 행정구역 입력폼을 만들때
 */
	const pref_list = [
		 { value: '02', name: '서울' },
		 { value: '062', name: '광주' },
		 { value: '031', name: '경기' },
	];
	
	const pulldownElement = document.querySelector('#pref');
	
	// option 요소 초기 표시작성
	let optionString = '<option value= "">선택하세요</option>';
	// 옵션 요소 배열에서 가져오기
	pref_list.forEach((item) => {
		optionString += `<option value="${item.value}">${item.name}</option>`;
	});
	// option 요소를 select요소에 추가
	pulldownElement.innerHTML= optionString;
	
	// 변경시 이벤트
	pulldownElement.addEventListener('change', (event) => {
		const pulldownValue= event.target.value;
		const selectMessage= pulldownValue === ''? `지역이 선택되지 않았습니다` : `선택된 지역은 ${pulldownValue}입니다.`;
		
		console.log(selectMessage);
		document.querySelector('.pulldownLog').innerHTML=selectMessage;
	});
	
	
	
/**
	1-179. 폼 전송하기
	- submit 
 */

const formElement= document.querySelector('form');
formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	const isYes= confirm('이 내용으로 전송하시겠습니까?');
	if(isYes === false){
		event.preventDefault();
	}
}

