/**
 * 1-238. XMLHttpRequest로 데이터 읽어오기
- 구버전의 브라우저에서 데이터 전송하고싶을때
- new XMLHttpRequest() :인스턴스 생성
- open(메소드,url)   : 리퀘스트 초기화
- send() : 리퀘스트 전송
 */

// js에서 fetch()보다 오래된기능인 XMLHttpRequest()를 사용하면 처리가 복잡하지만, 저레벨 방식의 제어가 가능하고
// 구버전의 브라우저에서도 사용이 가능하다.
// XMLHttpRequest객체의 불러오기완료 확인은 load이벤트를 사용하며, 이벤트 핸들러에서
// responseText 속성을 사용해서 불러온 문자열 데이터 참조가 가능
const xbtn= document.querySelector('#xBtn');
xbtn.addEventListener('click', ()=>{
	const req=new XMLHttpRequest();
	req.addEventListener('load', (event) => {
		const text= event.target.responseText;
		document.querySelector('#Xlog').innerHTML= text;
	});
	req.open('GET', '../image/mala.txt');
	req.send();
});



/**
	1-239. XMLHttpRequest로 작업상황 확인
	- event.loaded : 현재로딩 진행상태
	- event.total : 전체데이터 크기
 */

const pBtn= document.querySelector('#pBtn');

pBtn.addEventListener('click', () => {
	const pReq = new XMLHttpRequest();	// 버튼클릭시 XHR생성
	pReq.responseType = 'blob';		// 데이터 종류 설정
	
	pReq.addEventListener('progress', (event) => {
		const rate= event.loaded / event.total; 		// 진행 상황계산 (0~1)
		// 진행바 폭변경
		const element= document.querySelector('.progress-bar'); 
		element.style.width= `${rate * 100}%`; 
	});
	
		// 불러오기완료후 이벤트
		pReq.addEventListener('load', (event) => {
			const pData = event.target.response;	// response가져오고
			const source = URL.createObjectURL(pData);	// 이미지 데이터변환
			
			const pImage = new Image();	// 이미지 생성하기
			pImage.src= source;
			// 텍스트출력
			document.querySelector('#pLog').appendChild(pImage); 	// text는 innerHTML
		});
			// 파일지정하기
			pReq.open('GET', '../image/가시.jpg');
			// 가져오기 시작
			pReq.send();
});



/**
	1-240. XMLHttpRequest로 작업취소하기
	- 네트워크통신중인 작업 취소하고싶을때
	- abort() : 데이터전송작업취소
 */
// abort()사용하면 XHR 객체인스턴스가 진행중인 데이터 송수신작업을 중단가능
// 이때 발생하는 이벤트는 load가 아니라, abort이벤트다. ....제바아ㅏㄹ알
const aBtn= document.querySelector('#aBtn');

aBtn.addEventListener('click', () => {
	const aReq= new XMLHttpRequest();
	aReq.responseType= 'blob';
	
	// 불러오기 실패시 이벤트
	aReq.addEventListener('abort', (event)=> {
		document.querySelector('#aLog').textContent='불러오기 작업 실패';
	});
	// 불러오기 완료시 이벤트
	aReq.addEventListener('load', (event) => {
		const aData=event.target.response;	//response가져오고
		const aSource = URL.createObjectURL(aData);	// URL.create~로 이미지 변환
		
		const aImage= new Image(); 	// 이미지 생성준비
		aImage.src= aSource; 		// 이미지 생성하고
		document.querySelector('#aLog').appendChild(aImage);	// 텍스트출력함
	});
		// 파일지정
		aReq.open('GET', '../image/cookie.jpg');
		aReq.send();	//불러오기 시작
		
		// abort()를 썼으니..if문으로 50%확률 
		if(Math.random() > 0.5){
			// 불러오기 작업 중단 설정
			aReq.abort();
		}
});



/**
	1-241. 백그라운드에서 스크립트 작업하기
	- 부하가 큰처리를 실행하고 싶을때
	
 */
/**
	자바스크립트는 메인스레드로도 동작하지만, 부하가 큰작업을 하려면 처리작업중엔 조작이 불가능함.
	자바스크립트 처리가 ui를 담당하는 메인스레드를 멈추게 하기 떄문임...
	웹워커를 사용하면 이문제 해결가능. 
	웹워커는 메인스크립트와 스레드가 다르므로 DOM조작 불가하며, 페이지가 열려있을떄만 실행댐
	웹워커와 메인스레드는 postMessage()를 사용해 메시지 전송하고, onmessage이벤트 핸들러로
	데이터를 반환하며 해당 데이터는 onmessage 이벤트 data속성에 보관댐
 */
// 참조 가져오기
const numA = document.querySelector('#num1');
const numB = document.querySelector('#num2');
const result = document.querySelector('.result');
const calbtn = document.querySelector('#calBtn');

// worker 생성
const worker = new Worker('worker.js');

// 버튼 클릭 시
calbtn.addEventListener('click', () => {
  worker.postMessage([Number(numA.value), Number(numB.value)]);
  console.log('[메인스크립트]-> worker로 데이터 전송');
});

// worker 데이터를 가져올 때
worker.onmessage = function(e) {
  // 결과를 화면에 표시
  result.textContent = e.data;
  console.log('[메인스크립트] worker에서 메시지 냠.냠');
};



/**
CORS문제 드디어 해결.;;ㅡㅡ
구글링해서 크롬 바로가기 속성에서 disable~ 경로를 추가해줬다.
(-–allow-file-access-from-files 이거 안됐었음)
 */



/**
	1-242. 백그라운드에서 작업실행하기
	- 브라우저의 백그라운드에서 네트워크를 감시하고 싶을때
	-navigator.serviceWorker.register() : serviceWorker등록 
 */
// 서비스워커는 열려있는 웹페이지의 백그라운드에서 항상 작동하는 스크립트임.
// 웹워커는 페이지가 열려있을떄만 실행된다. 근데 서비스워커는 브라우저를 닫아도 실행할수 있음 (푸시알림, 캐시기능)

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('serviceworker.js')
		.then((registration) => {
		console.log('serviceWorker 등록성공');
	})
	.catch((error) => {
		console.log('serviceWorker 등록실패: ', error);
	});
}else{
	console.log('serviceWorker 미대응');
}