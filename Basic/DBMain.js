/*
DataBase
- 서버 프로그램 운영시 발생되는 데이터는 반드시 저장되어야 다음에 사용할 수 있다.
- 서버 프로그램 개발시 데이터를 저장할 때 데이터베이스를 많이 이용하는데,
    node.js 프로그램으로 DB를 사용하는 방법에 대해 살펴보자
- 기본 모듈로는 제공되지 않고 외부 모듈을 사용해야 하는데 npmjs.com에서 검색하면 모듈을 찾을 수 있다.
- 여기서는 mysql 데이터베이스를 이용하도록 한다.
 */

const mysql = require("mysql");

// DB 접속을 위해 접속 정보를 가지고 있는 객체를 만들어준다.
const conn_info = {
    host: "localhost", // 접속 주소
    port: 3306,        // default: 3306
    user: "root",      // ID
    password: 1234,    // Password
    database: "TestDB" // DB name
};

// DB에 접속한다.
const conn = mysql.createConnection(conn_info);

/*
Data 저장하기
- mysql 모듈은 insert, update, delete, select 쿼리에 대한 코드가 크게 다르지 않다.
- select는 데이터를 가져오는 쿼리문으로 데이터를 사용하는 부분만 조금 다르다.
 */

conn.connect(function (error) {
    if (error)
        console.log("Connection Error");
    else {
        console.log("Connection Success");

        // Input data
        let sql = "Insert into TestTable (int_data, str_data) value (?, ?)";

        let input_data1 = [100, "String1"];
        let input_data2 = [200, "String2"];
        let input_data3 = [300, "String3"];

        conn.query(sql, input_data1, function (error) {
            console.log("Save 1st data");
        });
        conn.query(sql, input_data2, function (error) {
            console.log("Save 2nd data");
        });
        conn.query(sql, input_data3, function (error) {
            console.log("Save 3rd data");
        });

        // update data
        let sql2 = "update TestTable set str_data=? where int_data=?";
        let update_data = ["String100", 100];
        conn.query(sql2, update_data, function (error) {
            console.log("Update");
        });

        // delete data
        let sql3 = "delete from TestTable where int_data=?";
        let delete_data = [100];
        conn.query(sql3, delete_data, function (error) {
            console.log("Delete");
        });

        // load data
        let sql4 = "select int_data, str_data from TestTable";
        conn.query(sql4, function (error, rows) {
            console.log("int_data:", obj.int_data);
            console.log("str_data:", obj.str_data);
        });

        conn.end();
    }
});
