/*
- 지정된 도메인의 dns 정보를 알아올 수 있는 모듈이다.
- 지정된 도메인의 ip 주소 등의 정보를 파악할 수 있다.
- https://nodejs.org/dist/latest-v6.x/docs/api/dns.html
- lookup: 지정된 도메인의 정보를 가져온다.
 */

const dns = require('dns');

dns.lookup('google.com', function (err, address, family) {
    // address: ip address, family: ipv4 or v6
    console.log("IP address: ", address);
    console.log("IP version: ", family);
});

const op1 = {
    family: 4
};

dns.lookup('google.com', op1, function (err, address, family) {
    console.log("IPv4 address: ", address);
});

const op2 = {
    family: 6
};

dns.lookup('google.com', op2, function (err, address, family) {
    console.log("IPv6 address: ", address);
});
