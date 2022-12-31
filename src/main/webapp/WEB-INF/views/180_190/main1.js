/**
 * 1-180. CSS Transitions, CSS Animations 사용
	- 셀렉터의 상태변화에 따라 발생함. 
 */
const transitionBtn= document.querySelector('button');	// 트랜지션 확인버튼
transitionBtn.addEventListener('click', handleClick);	// 버튼클릭시

function handleClick() { 		// 버튼클릭시 이벤트 실행	
	const transitionElement= document.querySelector('.cssTarget');
	if(transitionElement.classList.contains('state-show') === false){
		transitionElement.classList.add('state-show');
	}else{
		transitionElement.classList.remove('state-show');
	}
}
// css transitions이벤트
document.querySelector('.cssTarget').addEventListener('transitionend', (event) =>{
	document.querySelector('.cssTransitionsLog').innerHTML= 'transitionEnd 발생 : ' 
	+ new Date().toLocaleTimeString();
});