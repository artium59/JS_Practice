const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get("/", function (req, res) {
        // res.send("ROOT");
        let date = new Date();
        let render_date = {
            str: "문자열입니다.",
            number: 100,
            date: date
        };

        res.render("index.ejs", render_date);
    });

    app.get("/test", function (req, res) {
        // res.send("TEST");
        res.render("test.ejs");
    });

    app.get("/parameter", function (req, res) {
        let render_data = {
            data1: req.query.data1,
            data2: req.query.data2
        };

        res.render("parameter.ejs", render_data);
    });

    app.post("/parameter", urlEncodedParser, function (req,res) {
        let render_data = {
            data1: req.body.data1,
            data2: req.body.data2
        };

        res.render("parameter.ejs", render_data);
    });

    app.get("/save_cookie", function (req, res) {
        const op = {
            // 1년 저장
            maxAge: 365 * 24 * 60 * 60
        };
        res.cookie("cookie1", "aaaaa", op);
        res.render("save_cookie.ejs");
    });

    app.get("/load_cookie", function (req, res) {
        let render_data = {
            cookie1: req.cookies.cookie1
        };
        res.render("load_cookie.ejs", render_data);
    });

    app.get("/save_session", function (req, res) {
        req.session.data1 = 1000;
        req.session.data2 = "HELLO";

        res.render("save_session.ejs");
    });

    app.get("/load_session", function (req, res) {
        let render_data = {
            data1: req.session.data1,
            data2: req.session.data2
        };

        res.render("load_session.ejs", render_data);
    });
};
