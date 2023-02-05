package com.jisu.project;
// 0~99까지 랜덤숫자 추출
public class timeComplexityExample1 {
	int findNum= (int)(Math.random() * 100);
	for(int i=0; i<100; i++) {
		if(i==findNum) {
			System.out.println(i);
			break;
		}
	}

}
