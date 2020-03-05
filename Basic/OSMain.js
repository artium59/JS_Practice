/*
- node.js 프로그램이 실행되고 있는 서버 컴퓨터와 관련된 정보를 제공한다.

- arch: CPU 아키텍처 정보를 반환한다.
- cpus: 컴퓨터의 CPU 정보를 반환한다.
- totalmem: 총 메모리 양을 반환한다.
- freemem: 여유 메모리 양을 반환한다.
- hostname: 컴퓨터의 호스트 이름을 반환한다.
- networkInterfaces: 컴퓨터에 장착된 통신 장비들의 번호를 반환한다.
- platform : 실행 플랫폼의 정보를 반환한다.
- release: 버젼 정보를 반환한다.
- tmpdir: 컴퓨터의 임시 폴더 경로를 반환한다.
- type: OS 이름을 반환한다.
- uptime: OS 동작 시간을 반환한다.
- userinfo: 사용자 정보를 반환한다.
 */

const os = require('os');

console.log("CPU architecure:", os.arch());

console.log("---------- CPU infos ----------");
console.log(os.cpus());

console.log("Total memory:", os.totalmem());

console.log("Free memory:", os.freemem());

console.log("Host name:", os.hostname());

console.log("---------- Network Interfaces ----------");
console.log(os.networkInterfaces());

console.log("Platform:", os.platform());

console.log("Version:", os.release());

console.log("Temperary folder:", os.tmpdir());

console.log("OS name:", os.type());

console.log("OS time:", os.uptime(), "secs");

console.log("---------- User infos ----------");
console.log(os.userInfo());
