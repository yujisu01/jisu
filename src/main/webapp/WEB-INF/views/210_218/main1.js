/**
	1-210. 캔버스 사용하기 ~ 1-211. 캔버스 요소 색칠하기/선 그리기
	- 비트맵기반 도형을 스크립트에서 사용
	- canvas.getContext('2d') : 캔버스에서 명령가져오기
	- context.fillRect(x,y,폭,높이) : 직사각형 영역 칠하기 
 */

// svg는 일러스트등에 적합하고, 캔버슨느 이미지 가공에 적합. 
// 캔버스 요소 사용을 위해선 html에 캔버스 요소를 배치한뒤 자바스크립트로 요소 id값 참조하고 콘텍스트를 가져옴.
// 텍스트의 fillRect()를 사용해서 직사각형 생성

const canvas= document.querySelector('#myCanvas');	// 캔버스 요소참조
const canContext= canvas.getContext('2d');		// 컨텍스트 가져오기
//canContext.fillStyle='red';
canContext.lineWidth=3;
canContext.strokeStyle='blue';
canContext.strokeRect(0,0,100,100);		// 도형생성




/**
	1-212. 캔버스에 이미지 붙여넣기
	- context.drawImage(image, x, y) : 캔버스요소에 이미지 그리기
 */
const imgCan = document.querySelector('#imageCanvas');
const imgCon= canvas.getContext('2d');

// 이미지인스턴스 생성
const img = new Image();
img.onload = () => {
	imgCon.drawImage(img, 0, 0);
};
// 이미지 로딩시작
img.src='../image/best.gif';



/**
	1-213. 캔버스 화소정보 다루기
	- 이미지 가공을 위한 화소정보 가져오기
	- context.getImageData(x,y,width,height) 
 */
// getImageData()를 사용해서 캔버스콘텍스트의 화소정보를 가져오며, 반환값은 ImageData객체다

const pxCan= document.querySelector('#pixelCanvas');
const pxCon = pxCan.getContext('2d');
pxCon.fillStyle='red';	// 컨텍스트 색상지정
pxCon.fillRect(0,0,100,100);

const pxData= pxCon.getImageData(0,0,100,100);
console.log(pxData.data); 	// 화소배열 출력



/**
	1-214. 이미지의 RGBA값 확인
	- 마우스가 가리키는 이미지 화소정보 확인
	- 이미지에 포함된 색 정보 확인
 */
// getImageData()를 사용해서 마우스커서가 가리키는 위치 색정보를 구한다.
// 캔버스요소를 mousemove 이벤트로 감시해서 마우스 커서 좌표를 layerX와 layerY로 가져온다.
// getImageData()의 첫번째와 두번째 인수에 해당좌표 할당해서 화소배열 가져옴. 
const rCan = document.querySelector('#rgbaCanvas');
const rCon = rCan.getContext('2d');	// 컨텍스트 가져오기
const rImg = new Image();				// image 가져오기
rImg.onload = () => {
	rCon.drawImage(rImg,0,0);		// 컨텍스트로 캔버스에 그리기
	};
rImg.src='../image/sample.jpg';		// 이미지로딩 시작

// 마우스 이동시
rCan.addEventListener('mousemove', (event) => {
	// 마우스좌표 가져오기
	const x= event.layerX;
	const y= event.layerY;
	
	// image Data 가져오기
	const imageData= rCon.getImageData(x,y,1,1);
	
	// 화소배열 가져오기
	const data= imageData.data;
	const r= data[0];	// 빨
	const g= data[1];	// 녹
	const b= data[2]; 	// 파
	const a= data[3]; 	// 알파
	
	// 문자열로 색정보다루기
	const color= `rgba(${r}, ${g}, ${b}, ${a})`;
	
	const el= document.querySelector('.rgbaLog');
	
	el.style.background=color;  // 배경색 지정
	el.textContent=color;		// 정보를 문자로 표시
	
});