package com.jisu.project;

public class code01 {
	public static void main(String[] args) {
		String[] text= {
				" + -- + - + -  ",
				"+ --- + - +  ",
				"+ -- + - + -   ",
				"+ - + - + - +   "
		};
		solution(text);
	}
	public static void solution(String[] text) {
		for (int i=0; i<text.length; i++) {
			// strip()는 자바11 이후 나온거라서 안됨. trim()으로 공백제거해줌..
			// 문자를 0과 1의 정수로 변환, 이는 이진수이기 때문에 parseInt 메소드 사용시, 2라는 별도의 인수 추가해준다.
			int n= Integer.parseInt(text[i].replace(" ","").replace("+","1").replace("-","0"), 2);
			// 해당값을 char형으로변환해 아스키코드로 인코딩
			text[i] = String.valueOf((char)n);
			System.out.println(text[i]);
			
		}
	}
	
}
