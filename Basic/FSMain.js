/*
- node.js에서 파일의 데이터를 쓰고 읽어 올 수 있는 기능을 제공.
 */

const FS = require('fs');

// writeFile: 비동기식(동시에)으로 파일에 데이터를 쓴다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터를 삭제하고 쓴다.
// 동시에 해서 먼저 끝나는 것이 먼저 출력된다.
FS.writeFile('data1.txt', 'Hello node.js', function (error) {
    console.log("비동기식 저장 1");
});

FS.writeFile('data2.txt', 'Hello node.js', function (error) {
    console.log("비동기식 저장 2");
});

// appendFile: 비동기식으로 파일에 데이터를 쓴다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터 뒤에 추가로 쓴다.
FS.appendFile('data1.txt', '안녕하세요', function (error) {
    console.log("비동기식 추가 1");
});

FS.appendFile('data2.txt', '반갑습니다', function (error) {
    console.log("비동기식 추가 2");
});

// readFile: 비동기식으로 파일의 데이터를 읽어온다.
// Buffer에 저장되서 반환된다. 그래서 toString()을 붙여야 한다.
// 이것도 동시에 해서 먼저 끝나는 것이 먼저 출력된다.
FS.readFile('data1.txt', function (error, data) {
    console.log('data1:', data.toString());
});

FS.readFile('data2.txt', function (error, data) {
    console.log('data2:', data.toString());
});

// writeFileSync: 동기식(순서대로)으로 파일에 데이터를 쓴다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터를 삭제하고 쓴다.
FS.writeFileSync('data3.txt', 'Hello node.js');
console.log("동기식 저장 1");

FS.writeFileSync('data4.txt', 'Hello node.js');
console.log('동기식 저장 2');

// appendFileSync: 동기식으로 파일에 데이터를 쓴다.
// 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터 뒤에 추가로 쓴다.
FS.appendFileSync('data3.txt', '안녕하세요');
console.log("파일 내용 추가 1");

FS.appendFileSync('data4.txt', '반갑습니다');
console.log("파일 내용 추가 2");

// readFileSync
// Buffer에 저장되서 반환된다. 그래서 toString()을 붙여야 한다.
const data3 = FS.readFileSync('data3.txt');
console.log('data3:', data3.toString());

const data4 = FS.readFileSync('data4.txt');
console.log('data4:', data4.toString());
