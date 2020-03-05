/*
- path 모듈은 경로에 관련된 기능을 제공하고 있다.
- 경로에 대해 여러 작업이 필요할 경우 사용한다.
 */

const path = require('path');

// window
let basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1:", basename1);

// linux
let basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2:", basename2);

let basename3 = path.basename('abc.txt');
console.log("basename3:", basename3);

let dirname1 = path.dirname('c:/abc/abc.txt');
console.log('dirname1:', dirname1);

let dirname2 = path.dirname('abc.txt');
console.log('dirname2:', dirname2);

let extname1 = path.extname('c:/abc/abc.txt');
console.log('extname1:', extname1);

let extname2 = path.extname('abc.txt');
console.log('extname2:', extname2);

let isAbs1 = path.isAbsolute('c:/abc/abc.txt');
let isAbs2 = path.isAbsolute('abc.txt');
let isAbs3 = path.isAbsolute('c:\\abc\\abc.txt');

console.log('isAbs1:', isAbs1);
console.log('isAbs2:', isAbs2);
// if linux, isAbs3 is false
console.log('isAbs3:', isAbs3);

let join = path.join('aaa', 'bbb', 'ccc.txt');
console.log(join);

let normalize = path.normalize('c:\\aaa\\...\\bbb\\ccc.txt');
console.log('normalize:', normalize);
