/**
 * 1-249. Gyro센서와 가속도 센서 사용 (스마트폰)
	- 기울기 확인, 방향 확인, 가속도 확인시
 */
// event.beta : X축기울기, event.gamma : Y축 기울기, event.alpha : Z축 기울기
// event.acceleration.x : x축 가속도
// event.acceleration.y : y축 가속도
// event.acceleration.z : z축 가속도

// 자이로 센서는 기울기(회전)를 검출하는 센서임. 스마트폰을 가로혹은 세로로 움직이며 센서가 인지하여 화면 전환시 사용
// 액세스는 DeviceOrientation 이벤트로 가능하며, window객체의 deviceorientation 이벤트로 x,y,z축 값 가져옴
window.addEventListener('deviceorientation', deviceorientationHandler);

function deviceorientationHandler(event){
	const beta= event.beta; 	// x축
	const gamma = event.gamma; 	// y축
	const alpha = event.alpha;	// z축
	console.log(beta);
	console.log(gamma);
	console.log(alpha);
}
