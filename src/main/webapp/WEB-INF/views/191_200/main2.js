

/**
	1-193. 이미지 로딩 지연시키기
	- 이미지 로딩후 이미지데이터에 액세스
 */
// 이미지 로딩을 지연시키려면 DomContentLoaded 이벤트에서 img 요소 data-src속성의 값을
// Map에 보관한뒤 요소 속성값 비운다. 
// src가 아닌 data-src를 사용하는 이유? src속성에 공백값이 들어가면 네트워크 통신이 발생하므로..

// 버튼클릭시 이미지를 로딩하는 샘플
const srcMap= new Map();

window.addEventListener('DOMContentLoaded', () => {
	const imgs= document.querySelectorAll('img');		// 모든 img요소 참조
	imgs.forEach((img) => {
		srcMap.set(img, img.dataset.src);		// 각 img요소 data-src속성을 Map에 보관
		img.removeAttribute('src') 		// 로딩 지연시키기 위해 요소 속성 제거
	});
});

const btn =document.querySelector('.loadBtn');

btn.addEventListener('click', () => {
	const imgs =document.querySelectorAll('img');		// 모든 img요소 참조
	imgs.forEach((img) => {
		const source = srcMap.get(img);		// Map에 보관한 값을 src속성에 대입
		img.src=source;
	});
});


