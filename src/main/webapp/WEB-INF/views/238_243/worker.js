onmessage= (e) => {
	console.log('[worker]메인스크립트의 데이터 냠..냠.');
	
	const result = e.data[0]+ e.data[1];
	console.log('[worker]->메인스크립트로 데이터전송');
	postMessage(result);
}