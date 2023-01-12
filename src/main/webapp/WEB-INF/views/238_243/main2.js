/**
 * 1-243. 푸시알림
	- 브라우저에서 os고유의 알림창을 사용해 알림을 표시하고 싶을때
	- Notification.permission : 브라우저의 알림허가여부
	- Notification.requestPermission() : 알림허가 요청
	- new Notification(알림타이틀) : 알림표시
 */

const pBtn = document.querySelector('#pBtn');
pBtn.addEventListener('click', notify);

function notify(){
	switch (Notification.permission){		// 브라우저의 알림허가여부
		case 'default': Notification.requestPermission(); 	// 알림허가 요청 (기본상태)
			console.log('default');
			break;
		case 'granted': new Notification('push');			// 알림허가후 Notification알림
			console.log('granted');
			break;
		case 'denied' : alert('알림거부'); 					// denied 알림거부
			console.log('denied');
			break;
	}
}