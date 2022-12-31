/**
 * 1-180. CSS Transitions, CSS Animations 사용
	- 셀렉터의 상태변화에 따라 발생함. 
 */
const transitionBtn= document.querySelector('button');	// 트랜지션 확인버튼
transitionBtn.addEventListener('click', handleClick);	// 버튼클릭시

function handleClick() { 		// 버튼클릭시 이벤트 실행	
	const transitionElement= document.querySelector('.cssTarget');
	// state-show클래스 포함여부확인
	if(transitionElement.classList.contains('state-show') === false){	// state-show 없으면
		transitionElement.classList.add('state-show');					// 추가
	// 포함되있으면 해당 클래스제거함으로써 요소 상태 전환
	}else{			
		transitionElement.classList.remove('state-show');		
	}
}
// css transitions이벤트
document.querySelector('.cssTarget').addEventListener('transitionend', (event) =>{
	document.querySelector('.cssTransitionsLog').innerHTML= 'transitionEnd 발생 : ' 
	+ new Date().toLocaleTimeString();
});



/**
	1-181. CSS Transitions 종료시 작업처리
	- 모션실행후 처리 추가
	- transitionend
 */
// 체크박스 체크시 모션실행이벤트 
document.querySelector('#checkbox').addEventListener('change', (event) =>{
	const rectElement= document.querySelector('.rect');
	
	if(rectElement.classList.contains('state-show') === true){	// 아까랑 비슷. state-show 있으면 클래스 제거
		rectElement.classList.remove('state-show');
	}else{
		rectElement.classList.add('state-show');	// 없으면 추가
	}
});

// 로그표시 영역 부분 이벤트 처리 
	const rectElement=document.querySelector('.rect');
	// 애니메이션 완료후 처리
	rectElement.addEventListener('transitionend', (event) => {
		document.querySelector('.rectLog').innerHTML = 'transition 발생 : '
		+ new Date().toLocaleTimeString();	// 완료후 시간표시 
	});
	
	
	
/**
	1-182. CSS Animations 종료시 작업처리
	- animationstart, animationiteration(반복 발생시 이벤트), animationend
 */		
document.querySelector('#loadCheckbox').addEventListener('change', (event) => {
	const loadElement= document.querySelector('.loadRect');
	
	if(loadElement.classList.contains('state-show') === true) {
		loadElement.classList.remove('state-show');
	}else{
		loadElement.classList.add('state-show');
	}
});
const loadTargetEl= document.querySelector('.loadRect');

loadTargetEl.addEventListener('animationstart', (event) => {
	document.querySelector('.loadLog').innerHTML = 'animation 발생(start) : '
	+ new Date().toLocaleTimeString();
});
loadTargetEl.addEventListener('animationiteration', (event) => {
	document.querySelector('.loadLog').innerHTML= 'animation 발생(iteration) : ' 
	+ new Date().toLocaleTimeString();
});
loadTargetEl.addEventListener('animationend', (event) => {
	document.querySelector('.loadLog').innerHTML = 'animation 발생(end) : '
	+ new Date().toLocaleTimeString();
});



/**
	1-183. Web Animations API 사용하기
	- 자유도가 높은모션 사용
	- 자바스크립트가 메인으로 모션생성
	- 요소.animate(객체,객체)
 */
// Web 애니메이션 api는 자바스크립트에서 애니메이션 사용하기 위한 수단임. 
// CSS Transition과 CSS animations은 css에 미리 모션 등록을 해놔야한다. 근데 이건 아님
// 종료시점 판단이 쉬움.
const apiElement= document.querySelector('.apiRect');

// 애니메이션 설정 개신기해.
apiElement.animate(
	{	// 시작값과 종료값 설정
		transform:['translateX(0px) rotate(0deg)', 'translateX(800px) rotate(360deg)']
	},
	{	// 밀리초지정,			반복횟수				반복작업 방식			가속도 종류
		duration: 3000, iterations: Infinity, direction:'normal', easing: 'ease'
	
	}
);


/**
	1-184. 요소 크기 변경하기
	- 버튼에 마우스 반응설정
 */
// 요소 크기변경은 css의 transform()설정과 scale() 메소드 사용함. 

/* (1) CSS Transitions 사용한 샘플 */
document.querySelector('#cssTranCheckbox').addEventListener('change', (event) => {
	const cssTranElement= document.querySelector('.cssTranRect');
	
	if(cssTranElement.classList.contains('state-show') === true){
		cssTranElement.classList.remove('state-show');
	}else{
		cssTranElement.classList.add('state-show');
	}
});

/* (2) Web Animations API를 사용한 샘플 */
document.querySelector('#webAniCheckbox').addEventListener('change', (event) => {
	const webAniElement= document.querySelector('.webAniRect');
	
	if(event.target.checked === true) {
		webAniElement.animate(
			{
				transform: ['scale(1)', 'scale(5)']
			},{
				duration:500, fill:'forwards', easing:'ease'
			}
		);
	}else{
		webAniElement.animate(
			{transform: ['scale(5), scale(1)']},{duration:500, fill:'forwards', easing: 'ease'}
		);
	}
});
