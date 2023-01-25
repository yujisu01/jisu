/**
 * 1-263. 클래스에서 메소드 사용하기
 */
class test{
	myme1() {
		return 'hello';
	}
	myme2(){
		return 100;
	}
}
const myInstance = new test();
console.log(myInstance.myme1());
console.log(myInstance.myme2());
console.log('---------------');

class nu{
	constructor(){
		this.myf='newJeans';
	}
	mymethod(){
		console.log(this.myf);
	}
}
const newInstance = new nu();
console.log(newInstance.mymethod());