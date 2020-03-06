/*
- express 모듈은 웹 어플리케이션을 개발할 때 가장 많이 사용되고 있는 외부 모듈이다.
- express 모듈은 http 모듈에 비해 많은 기능을 갖추고 있어 보다 손쉽게 웹 어플리케이션을 개발할 수 있게 된다.
- express 모듈은 jade, ejs 등과 같은 동적 웹 페이지 파일을 지원하고 있어 보다 손쉽게 어플리케이션 개발이 가능하다.
 */

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: "abcdefg",
    resave: false,
    saveUninitialized: true
}));

let server = app.listen(2000, function () {
    console.log("Server On");
});

/*
라우팅
- 사용자 요청에 따라 응답 결과를 달리 전달하는 것
- 웹 개발시 이런 작업을 굉장히 많이 하게 되는데 하나의 파일에 다 작성을 하면 유지보수시 어려울 수 있다.
- js파일을 만들어 작성하면 파일을 분리할 수 있어 관리하기가 용이해진다.
 */

const controller1 = require('./controller1')(app);
const controller2 = require('./controller2')(app);

/*
app.get("/", function (req, res) {
    res.send("ROOT");
});

app.get("/test", function (req, res) {
    res.send("TEST");
});

app.get("/test2", function (req, res) {
    res.send("TEST2");
});

app.get("/test3", function (req, res) {
    res.send("TEST3");
});
*/

/*
html 랜더링
- 앞서 살펴본 예제에서는 클라이언트의 요청이 있을 때, res.send 함수를 이용해 응답 결과를 전달하였다.
- 만약 res.send 함수를 통해 html 코드 전체를 전달한 후 다음과 같은 코드가 될 것이다.
 */

/*
ejs 모듈 사용하기
- ejs 모듈을 사용하기 위해 모듈 객체를 생성한다.
- 다음으로 html 파일을 만들어 놓을 폴더를 지정한다.
- 다음으로 랜더링에 사용할 모듈을 지정한다.
- 다음으로 html일 경우 사용할 ejs 모듈을 지정한다.
 */

const ejs = require('ejs');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.engine("html", ejs.renderFile);

/*
정적 파일 사용하기
- html 문서에서 css, js, image, 동영상, 사운드 등의 파일들을 사용할 때는 정적 파일이 위치하는 폴더를 지정하여 사용할 수 있다
 */

app.use(express.static("public"));

/*
동적 웹 페이지
- express에서 랜더링 모듈을 사용하면 동적 웹 페이지를 만들 수 있다.
- 랜더링 모듈은 jade, ejs 등 다양하게 존재하고 있으며, 여기에서는 ejs 모듈을 사용하도록 한다.
- ejs 모듈은 jsp 코드와 흡사하다.

- 랜더링 엔진을 ejs로 설정한다.
- views 폴더에 필요한 만큼의 ejs 파일을 만들어준다.
 */

/*
요청방식
- 클라이언트가 서버에 요청할 때 get방식과 post방식이 있다.
- get 방식은 서버로 전달할 데이터가 주소창에 모두 나타나며 post는 숨겨져서 전달된다.
- form 태그에서 method를 post로 줄 때를 제외한 나머지 모든 경우는 get 방식에 해당한다.
- express에서 get방식일 경우에는 get, post 방식일 경우에는 post 함수가 호출된다.
*/

/*
파라미터
- 파라미터란 클라이언트가 서버에 요청할 때 전달하는 데이터를 의미한다.
- express에서 파라미터는 request 객체를 통해 파라미터 추출이 가능하다.
- get 방식의 경우 query라는 객체 안에 모두 들어있다.
- post 방식의 경우 bodyParser 모듈을 이용해야 파라미터를 추출할 수 있다.
 */

/*
쿠키
- 쿠키란 클라이언트 측에 저장되는 데이터를 의미한다.
- 클라이언트가 서버에 요청할 때 쿠키 정보를 전부 전달하게 된다. 이를 통해 서버에서 사용자 컴퓨터에 저장된 쿠키 정보를 사용할 수 있게 된다.
- 쿠키는 사용자 컴퓨터에 저장되므로 브라우저를 닫아도 데이터가 유지된다.
- express에서 쿠키를 관리할 때는 cookie-parser 모듈을 사용한다.
 */

/*
세션
- 세션은 서버 메모리에 데이터를 저장하는 방식으로 브라우저 하나당 하나의 공간이 할당된다.
- 브라우저를 닫으면 세션은 삭제된다.
- express에서 세션을 관리할 때 express-session 모듈을 사용한다.
 */
