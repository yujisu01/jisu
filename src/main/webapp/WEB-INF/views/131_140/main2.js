/**
	1-134. 드래그앤 드롭 기능 사용
	- dragstart, drag, dragend
	- dragenter, dragover(드래그중인 포인터가 요소위치에 있음), dragleave, drop(드롭)
	- event.dataTransfer.files() 드롭한파일정보
 */

/* (1)
 드래그앤드롭 api를 사용하면 html임의의 요소에 드래그한 파일처리가 가능하다.
 .character요소의 드래그 이벤트 샘플 확인해보기 
*/
const character= document.querySelector('.character');

character.addEventListener('dragstart', ()=>{
	console.log('dragstart 이벤트');
});

character.addEventListener('drag', ()=>{
	console.log('drag 이벤트');
});
character.addEventListener('dragend', ()=> {
	console.log('dragend이벤트');
});

/* (2)
	dragenter, dragover, dragleave 
	마우스 포인터의 움직임과 위치에 따라 발생한다. dragover는 포인터가 요소에 위치해 있으면 이벤트발생
*/
const boxDrag= document.querySelector('.boxDrag');

boxDrag.addEventListener('dragenter', () =>{
	console.log('dragenter 이벤트');
});
boxDrag.addEventListener('dragover', () =>{
	console.log('dragover 이벤트');
});
boxDrag.addEventListener('dragleave', ()=> {
	console.log('dragleave 이벤트');
});


/**
	(3)
	dragover, drop
	브라우저에 파일을 드래그앤 드롭하면 페이지 이동이 발생하므로 
	dragover이벤트의 event.preventDefault() 처리필수
 */
const boxDrop = document.querySelector('.boxDrop');

// dragover 이벤트무효화
boxDrop.addEventListener('dragover', (event) => {
	event.preventDefault();
});
boxDrop.addEventListener('drop', () => {
	console.log('drop 이벤트');
});


/* (4)
	drop이벤트 발생시점에 event.dataTransfer.files속성을 통해 파일리스트에 액세스 가능.
	event.dataTransfer.files 파일정보 보관..
	파일 드래그앤드롭 샘플
*/

const filezone=document.querySelector('.file-zone'); // 파일업로드영역
const className='on';		// 파일업로드 영역에 사용하는 클래스

// 드롭하면
filezone.addEventListener('dragover', (event) => {
	event.preventDefault();		// 기본이벤트 작동해지
	filezone.classList.add(className);
});

// 드래그가 요소를 벗어날 경우 처리
filezone.addEventListener('dragleave', () =>{
	event.preventDefault();		// 기본 이벤트 작동해지
	filezone.classList.remove(className);
	console.log('드래그가 요소 벗어난경우 새창으로 띄워짐');
});

// 드롭처리
filezone.addEventListener('drop', (event) => {
	event.preventDefault();		// 기본이벤트작동해지
	filezone.classList.remove(className);
	
	const transferFiles = event.dataTransfer.files; 	// file객체참조
	displayImages(transferFiles); 		//이미지표시
});

// 이미지표시 처리
function displayImages(transferFiles){
	// 이미지파일보관 배열
	const imageFileList=[];
	const fileNum= transferFiles.length;	// 파일수
	
	// 이미지파일인 경우에만 작업
	for(let i=0; i<fileNum; i++){
		if(transferFiles[i].type.match('image.*') === false){
			alert('이미지 파일만 업로드해주세요');
			return;
		}
		imageFileList.push(transferFiles[i]);
	}
	
	// 이미지 표시영역 참조
	const imagePreviewArea=document.querySelector('.image-list');
	// 각 이미지 파일처리
	for(const imageFile of imageFileList){
		const fileReader=new FileReader();
		fileReader.readAsDataURL(imageFile);
		fileReader.addEventListener('load', (event) => {
			const image = new Image();
			image.src=event.target.result;
			console.log(image);
			// 표시영역 첫부분에 이미지파일표시
			imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild); 
		});
	}
}