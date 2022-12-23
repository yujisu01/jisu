/**
 * 1-082. 날짜 다루기 (연도)
 */
const date=new Date();
const year=date.getFullYear();

document.querySelector('#log').innerHTML=`지금은 ${year}년 입니다`;


/**
	1-083. 날짜 다루기 (월,일)
	- getMonth():월, getDate():일
 */
// 0이 1월이고, 11이 12월이다.
const month=date.getMonth()+1;
const day=date.getDate();
const label=`${month}월${day}일`;

document.querySelector('#monthDate').innerHTML=`오늘은 ${label}입니다`;


/**
	1-084. 시간 다루기
	- 디지털형식으로 시간표시
	- getHours(), getMinutes(), getSeconds()
	- getMilliseconds() : 밀리초
 */
// 0~23이 1~24시간, 0~59가 60초 뜻하는거. 
// 24:00의 경우, getHours()의 반환값이 24가 아닌 0인거 주의

const hour=date.getHours();
const minute=date.getMinutes();
const seconds=date.getSeconds();
const mill = date.getMilliseconds();

const t=`${hour}시${minute}분${seconds}초`;

document.querySelector('#currTime').innerHTML=`지금은 ${t}입니다.`;

// 오전/오후를 할때 if문사용
let meridiem;
let hour2;
if(hour<12){
	meridiem='오전';
	hour2=hour;
}else{
	meridiem='오후';
	hour2=hour-12;
}
const t2=`${meridiem} ${hour2}시`;

document.querySelector('#meridiemLog').innerHTML=`지금은 ${t2}입니다`;




/**
	1-085. 요일 다루기
	- getDay()
 */
// getDate()와 비슷하니 헷갈림주의. 반환값이 숫자이고 0~6(일~토) 이렇게 표시
const newDay=date.getDay();
const dayList=['일','월','화','수','목','금','토'];
const dayLabel=dayList[newDay];

document.querySelector('#dayLog').innerHTML=`오늘은 ${dayLabel}요일 입니다`;



/**
	1-086. 현재시간과 날짜
	- toLocaleDateString(): 현재날짜를 문자열로
	- toLocaleTimeString(): 현재시각을 문자열로
 */

//getDate(), getHours() 사용가능하나 코드가 복잡해질수 있다. toLocaleString() 사용시 간결한 표현 가능
const locale= date.toLocaleString();	// 날짜, 오전오후인지 시간까지 출력
const localeDate=date.toLocaleDateString();	// 연도,월,일까지
const localeTime=date.toLocaleTimeString();	// 오전 오후 시간대까지
document.querySelector('#localeLog').innerHTML= `
	${locale}<br />
	${localeDate}<br />
	${localeTime}
	`;



/**
	1-087. 날짜문자열의 타임스탬프 확인
	- Date.parse() : 날짜문자열 타임스탬프 가져오기
 */

const num1=Date.parse('2022/12/25');
// 1671894000000 : 이게머냐면 1970년 1월1일 00:00:00부터 현재까지의 경과시간을 나타내는것. 
// 단위는 밀리초(1/1000초)이다.
console.log(num1);	 

const num2= Date.now();
// 현재시간의 타임스탬프이다
console.log(num2);	




/**
	1-088. 날짜 설정하기
	- Date인스턴스에 날짜 설정
 */

const date1=new Date('2022/12/01 20:03:33');
const date2=new Date('Mon Dec 28 2021 18:01:10');
console.log(date1);
console.log(date2);

const date3=new Date();
date3.setFullYear(2022);
date3.setMonth(0);
date3.setDate(1);
date3.setHours(0);
date3.setMinutes(0);
date3.setSeconds(0);

document.querySelector('#dLog').innerHTML=date3.toLocaleString();



/**
	1-089. 날짜 계산
	- 하루뒤 날짜 알고싶을때, 달을 넘겨 계산 할때
 */
const calDate= new Date('2017/04/04');
calDate.setMonth(calDate.getMonth() - 1);
console.log(calDate.toLocaleDateString());
calDate.setDate(calDate.getDate() + 2000);
console.log(calDate.toLocaleDateString());




/**
	1-090. 날짜 차이 구하기
 */
const dateA= new Date('2022/12/21');
const dateB= new Date('2017/04/04');
const diffSec= dateA.getTime()-dateB.getTime();
const diffDate=diffSec/ (24*60*60*1000);
console.log(`2017/04/04년부터 지금까지 ${diffDate}일 입니다.`);

const hourA= new Date('2022/12/21 18:16:00');
const hourB= new Date('2017/04/04 22:00:00');
const diffHourSec = hourA.getTime() - hourB.getTime();

const diffHour = diffHourSec/(60*60*1000);
const diffHourRound = Math.round(diffHour);
console.log(`시간 차이는 ${diffHourRound}시간입니다.`);

document.querySelector('#diffHourLog').innerHTML=`${diffHourRound}시간이나 만나버렸네요 저런`;


