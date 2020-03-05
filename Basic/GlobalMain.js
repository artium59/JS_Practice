/*
- node.js에서 모듈을 생성하지 않고 사용할 수 있는 것들을 가지고 있는 모듈 객체
- Global 모듈 객체는 프로그램 시작과 동시에 생성이 되며 어디서든 사용이 가능하다.

- Buffer: 메모리를 동적할당 할 수 있는 모듈
- __dirname: 현재 실행 중인 파일의 경로를 가지고 있다.
- __filename: 현재 실행 중인 파일의 경로와 파일명을 가지고 있다.

- setImmediate: 하나의 사건처리가 끝나면 동작할 코드를 등록한다.
- clearImmediate: 등록된 Immediate를 제거한다.

- setInterval: 주어진 함수를 주어진 시간마다 계속 호출한다.
- clearInterval: 등록된 Interval을 제거한다.

- setTimeOut: 주어진 한 수를 주어진 시간 후에 한 번 호출한다.
- clearTimeOut: 등록된 TimeOut을 제거한다.

- console: 화면 출력을 위한 객체이다.
- exports: 개발자가 모듈을 만들 때 사용하는 객체이다.
- require: 모듈 객체를 만드는 함수이다.
 */

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

console.log('1');
const a1 = setImmediate(function () {
    console.log('Immediate 동작 1');
});
console.log('2');
setImmediate(function () {
    console.log('Immediate 동작 2');
});
console.log('3');
clearImmediate(a1);
/*
let b1 = 0;
const b2 = setInterval(function () {
    console.log("Interval 동작");
    b1++;
    console.log('b1:', b1);
    if (b1 >= 5)
        clearInterval(b2);
}, 1000);
*/

let c1 = setTimeout(function () {
    console.log("timeout 동작");
}, 1000);
clearTimeout(c1);

console.log('작업이 모두 완료되었습니다.');
