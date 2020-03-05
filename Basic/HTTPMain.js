/*
- http 모듈은 웹 어플리케이션을 개발할 수 있도록 제공되는 모듈이다.
- 일반적인 웹서버와 동일하게 동작한다.
- http 모듈을 웹 서버의 기능을 할 수 있는 모듈이다.

- createServer: 웹 서버 객체를 만든다.
- listen: 웹 서버를 동작시킨다.
- 클라이언트가 전달하는 파라미터는 url 모듈을 이용하면 코드로 받아낼 수 있다.
 */

const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    // res.write("Hello World!");
    // res.writeHead(200, {"content-type": "audio/mp3"});

    let q = url.parse(req.url, true);

    res.writeHead(200, {"content-type": "text/html"});

    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<meta charset='utf-8'/>");
    res.write("</head>");
    res.write("<body>");

    switch (q.pathname) {
        case '/':
            res.write("<h1>This is ROOT</h1>");
            res.write("<a href='test1?data1=111'>test1</a><br/>");
            res.write("<a href='test2?data2=222'>test2</a><br/>");
            break;
        case '/test1':
            res.write("<h1>Test 1</h1>");
            res.write("<h1>data1: " + q.query.data1 + "<br/>");
            break;
        case '/test2':
            res.write("<h1>Test 2</h1>");
            res.write("<h1>data2: " + q.query.data2 + "<br/>");
            break;
    }

    res.write("</body>");
    res.write("</html>");

    res.end();
});

server.listen(1234);
console.log("Server On");
