/*
- node.js에서 제공하는 기본 모듈만으로는 개발하기에 충분하지가 않다.
- node.js는 오픈 소스 플랫폼으로 소스가 공개되어 있어 전 세계 개발자들이 다양하게 모듈을 만들 수 있게 되어있다.
- 이를 통해 수많은 외부 모듈이 제작되고 있으며 이 때문에 node.js 프로그래밍은 좀 더 쉽게 강력해지고 있다.
- node.js에서 외부모듈은 다음과 같은 명령어로 설치해서 사용한다.
    npm install <module name>
- 모듈은 http://www.npmjs.com에서 검색한다.
 */

const ArrayList = require('arraylist');

let list = new ArrayList;

list.add(100);
list.add(200);

const a1 = list.get(0);
const a2 = list.get(1);

console.log("a1:", a1);
console.log("a2:", a2);
