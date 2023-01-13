/**
 * 1-248. 위치정보읽어오기 (스마트폰)
	- 지도에 현재위치 표시
	- navigator.geolocation.getCurrentPosition(성공시함수,실패시함수) : 위치정보 가져오기
 */
// position.coords.latitude : 위도
// position.coords.longitude : 경도
// position.coords.accracy : 위도,경도의오차
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
//console.log(nav);

function geoSuccess(position) {
	const lat= position.coords.latitude;
	const lng= position.coords.longitude;
	const accracy=Math.floor(position.coords.accracy);
	
	setMap(lat,lng);
}

function setMpa(lat,lng){
	const latlng= new google.maps.LatLng(lat,lng);
	const marker = new google.maps.Marker({
		map:map, draggable:true, animation:google.maps.Animation.DROP,
		position:latlng
	});
}

function geoError(){
	console.log('Geolocation Error');
}
