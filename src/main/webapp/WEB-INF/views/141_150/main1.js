/**
 * 1-141. 부모/자식/전/후 요소 읽어오기
	- 특정요소와 관련된 요소를 가져오고 싶을때
 */
const parentElement=document.querySelector('#parent');
console.log(parentElement.children);
//#자식요소1, #자식요소2, #자식요소3 (HTMLCollection)

const firstElementChild= parentElement.firstElementChild;
const lastElementChild=parentElement.lastElementChild;
console.log(firstElementChild);	// #자식요소1
console.log(lastElementChild);
console.log(firstElementChild.nextElementSibling);	// #자식요소2
console.log(firstElementChild.parentNode);		// #부모요소



/**
	1-142. 부모요소에 자식요소 추가하기
	- 동적표시 요소를 추가하고싶을때
	- 모달 윈도우 창을 화면에 추가하고 싶을대
	- 부모노드.appendChild(자식노드) : 부모노드에 자식노드 추가
 */

// 3초후 container에 myBox요소를 추가하는샘플
const container=document.querySelector('.container');
const myBox= document.querySelector('#myBox');

setTimeout(() => {
	container.appendChild(myBox);
},2000);





/**
	1-143. 지정위체에 요소 추가하기
	- 동적표시 요소 추가
	- 모달 윈도창 화면에추가
 */
// insertBefore()는 부모요소내 지정요소 앞에 노드삽입.

const container1=document.querySelector('.container1');
const topBox1=document.querySelector('#topBox1');
const topBox2= document.querySelector('#topBox2')
const box2 = document.querySelector('#box2');

//3초후 .container제일앞에 #myBox1요소 추가
setTimeout(() => {
	container1.insertBefore(topBox1, container1.firstElementChild);
},3000);

setTimeout(() => {
	container1.insertBefore(topBox2,box2);
},4000);



/**
	1-144. 요소 앞/뒤에 다른 요소 추가하기
	- html요소삽입 위치를 상세히 지정
 */

//before()와 after()는 지정한 요소의 앞뒤로 노드를 추가함. #targetBox 요소의 앞뒤로 추가해보기

const insertBox1= document.querySelector('#insertBox1');
const insertBox2= document.querySelector('#insertBox2');
const targetBox= document.querySelector('#targetBox');

// 4초후 기준이 되는 타겟박스 요소 앞에 insertBox1추가
setTimeout(() => {
	targetBox.before(insertBox1);
},2000);

// 3초후 타겟박스 요소 뒤에 insertBox2추가
setTimeout(() => {
	targetBox.after(insertBox2);
},3000);




/**
	1-145. html코드 요소 추가하기
 */
// 부모요소.insertAdjacentHTML(삽입위치,문자열) : adjacent(가까운,근접한)
// 첫번째 인수값 위치에 두번쨰인수의 문자열을 html로 삽입하며, 삽입위치 기존요소는 삭제x,
// 3초후 new_box요소 추가하는 샘플
const container3= document.querySelector('.container3');
const newBox=`<div class="new-box box">.new-box요소</div>`;

const boxBtn=document.querySelector('#boxBtn');
boxBtn.addEventListener('click', (event) => {
	container3.insertAdjacentHTML('afterbegin', newBox);
});
setTimeout(() => {
	// new박스를 컨테이너 젤앞에추가
	//container3.insertAdjacentHTML('afterbegin', newBox);
	// new박스를 컨테이너 맨뒤에 추가
	container3.insertAdjacentHTML('afterend', newBox);
},3000);





/**
	1-146. 요소를 동적으로 삭제하기
	- 부모노드.removeChild(자식노드)
 */
const removeBtn = document.querySelector('#removeBtn');
removeBtn.addEventListener('click', (event) => {
	const removeParentElement= document.querySelector('#removeParent');
	const removeChildElement= document.querySelector('#removeChild');
	
	removeParentElement.removeChild(removeChildElement);
	alert('제거 완료');
});




/**
	1-147. 요소 자신 삭제하기
 */
setTimeout(() => {
const selfRmChild= document.querySelector('#selfRmChild');
selfRmChild.remove();
	
},3000);



