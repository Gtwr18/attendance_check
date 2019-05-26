const http = require("http");
const fs = require("fs");
const url = require('url');
const qs = require('querystring');
const mysql = require('mysql');
const date_format = require('date-format');
const calender = require("./calender.js");
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1q2w3e4r',
    database : 'checkboard'
  });
const template = `
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="/checkboard.css">
</head>
<body id="submitBox">
<h1>checkboard</h1>
    <form action = "/checked_process" id = "dataBox" method = "post">
        <p id="id">
        <input type="radio" name="name" value="이상우">이상우
        <input type="radio" name="name" value="박준용">박준용
        <input type="radio" name="name" value="신찬영">신찬영
        </p>
        <p id="pt">
        <span>Physical Training</span>
        <br>
        <input type="radio" name="PT" value='TRUE'>함
        <input type="radio" name="PT" value='FALSE'>제낌<br>
        </p>
        <input type="submit">
    </form>
    <a id = "calenderLink" href="/calender">calender</a>
</body>
</html>
`
var app = http.createServer(function(request,response){
    
    if(request.url == '/'){//홈페이지
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(template);
    }else if(request.url == '/checkboard.css'){//css파일이 html link로부터 요청되면 하드디스크에서 찾아서 response
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + "/css/checkboard.css"));
    }else if(request.url == '/checked_process'){ //제출하면 데이터받고 처리하는 프로세스
        var body = '';
        request.on('data',function(data){
            body += data;
        });//페이지에서 받아온 정보 받기
        request.on('end', function(){
            let time = new Date();//mysql datetime 형식으로 변환
            db.connect();
            db.query(`INSERT INTO userinfo (name, hour, min, sec, year, mon, date, day, pt) VALUES ("${qs.parse(body).name}","${time.getHours()}",
            "${time.getMinutes()}","${time.getSeconds()}",
            "${time.getFullYear()}","${time.getMonth()}","${time.getDate()}",
            "${time.getDay()}", ${qs.parse(body).PT})`);
            response.writeHead(302,{Location : '/calender'});
            response.end();
            
        });
    }
    // else if(request.url === "/checked"){
    //     // let today = new Date();
    //     // fs.readFile(`./calenderHtml/${today.getMonth()+1}.html`,function(err, data){
    //     //     if(err){
    //     //         let dateArr = calender.getDateArr(today);
    //     //         let thisMonthCalender = calender.makeCalender(today.getFullYear(),today.getMonth()+1,dateArr);
    //     //         fs.writeFileSync(`./calenderHtml/${today.getMonth()+1}.html`,thisMonthCalender);
    //     //         response.writeHead(302,{Location : "/calender"});
    //     //         response.end();
    //     //     }else{
    //     //         response.writeHead(302,{Location : "/calender"});
    //     //         response.end();
    //     //     }
    //     // });
    // }
    else if(request.url === "/calender"){
        let today = new Date();
        db.query(`SELECT * FROM userinfo where year='${today.getFullYear()}' and mon = '${today.getMonth()}';`,function(err, data){
            if(err) throw err;
            console.log(data[1].name);//callback 이아닌 밖에서 리턴값 호출시 이상한 데이터가 담기는이유가뭘까
        });
        let dateArr = calender.getDateArr(today);
        let thisMonthCalender = calender.makeCalender(today.getFullYear(),today.getMonth()+1,dateArr);
        response.writeHead(200);
        response.end(thisMonthCalender);
    }else if(request.url ==="/css/calender.css"){
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + "/css/calender.css"));
    }
    
    });
app.listen(3000);
