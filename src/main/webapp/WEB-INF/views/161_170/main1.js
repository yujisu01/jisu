/**
 * 1-161. 텍스트박스값 읽어오기
	- html폼의 데이터 값 가져오고싶을때
	- 텍스트입력폼의 데이터를 변경하고 싶을때
	- input요소.value
 */

const element= document.querySelector('#myText');
const value= element.value;
console.log(value);


/**
	1-162. 텍스트 박스값 변경 확인하기
	- 텍스트입력폼의 변경감시
	- change: input요소 변경시 이벤트
	- input : input요소 키입력시 이벤트
 */
// 텍스트입력폼 데이터 변경여부는 change,input으로 감시가 가능
// 이때 addEventListener()를 사용해 이벤트 핸들러 설정. 
// input은 키입력과 발생, change는 엔터키나 포커스 벗어났을때 이벤트

const textElement= document.querySelector('#idText');
textElement.addEventListener('input', handleChange);

function handleChange(event) {
	const textValue= event.target.value;
	document.querySelector('.idLog').innerHTML= textValue;
}


/**
	1-163. 텍스트 영역값 읽어오기
	- 텍스트 영역 문자열을 확인/반환 하고 싶을대
 */
const textareaElement= document.querySelector('#myTextArea');
const areaValue= textareaElement.value;
console.log(areaValue);



/**
	1-164. 텍스트영역 값 변경 확인하기
 */
const textareaElement2= document.querySelector('#myTextArea2');
textareaElement2.addEventListener('input', inputChange);

function inputChange(event) {
	const areaVal = event.target.value;
	const htmlStr= areaVal.split('\n').join('<br />');	// 줄바꿈코드
	document.querySelector('.areaLog').innerHTML= htmlStr;
}


/**
	1-165. 체크박스 상태 읽어오기
	- 체크박스 상태 확인/변경 
	- input요소.checked
 */
// checked 속성타입은 boolean타입. checked속성을 줘서 true확인

const cbA = document.querySelector('#cbA');
const checkedA= cbA.checked; 		// 선택상태확인

const cbB = document.querySelector('#cbB');
const checkedB= cbB.checked;

const cbC= document.querySelector('#cbC');
const checkedC= cbC.checked;

console.log('checkedA값:', checkedA, ' checkedB값:', checkedB, ' checkedC값:', checkedC);


/**
	1-166. 체크박스 상태변경 확인하기
	- 체크박스 변경시 작업처리
 */

const check= document.querySelector('#checkA');
check.addEventListener('change', (event) => {
	const cbValue= event.target.checked;	// 체크박스상태 확인
	const checkLog= `오늘저녁은 대패삼겹살입니다.. ${cbValue}`;		// 화면에 표시
	document.querySelector('.checkLog').innerHTML= checkLog;
});



/**
	1-167. 파일정보 읽어오기
	- 파일선택 기능 표시
	- input요소.files
 */
// input요소의 type속성은 file로 설정하면 파일선택폼이표시됨., 
// multiple속성 지정시 여러파일 작업 가능.. 그리고 files 속성의 배열도 여러개 요소가짐

const fEle= document.querySelector('#myFile');
fEle.addEventListener('change', (event) => {
	const fileTarget= event.target;
	const files = fileTarget.files;		// 선택된 파일참조
	const file = files[0];	// 배열타입이므로 0번쨰 파일참조
	
	alert(`${file.name} 파일이 선택되었습니다.`);
});



/**
	1-168. 텍스트 형식으로 파일 읽어오기
	- readAsText(파일)
 */
// FileReader 객체를 사용해 input요소로 선택한 파일데이터에 접근가능하다.
// FileReader 객체의 readAsText()를 사용해 텍스트형식으로 읽기 가능.
// 비동기므로 addEventListener()를 사용해 읽기작업완료 이벤트인 load를 감시함. 

