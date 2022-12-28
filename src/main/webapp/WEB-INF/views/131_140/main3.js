/**
 * 1-135. 자바스크립트 요소다루기
	- js는 웹페이지의 텍스트나 스타일 변경이 가능하다. 이와같이 html각 요소에 접근하는 방식은
		DOM인터페이스로 정의돼있음. 트리구조를 사용해서 html문서 다룸
 */
// 트리의 각구성요소는 노드라고 한다. html문서 전체요소는 document를 사용해 가져올수있으며
// 그자체가 커다란 node객체임



/**
	1-136. 셀렉터 사용하기
	- 셀렉터를 사용해 지정요소 가져오고 싶을때
	- document.querySelector(셀렉터명)
 */
const logElement= document.querySelector('#logSelector');
logElement.innerHTML='안 녕 하 세 요';



/**
	1-137. ID의 각 요소값 읽어오기
	- id데이터와 일치하는 요소 가져오기
	- document.getElementById(id명)
 */
const element= document.getElementById('foo');	// #빼고 가져오면된다.
console.log(element);


/**
	1-138. 셀렉터 조건 만족하는 요소 읽어오기
	- document.querySelectorAll(셀렉터명)
 */

// forEach 루프처리
document.querySelectorAll('.boxAll').forEach((targetBox) => {
	targetBox.addEventListener('click', () =>{	// 클릭시 처리작업
		alert(`${targetBox.textContent} 존맛탱`)	// 클릭한 요소 표시
	});
});




/**
	1-139. 클래스명으로 요소 읽어오기
	- document.getElementByClassName(클래스명)
	- getElementById처럼 .나 # 안넣어도됨
 */
const boxList=document.getElementsByClassName('boxClass');
const boxLength=boxList.length;

for(let i=0; i<boxLength; i++){
	console.log(boxList[i]);		// 각 box 요소 출력..
}




