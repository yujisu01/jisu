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