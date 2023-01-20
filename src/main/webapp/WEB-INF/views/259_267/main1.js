/**
 * 1-259. 함수내부 변수와 상수 범위알기
	- 처리를 단위로 분할
	- 변수,상수의 유효범위 좁히고싶을대
 */
{
	const a=100;
	console.log(a);
	{
		console.log(a);
	}
}

{
	{
	const aA= 200;
	}
	//console.log(aA);
}

const b = 980;	 // 전역
{
	console.log(b);
}


function fu(){
	const val= 'value1';
	console.log(val);
	
	function cFu() {
		console.log(val);
	}
	cFu();
}
fu();

//스코프를 벗어나므로 에러 발생
//console.log(val);

console.log('-----------------');

if(true){
	const tVal = 'liar';
	console.log(tVal);
}
