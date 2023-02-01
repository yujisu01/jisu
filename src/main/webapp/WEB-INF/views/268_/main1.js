/**
 * 1-269. 처리파일 분할하기(es모듈)
 */
// es모듈은 여러자바스크립트 파일을 의존관계에 따라 불러오는 작업을 함.
// 규모가 큰 프로그램이 하나의 js파일만 사용하면 기능별 구조 파악과 분류가 복잡하고 어려워 버그 원인이댐
import {oh1} from './oh1.js';
import {oh2} from './oh2.js';

// oh1 메소드로 문자열 갖고오기
const message1 = new oh1().myMethod1();
const message2 = new oh2().myMethod2();

const log = document.querySelector('#log');
log.innerHTML += `<p>${message1}</p>`;
log.innerHTML += `<p>${message2}</p>`;

// es모듈 사용시 (html에서 script type="module") 크롬속성 바꿔줘서 로컬테스트

