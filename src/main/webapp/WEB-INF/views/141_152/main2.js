

/**
	1-148. 요소 생성하기
	-document.createElement('태그명',옵션)
	-모달윈도창 생성
 */

//creatElement()를 해도 화면엔 아무변화가 없다. appendChild()를 사용헤야 DOM요소로 사용이가능
// 또한 innerHTML속성으로 html추가하거나, classList 속성으로 클래스 조작가능

/* create-modal-button 클릭시 처리 */
document.querySelector('#create-modal-button').addEventListener('click', displayModalWindow);

/* 모달윈도우 창 표시 */
function displayModalWindow(){
	//alert('d');
	const modalElement= document.createElement('div');	// 모달윈도우창 생성
	modalElement.classList.add('modal');		// 모달 클래스부여
	
	const innerElement = document.createElement('div');		// 모달윈도우 내부요소 생성
	innerElement.classList.add('inner');		// 투명 방지
	innerElement.innerHTML=`<p>메뚜기나라 </p> <div class="character"></div>`;	// 내부 내용
	
	// appendChild가 반드시 있어야 내용이 나옴
	modalElement.appendChild(innerElement);		// 모달윈도 내부요소 배치
	document.body.appendChild(modalElement);	// body에 모달윈도우 배치
	
	// 내부요소 클릭시 모달윈도 삭제처리
	innerElement.addEventListener('click', () => {
		closeModalWindow(modalElement)
	});
}

function closeModalWindow(modalElement){
	document.body.removeChild(modalElement);
}





/**
	1-149. 요소 복사하기
	- 유저의 클릭에 따라 요소 추가하고 싶을대
 */
// cloneNode()는 요소 복제함. 인수에 true를 전달하면 자식노드도 복제..
// 복제한 노드를 화면에 표시할때는 반드시 appendChild()를 사용한다.

setTimeout(() => {
	const cloneBox= document.querySelector('#cloneBox').cloneNode(true);
	document.querySelector('.container4').appendChild(cloneBox);
},3000);




/**
	1-150. 요소 교체하기
	- 부모노드.replaceChild(새노드,교체대상노드)
 */
// replaceChild()는 부모노드내 자식노드를 새로운 노드로 교체함. 두번째 인수를 첫번째인수로 변경.
// 변경된 노드는 DOM트리에서 제거되고 replaceChild()의 반환값이 됨.....

const reBtn= document.querySelector('#replaceBtn');

reBtn.addEventListener('click', () => {
	const container5= document.querySelector('.container5');	// 컨테이너
	const oldBox= document.querySelector('.old-box');		// 교체될박스
	const newBox= document.createElement('div');		// 교체후박스
	
	newBox.textContent='새로운 박스입니다..';
	newBox.classList.add('new-box','box');	// new-box, box CSS클래스추가
	
	container5.replaceChild(newBox,oldBox);
});




/**
	1-151. 노드 교체하기
	- 변경대상노드.replaceWith(새노드)
 */

// 변경대상노드를 새로운 노드로 교체함. 노드가 DOM트리에서 제거되는 점은 replaceChild()와 같다. 
// 하지만 반환값이 없음.
setTimeout(() => {
	const oldReBox = document.querySelector('.old-replace-box');	// 교체전 박스
	const newReBox= document.createElement('div');		// 교체후 박스
	
	newReBox.textContent='교체 됐어요 짜잔';
	newReBox.classList.add('new-replace-box', 'box');
	oldReBox.replaceWith(newReBox);
},3000);




/**
	1-152. 텍스트요소 다루기
	-html 텍스트 변경하고 싶을때
 */
// textContent는 요소내 택스트 가져옴
const weatherElement= document.querySelector('#weather');
setTimeout(() => {
	weatherElement.textContent='기온은 영하46도가 예상됩니다';
},3000);



/**
	1-153. 
 */