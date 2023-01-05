
/**
	1-215. 캔버스 이미지 가공
	- 로딩한 이미지에 효과 넣고싶을때
	- context.putImageData(이미지) : 이미지 데이터 입력
	
	// 로컬로 하면 오류남
	
 */// 캔버스 요소 참조
const canvas1 = document.querySelector('#beforeCanvas');
// 컨텍스트 가져오기
const context1 = canvas1.getContext('2d');
// Image 인스턴스 생성
const img = new Image();
// 이미지 로딩 후 처리
img.onload = () => {
  // 컨텍스트로 캔버스에 그리기
  context1.drawImage(img, 0, 0);

  // 화소 정보 가져오기

 // 계속 에러나서 걍 주석처리..
  //const imageData = context1.getImageData(0, 0, 150, 150);
  const data = imageData.data;

  const monoImageData = new ImageData(150, 150);

  const monoArr = monoImageData.data;
  for (let i = 0; i < data.length / 4; i += 1) {
    // 화소 정보 가져오기
    const r = data[i * 4 + 0];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    // 평균값 구하기(연산 간략화를 위함)
    const color = (r + g + b) / 3;

    // 새로운 배열에 색 지정
    monoArr[i * 4 + 0] = color;
    monoArr[i * 4 + 1] = color;
    monoArr[i * 4 + 2] = color;
    monoArr[i * 4 + 3] = a;
  }

  //캔버스 요소 참조
  const canvas2 = document.querySelector('#afterCanvas');
  // 컨텍스트 가져오기
  const context2 = canvas2.getContext('2d');
  // 컨텍스트에 새로운 화소 정보 할당
  context2.putImageData(monoImageData, 0, 0);
};
// 이미지 로딩 시작
img.src = '../image/sample.jpg';




/**
	1-216. DataURL로 캔버스에 이미지 표시
	- 캔버스 작업결과 문자열로 가져올때
	- 문자열타입으로 서버에 보관
	- 캔버스작업결과를 img요소로 복제하고 싶을때
	- canvas.toDataURL() 
 */
// toDataURL()을 사용해 캔버스 요소로 작업한 그래픽을 DataURL형식으로 출력함. 

const urlCan=document.querySelector('#urlCan');
const urlContext= urlCan.getContext('2d');

urlContext.fillStyle='red';
urlContext.fillRect(0,0,100,100);
urlContext.fillStyle= 'green';
urlContext.fillRect(25,25,50,50);

const urlData= urlCan.toDataURL();
console.log(urlData);

const urlImg= document.querySelector('#urlImg');
urlImg.src=urlData;

