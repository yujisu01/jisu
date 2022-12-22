/**
 * 1-094. 경고 표시
	- 알림창 표시
	- 동기형식으로 메시지표시
 */
const btn= document.querySelector('button');
btn.addEventListener('click', (event) => {
	const ww=window.innerWidth;
	const hh=window.innerHeight;
	alert(`가로길이는 ${ww}px 입니다.\n
		   세로길이는 ${hh}px 입니다.`);
});

/**
	1-095. 확인창 표시하기
	- 선택창을 표시하고 싶을때
	- 동기형식으로 확인창 표시
	- confirm()
 */
const conBtn= document.querySelector('#conBtn');
conBtn.addEventListener('click', (event) => {
	const yes= confirm('노래가 좋나요');
	document.querySelector('.conLog').innerHTML = yes;
});


/**
	1-096. 입력 프롬프트 표시
	- 유저로부터 문자를 입력받고 싶을때
	- 동기형식의 작업
 */
//prompt()
const pBtn=document.querySelector('#promBtn');

pBtn.addEventListener('click', (event) => {
const text= prompt('노래 추천좀...','Childish Gambino - Sober');
console.log(text);
document.querySelector('.promLog').innerHTML=`${text}`;
});


