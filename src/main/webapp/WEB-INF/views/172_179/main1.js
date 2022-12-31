/**
 * 1-172. 드롭다운 메뉴값 읽어오기
	-select요소.value
 */
const selectElement= document.querySelector('#mySelect');
const selectValue= selectElement.value;

const selectLog= `선택된 메뉴는 ${selectValue}입니다.`;
document.querySelector('.selectLog').innerHTML= selectLog;