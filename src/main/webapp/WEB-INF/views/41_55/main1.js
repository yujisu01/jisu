/**
 * 1-041. 소수점 자릿수 지정
	-숫자 3.14159265를 문자열 3.14로 변환하고 싶을때
	- 숫자 10을 문자열 10.00 으로 변환하고 싶을때
 */

console.log((3.14159265).toFixed(2));
console.log((0.4).toFixed(4));
console.log((123.4567).toFixed(1)); // 근사치로 변환

// toPrecision()은 들어온 값을 지정한 자릿수 정밀도로 변환 (toFixed랑 다른게머지)
console.log((0.923823).toPrecision(2)); // 0.92
console.log((123.455).toPrecision(3)) // 123

console.log((4.56).toPrecision(2)); // 4.6
console.log((10).toPrecision(4)); 	// 10.00

// 15초간 카운트다운 하는 샘플
/* 초단위용 element */
const secondElement = document.querySelector('.second');

// 15초가 목표치
const goalTime = new Date().getTime() + 5 * 1000;

update();

/* 프레임 실행함수 */
function update(){
	//현재시각
	const currTime = new Date().getTime();
	//목표치까지 남은시간
	const leftTime = goalTime-currTime;
	
	//남은시간이 0초미만이면 타이머정지
	if(leftTime<=0){
		secondElement.innerText='5초 타이머 끝';
		return;
	}
	// 초단위표시. 밀리초는 소수점 2자리까지
	secondElement.innerText=(leftTime/1000).toFixed(2);
	// 프레임에서 update()재실행
	requestAnimationFrame(update);
}



/**
	1-042. 문자열 길이맞추기
	- 10 미만 숫자앞에 0을 붙여 두자리형식을 만들고싶을때
	- padStart(), padEnd()
 */

console.log('----------문자열길이맞추기--------------');

console.log('5'.padStart(2,'0')); // 05
console.log('ff'.padEnd(6,'0')); // ff0000

console.log('123'.padStart(3,'0')) // 123
console.log('ff'.padStart(6));	//'    ff' (앞부분에 공백 4개 삽입)

// padStart()와 디지털시계 표시방식에 대한 샘플.. 현재시각을 시분초로 나누고 시간표시

/* 시간 */
const hourElement= document.querySelector('.hour');
/* 분 */
const minuteElement=document.querySelector('.minute');
/* 초 */
const secondElement1 = document.querySelector('.second1');

update1();

/* 2차리형식이 되도록 앞부분에 0을 추가하는 함수 */
function addZeroPadding(num){
	return String(num).padStart(2,'0');
}

/* 현재시각 표시처리 */
function update1(){
	const currentTime=new Date();
	
	// 시간표시
	const hour = currentTime.getHours();
	hourElement.innerText=addZeroPadding(hour);
	
	// 분표시
	const minute = currentTime.getMinutes();
	minuteElement.innerText=addZeroPadding(minute);
	
	// 초 표시
	const second1 = currentTime.getSeconds();
	secondElement1.innerText=addZeroPadding(second1);
	
	// 프레임에서 update1() 재실행
	requestAnimationFrame(update1);
}


/**
	1-043. 문자열 URI 이스케이프 처리
	- URI의 한글을 인코딩 할때
	- SNS의 한글을 인코딩후 URL로 변환하고 싶을때
	- encodeURI(문자열)
	- encodeURIComponent
 */

// URI 에 한글이 포함되면 그대로 사용할수 없으므로 인코딩이 필요하다..

console.log(encodeURI('http://example.com/내가만든쿠키.html'));
console.log(encodeURIComponent('http://example.com/미노이구쯔.html'));

// 텍스트영역에 한글과 해시태그를 입력해서 이를 트위터에 게시하는 샘플
// 헐 신기해~~
document.querySelector('#tweetButton').addEventListener('click', () => {
	// 트윗내용 가져오기
	let tweetText = document.querySelector('#tweetTextArea').value;
	
	// #javascript와 빈칸을 트윗내용에 추가하기
	// += ...이거 안쓰면 내용추가가 안됨
	// 앞에 띄어쓰기 안하면 해시태그 안먹음
	tweetText +=' #미노이사랑혀';
	
	// 인코딩하기
	const encodedText = encodeURIComponent(tweetText);
	
	// 링크작성
	const tweetURL= `https://twitter.com/intent/tweet?text=${encodedText}`;
	
	// 링크열기
	window.open(tweetURL);
});


/**
	1-044. 문자열 URI 디코드 하기
	- 인코딩된 URI문자열을 디코딩하고 싶을때
 */

console.log(decodeURI('http://example.com/%EB%82%B4%EA%B0%80%EB%A7%8C%EB%93%A0%EC%BF%A0%ED%82%A4.html'));