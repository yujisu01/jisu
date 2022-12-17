/**
	1-031. 문자열에서 문자 다루기(문자열에서 추출)
	- 지정한 위치의 문자 추출
	- 문자열.charAt([인덱스])
 */
// 검색어
const searchWordText= document.querySelector('#search-word-input');
// 지역리스트
const prefectureList= document.querySelectorAll('#prefecture-list button');

// 문자 입력될때마다 데이터 체크작업실행
searchWordText.addEventListener('keyup',() => {
	// 입력한검색어
	const searchWord=searchWordText.value;
	
	// 지역리스트 루프처리
	// element는 각요소에 해당됨
	prefectureList.forEach((element) => {
		// 검색어 없으면 모든요소 표시
		// 전체일때는 전부 출력되지만 이 if문 없애면 검색어 없을때 다 안나옴
		if(!searchWord || searchWord ==='') {
			element.classList.remove('hide');
			return;
		}
		
		// 데이터name가져오기
		const prefectureName = element.dataset.name;
		// 데이터 영문name가져오기
		const phonetic = element.dataset.phonetic;
		
		// 검색어와 첫번째 글자 일치 여부에 따라 hide클래스 사용결정
		// hide 클래스가 사용된 요소는 화면에 표시 X
		if(
			searchWord.charAt(0) === prefectureName.charAt(0) ||
			searchWord.charAt(0) === phonetic.charAt(0)
			
		){
			// 검색어 첫번째 글자가 일치하는경우 hide클래스 제거
			element.classList.remove('hide');
		}else{
			// 검색어 첫번째 글자 일치하지 않으면 hide클래스 추가
			element.classList.add('hide');
		}
	});
});

/**
	1-032. 문자열 다루기 (위치지정하여 선택)
	- 지정범위내의 문자열 추출해서 사용할때
	- 지정위치 이후의 문자열 추출해서 사용시
	- 문자열.slice(시작인덱스,[종료인덱스])
	- 문자열.substring(시작인덱스,[종료인덱스])
 */

console.log('나의 노트북'.slice(0,-2)); // 정처기 파이썬 문자열 slice때 지겹도록 한거 그패턴이랑 똑같
console.log('반갑습니다'.substring(3,1)); // substring은 시작,종료인덱스다 //갑습
console.log('자바스크립트123456789'.substr(2,5)); // substr은 문자열 추출임. 인덱스 시작위치를 2로해서 5개 추출