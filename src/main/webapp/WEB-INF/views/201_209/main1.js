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
	// 권한요청 거부
	// else 없을시, Uncaught(in Promise) DOMException:permission denied 뜸
	}else{
		return new Promise(function(resolve, reject) {
			navigator.getUserMedia(option, resolve, reject)
		});
	}
}