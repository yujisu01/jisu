/**
 * 1-250. 진동모터 사용
	- 진동피드백 기능
	- navigator.vibrate(진동시간(밀리초)) : 진동처리
 */
// Vibration API로 액세스가 가능하며, 기계내부 모터의 회전으로 작동
navigator.vibrate(1000);

// 4초 진동후 1초 정지, 다시 4초 진동
navigator.vibrate([400,100,400]);


// 그냥 이런게 있따 ~~