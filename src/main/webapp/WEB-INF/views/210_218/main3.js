
/**
	1-217. png/jpg DataURL로 불러오기
	- toDataURL()의 인수에 변환하고 싶은 데이터형식은 image/jpeg을 지정하면 jpeg형식의 DataURL문자열 반환됨.
 */

const stage_w =300;
const stage_h =300;
const center_x = stage_w/2;	// 중심 X좌표
const center_y = stage_h/2;	// 중심 Y좌표
const max = 150; 			// 루프횟수

// 변수초기화
const saveCan= document.getElementById('saveCanvas');
const saveCon= saveCan.getContext('2d');
let n = 0;

// 애니메이션 시작
tick();

function tick(){
	saveCon.clearRect(0,0,stage_w, stage_h); 		// 이미지리셋 
	
	let oldX= center_x;
	let oldY= center_y;
	
	// 모양 그리기
	for(let i=0; i<max; i++){
		saveCon.beginPath();
		saveCon.lineWidth=1;
		saveCon.strokeStyle=`hsl(' + ((i/max) * 360 + n * 4000) + ', 100%, 50%)`
		saveCon.moveTo(oldX, oldY);
		saveCon.lineTo((oldX = center_x + i * Math.cos(i + i * n)), (oldY = center_y + i * Math.sin(i + i * n)));
		saveCon.stroke();
	}
	// 카운트
	n += 0.00025;
	
	requestAnimationFrame(tick);
}

// jpg 이미지 가져오기
const btnJpg= document.querySelector('#btnJpg');
btnJpg.addEventListener('click', () => {
	const data= saveCan.toDataURL('image/jpg');
	cloneToImage(data);
});
const btnWebp= document.querySelector('#btnWebp');
btnWebp.addEventListener('click', () => {
	const data= saveCan.toDataURL('image/webp');
	cloneToImage(data);
});
const btnPng= document.querySelector('#btnPng');
btnPng.addEventListener('click', () => {
	const data= saveCan.toDataURL('image/png');
	cloneToImage(data);
});
const btnGif= document.querySelector('#btnGif');
btnGif.addEventListener('click', () => {
	const data= saveCan.toDataURL('image/gif');
	cloneToImage(data);
});

function cloneToImage(data){
	document.querySelector('#saveImage').src= data;
}



/**
	1-218. 캔버스 그래픽 다운로드
	- 브라우저에서 생성한 도형을 다운로드
	- new Blob(배열,옵션)
 */
// a 요소를 사용해서 캔버스요소에서 작업한 그래픽 다운로드 가능. 이미지 데이터는 toDataURL()을 사ㅛㅇ해 Base64문자열로 가져옴
// 바이너리이므로 Blob객체로 변환함
const can1= document.querySelector('#originCanvas');
const con1= can1.getContext('2d');
const img1 = new Image();

img1.onload = () => {
	con1.drawImage(img1, 0, 0);
	
	const imageData = con1.getImageData(0,0,150,150);
	const data1 = imageData.data;
	
	console.log(imageData, data1);
	
	const monoImageData= new ImageData(150,150);
	
	const monoArr= monoImageData.data;
	for(let i=0; i< data1.length/4; i+= 1){
		const r = data1[i*4+0];
		const g = data1[i*4+1];
		const b = data1[i*4+2];
		const a = data1[i*4+3];
		
		const color = (r+g+b)/3;
		
		monoArr[i*4+0] = color;
		monoArr[i*4+1] = color;
		monoArr[i*4+2] = color;
		monoArr[i*4+3] = a;
		
	}
	
	// 캔버스 요소 참조 
	const can2= document.querySelector('#afterCanvas');
	const con2= can2.getContext('2d');
	con2.putImageData(monoImageData,0,0);
};
	// img로딩 시작
	img1.src='../image/la.jpg';
	
	const btnDown= document.querySelector('#btnDownload');
	btnDown.addEventListener('click', () => {
		const can2= document.querySelector('#afterCanvas');
		
		// 파일형식과 파일명 지정
		const mimeType= 'image/png';
		const fileName= 'download.png';
		
		// Base64 문자열 가져오기
		const base64 = can2.toDataURL(mimeType);
		
		// base64문자열을 Uint8Arrayㄹ 변환
		const bin= atob(base64.replace(/^.*,/,''));
		const buffer= new Uint8Array(bin.length);
		for(let i=0; i<bin.length; i++){
			buffer[i]= bin.charCodeAt(i);
		}
		
		// Blob생성
		const blob= new Blob([buffer.buffer], {type: mimeType}
		);
		
		// 이미지 다운로드
		if(window.navigator.msSaveBlob){
			window.navigator.msSaveBlob(blob, fileName);
		}else if(window.URL && window.URL.createObjectURL) {
			const a = document.createElement(blob);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}else{
			window.open(base64, '_blank');
		}
	});