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



// 나침반 (잘몰겠음)
window.addEventListener('deviceorientation', getCompassHeading);

function getCompassHeading(alpha,beta,gamma){
	const degto= Math.PI / 180;
	
	const _x = beta ? beta * degto : 0;
	const _y = gamma ? gamma * degto : 0;
	const _z = alpha ? alpha * degto : 0;
	
	const cY = Math.cos(_y);
	const cZ = Math.cos(_z);
	const sX = Math.sin(_x);
	const sY = Math.sin(_y);
	const sZ = Math.sin(_z);
	
	const Vx = -cZ * sY - sZ * sX * cY;
	const Vy = -sZ * sY + cZ * sX * cY;
	
	let compassHeading = Math.atan(Vx/Vy);
	
	if(Vy<0){
		compassHeading += Math.PI;
	}
	return compassHeading * (180 / Math.PI);
}


//  가속도센서(관성)
// 스마트폰이 떨어져서 물체제 부딪히는것을 인식함. 액세스는 DeviceMotion이벤트 사용

window.addEventListener('devicemotion', devicemotionHandler);

function devicemotionHandler(event){
	const x=event.acceleration.x;
	const y=event.acceleration.y;
	const z=event.acceleration.z;
}