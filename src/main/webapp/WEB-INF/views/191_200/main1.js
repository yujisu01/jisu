/**
 * 1-191. 스크립트로 이미지 로딩하기
 */
const img1= document.querySelector('#loadImage1');
const img2= document.querySelector('#loadImage2');
img1.src= '../image/반란루미.jpg';
img2.src='../image/반계쿵야.jpg';


/**
	1-192. 이미지 로딩후 작업
	- 이미지 로딩을 지연시키고 싶을때
	- onload : 로딩완료 시점의 처리작업 지정
 */


const img = document.querySelector('#onloadImage');
img.onload = () => {
  // 이미지 로딩 완료 후 처리 작업
  img.classList.remove('loading');
};
// img.src='../../image/양파쿵야.jpg'; 	// 로딩중 이미지 뜨는거
img.src='../image/양파쿵야.jpg';			// 바로 이미지 뜨는거
img.classList.add('loading');
