/**
 * 1-201. 영상 넣기
 */
// 스마트폰에서 영상 자동재생 설정하고 싶으면 playsinline 속성과 muted 속성사용. (html에서)


/**
	1-202. 스크립트로 영상 제어하기
	- play(), pause()
 */

const mv= document.querySelector('#musicVideo');

document.querySelector('#btnPlay').addEventListener('click', ()=>{
	mv.play();	
});
document.querySelector('#btnPause').addEventListener('click', () =>{
	mv.pause();
});



/**
	1-203. 카메라기능 사용
	- 웹카메라는 getUserMedia()사용.
 */
// video요소에 autoplay지정하지 않으면 브라우저에 따라 화면의 표시가 지연되는 경우 있음

let stream;

async function loadAndPlay() {
	const video = document.getElementById('my');	// video 창
	stream = await getDeviceStream({		// stream 준비
		video: {width: 640, height: 320}, audio:false
	}); 
	video.srcObject = stream; 		// video.srcObject에 웹카메라 스트림 지정
}

// 카메라 정지
function stop(){
	const video= document.getElementById('my');
	const tracks = stream.getTracks();
	
	tracks.forEach((track) => {
		track.stop();
	});
	video.srcObject = null;
}
function getDeviceStream(option) {
	// MediaDevices.getUserMedia() 사용자에게 미디어 입력장치 권한 요청
	if('getUserMedia' in navigator.mediaDevices) {
		return navigator.mediaDevices.getUserMedia(option);
	}else{
		return new Promise(function(resolve, reject) {
			navigator.getUserMedia(option, resolve, reject)
		});
	}
}


/**
	1-204. SVG사용하기
	- 확대와 축소시에도 화질이 유지되는 이미지 사용
	- 다양한 스마트 기기에서 반응형 그래픽사용
	- SVG란? Scalable Vector Graphics의 약자로 벡터이미지임. 
 */

// SVG는 DOM으로 조작 가능하므로, 자바스크립트와 함께사용하여 인터랙션 디자인에도 사용이 가능하다.
// 웹에서 사용하는 이미지는 래스터(Raster)와 벡터(Vector)가 있음.
// 래스터란? 점의 집합체 (jpeg,gif,png) 이다. 얘들은 사이즈 커지면 화질 저하됨
// 벡터란? 꼭짓점,색,선으로 이뤄짐 (svg) 애들은 이미지 넓이와 폭이 커져도 선명하게 표시된다.

// svg샘플파일



/**
	1-205. SVG 요소를 동적으로 추가하기
	- 자바스크립트 외부데이터를 참조해서 그래픽작업하기
	- document.createElementNS('http://www.w3.org/2000/svg',SVG요소명)
 */

// document.createElement()가 아닌 document.createElementNS()를 사용해서 SVG요소를 자바스크립트로 생성가능
// 비슷한 메서드 이름이지만, svg요소는 끝에 NS(이름공간,NameSpace)가 붙어있다.
// html과 svg는 엄밀히 이름공간이 다르므로 저 http를 지정해주지 않으면 html에서 svg액세스 불가능

const myCircle= document.createElementNS('http://www.w3.org/2000/svg', 'circle');

myCircle.setAttribute('cx', '100');
myCircle.setAttribute('cy', '100');
myCircle.setAttribute('r', '100');
myCircle.setAttribute('fill', '#FFFF8D');


const mySvg = document.querySelector('#mySvg');
mySvg.appendChild(myCircle);

setTimeout(() => {
	myCircle.setAttribute('fill-opacity', '0.5');
},1000);



/**
	1-206. SVG 요소 스타일 변경하기
 */
