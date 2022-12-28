/**
 * 1-140. <html>,<body>요소 읽어오기
 */
const changeBtn= document.querySelector('.theme-change-button');

// 테마변경 버튼 클릭시 처리
changeBtn.addEventListener('click', () =>{
	document.body.classList.toggle('theme-dark');
	//console.log(a);
//	alert(';');
});

