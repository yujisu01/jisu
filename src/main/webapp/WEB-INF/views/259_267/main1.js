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


