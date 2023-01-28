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



/**
	1-264. 인스턴스 생성없이 정적메소드 사용
	-클래스인스턴스화 없이 메소드 호출
 */
class sClass{
	static smethod(){
		console.log('static');
	}
}
sClass.smethod();

class StringUtil{
	static createFullName(firstName,familyName){
		return `${familyName} ${firstName}`;
	}
}
const myFullName= StringUtil.createFullName('brown','charlie');
console.log(myFullName);


/**
	1-265. 클래스 계승
 */
class myParent{
	parentMethod(){console.log('pa');}
	
}
class myChild extends myParent{
	constructor(){
		super();
	}
	childMethod(){
		console.log('mychild');
	}
	}
	const MyChild=new myChild();
	MyChild.parentMethod();
	MyChild.childMethod();