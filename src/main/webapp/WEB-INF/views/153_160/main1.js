/**
 * 1-153. 요소 속성 다루기 
	- 요소.setAttribute(속성,값) : 요소 속성 설정
	- 요소.getAttribute(속성) : 요소속성 가져오기
	- 요소.hasAttribute(속성): 요소속성 존재여부 확인 (진릿값)
 */
const weatherElement= document.querySelector('#weather');
// 3초후 #weather내용 변경
setTimeout(() => {
	weatherElement.innerHTML=`기온은 <strong> -3도 </strong> 가 예상됩니다.`;
},3000); 



/**
	1-154. 자신을 포함한 html요소 다루기
	- 요소.outerHTML : innerHTML과 달리 자신도 대상이 될수있으며 자신 html가져올수 잇음
 */
const weatherInformation= document.querySelector('#weather-information');
console.log(weatherInformation.outerHTML);

weatherInformation.outerHTML= '<img src="../image/rain.gif">';




/**
	1-155. 요소 속성 다루기
 */
const anchorElement= document.querySelector('#anchor');
console.log(anchorElement.getAttribute('href'));

const imageElement= document.querySelector('#image');
imageElement.setAttribute('src', '../image/가시.jpg');	// 사진 두산이.jpg에서 가시.jpg로 변경




/**
	1-156. <a>태그_blank의 부모창 조작 제한하기
	-안전하게 _blank속성을 사용
 */

/* target="_blank" 속성을 가진 a태그로 윈도창 열었을때, 해당창에서 window.opender를 사용해서
 	부모창 제어가 가능하다. 하지만 어느정도 위험성이 있으므로 rel="noopener"를 사용해
	부모창 제어를 제한할수 있다
	
	noopener 속성? 요즘은 보안상취약점 때문에 필수적으로 사용함. 
*/

const aElementList= document.querySelectorAll('a'); 	// a 요소 모두 가져오기

aElementList.forEach((element) => {
	// a태그에 target속성이 없음 return
	if(element.hasAttribute('target') === false){
		return;
	}
	// target이 _blank 속성이 아니면 return
	if(element.getAttribute('target') !== '_blank'){
		return;
	}
	// rel속성에 noopener 설정
	element.setAttribute('rel', 'noopener');
});




/**
	1-157. 요소 클래스 속성 다루기
	- 클래스 추가/제거/존재여부 확인시
 */

// 이 메소드를 사용해 요소의 클래스 조작 가능. 
// classList.add / classList.remove / classList.contains 

const box = document.querySelector('#classBox');

//box.classList.add('blue');
box.classList.add('red');
box.classList.add('blue', 'yellow', 'pink');

box.classList.remove('blue','pink');

const box1= document.querySelector('#box1');
const box2= document.querySelector('#box2');

console.log(box1.classList.contains('red'));
console.log(box2.classList.contains('red'));