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
	
 */

