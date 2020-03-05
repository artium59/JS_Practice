/*
- node.js에서 데이터 암호화 기능을 제공하는 module
- 현재 존재하는 대부분의 암호화 알고리즘을 지원한다.
 */

const crypto = require('crypto');

// 지원하는 암호화 알고리즘 이름들을 반환
let ciphers = crypto.getCiphers();
// for (let x of ciphers)
//     console.log(x);

const KEY = 'test key';
let data = "암호화 할 데이터";

// 암호화용 객체 생성
const cipher = crypto.createCipher("aes-256-cbc", KEY);
// update: 데이터를 암호화하거나 복호화함
let result = cipher.update(data, 'utf8', 'base64');
// final: 암호화된 데이터에 마지막 종료 블럭을 추가
result += cipher.final('base64');

console.log("암호화된 문자열: ", result);

// 복호화용 객체 생성
const decipher = crypto.createDecipher('aes-256-cbc', KEY);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');

console.log("복호화된 문자열: ", result2);
