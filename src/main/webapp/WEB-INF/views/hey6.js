/*
	1-017. 반복문
	 - for문
*/
console.log('-----------for문--------------');

for (let index =0; index<10; index++){
	console.log(index);
}

/*
	1-018. 반복문
	 - while문
 */
console.log('-----------while문--------------');

let number=0;
while(number<10){
	console.log(number);
	number+=1;
}
/*
	1-019. 반복처리 스킵
	 - 반복처리중 특정조건에 대해 스킵
	 - for문 루프중 처리 스킵할때
 */
console.log('-----------continue문--------------');

for(let index=0; index<10; index++){
	if(index %2 ===0){		// 짝수면 넘어가
		continue;
	}
	console.log(index);
}
console.log('종료');

console.log('-----------continue문 가독성비교--------------');
//(1)
function func(fA){
	for(let i=0; i<10; i++){
		if(fA ===true){
			if(i%2 !== 0 ){
				console.log(i);
			}
		}
	}
}
//(2) 
function fucn(fB){
	for(let i =0; i<10; i++){
		if(fB===false){
			continue;
		}
		if(i%2===0){
			continue;
		}
		console.log(i);
	}
}

