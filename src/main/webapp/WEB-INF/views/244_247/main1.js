/**
 * 1-244. localStorage 사용하기
	- 데이터를 브라우저에 영구보존하고 싶을때
	- localStorage.setItem('myParam', data): 로컬스토리지에 저장
	- localStorage.getItem('myParam') : 로컬스토리지에서 불러오기
 */

// localStorage는 브라우저에 데이터를 간단하게 저장함. window객체에 localStorage객체가 있으므로
// 위치에 상관없이 사용가능. localStorage 저장된 데이터는 기간제한 없음
// setItem을 사용해 데이터 저장하고, 첫번째인수는 키,두번쨰인수는 데이터를 전달함.
const section = document.querySelector('.localStorage');	// 부모요소 가져오기
const btnRead = section.querySelector('.btnRead');		// 불러오기버튼
const btnSave = section.querySelector('.btnSave');		// 저장하기버튼
const input = section.querySelector('#localInput'); 	// input박스 가져오기 

//저장하기 버튼 클릭시 이벤트
btnSave.addEventListener('click', () => {
	console.log('setItem저장');
	const saveData = input.value;	// 텍스트박스의 문자열 가져오기
	localStorage.setItem('myKey', saveData); 	// 로컬스토리지에 저장하기
});

btnRead.addEventListener('click', () => {
	console.log('getItem불러오기')
	// btnSave로 넣은 데이터 로컬스토리지에서 가져오기
	const readData = localStorage.getItem('myKey');	
	// 텍스트입력박스에 문자열 대입
	input.value= readData; 		
});


// localStorage 와 비슷하게 sessionStorage가 있다.
//  로컬스토리지는 저장기한 제한없지만 session스토리지는 세션이 종료되면(브라우저닫기)데이터도 함꼐 삭제됨

// 크롬 개발자모드에서 application-storage-Local Storage 에서 확인가능


/**
	1-245. Storage API 데이터 삭제하기
	- 스토리지 데이터 삭제하고 싶을때
	- localStorage.removeItem(키) : 로컬스토리지 해당키삭제
	- localStorage.clear() : 로컬스토리지 데이터삭제
 */
const cSec = document.querySelector('.clearLocalStorage');
const cBtnSave= cSec.querySelector('.clearBtnSave');
const cBtnClear = cSec.querySelector('.clearBtnRemove');
const cBtnAllClear= cSec.querySelector('.clearBtnAllClear');
const cInput = cSec.querySelector('#clearInput');

// 저장하기 클릭시
cBtnSave.addEventListener('click', () => {
	const cData = cInput.value;
	// 로컬스토리지에 텍스트박스 입력한내용 저장
	localStorage.setItem('myKey1', cData);	
	localStorage.setItem('myKey2', cData);
});

// 삭제하기 클릭시
cBtnClear.addEventListener('click', () => {
	localStorage.removeItem('myKey');		// removeItem() 메서드 사용해서 삭제
});

// 전체삭제 클릭시
cBtnAllClear.addEventListener('click', () => {
	localStorage.clear(); 				// clae() 사용해서 전체삭제
});



/**
	1-246. 쿠키로 로컬데이터 사용하기
	- 쿠키에 데이터를 저자하고 싶을때
	- document.cookie : 쿠키참조
 */
/**
	쿠키는 웹데이터 저장이나 세션관리에 사용. localStorage는 다양한 데이터 저장하지만
	쿠키는 1차원의 문자열만 저장가능. 쿠키값은 클라이언트 쪽에서도 사용하지만 서버도 불러오기와 값변경등
	데이터를 공유할수 있다. 속성은 1차원데이터만 저장가능하므로 복잡한 데이터 저장은 주의해야댐
	쿠키값을 불러오려면 디코딩이 필요함 (한글은 '%81%A0'이렇게 인코딩)
 */
const cooBtnRead = document.querySelector('.cooBtnRead');
const cooBtnSave = document.querySelector('.cooBtnSave');

// 저장하기 클릭시
cooBtnSave.addEventListener('click', () => {
//	alert('?');
	 document.cookie = 'id=1';
  document.cookie = 'age=30';
  document.cookie = `name=${encodeURIComponent('山田')}`;
//	document.cookie = 'name=마계왕';
});

// 불러오기
cooBtnRead.addEventListener('click', () => {
	alert(document.cookie);
});