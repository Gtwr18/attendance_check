const http = require("http");
const fs = require("fs");
const url = require('url');
const qs = require('querystring');
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
        <p id="checktime">출근시간 : <input type="time" name="time"></p>
        <br>
        <p id="pt">
        <span>Physical Training</span>
        <br>
        <input type="radio" name="PT" value="true">함
        <input type="radio" name="PT" value="false">제낌<br>
        </p>
        <input type="submit">
    </form>
</body>
</html>
`
var app = http.createServer(function(request,response){
    
    if(request.url == '/'){//홈페이지
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(template);
    }else if(request.url == '/checkboard.css'){//css파일이 html link로부터 요청되면 하드디스크에서 찾아서 response
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + "/checkboard.css"));
    }else if(request.url == '/checked_process'){ //제출하면 데이터받고 처리하는 프로세스
        var body = '';
        request.on('data',function(data){
            body += data;
        });//페이지에서 받아온 정보 받기
        request.on('end', function(){
            var attendanceData = qs.parse(body);//데이터 짜르고
            var name = attendanceData.name;//각각의 변수에 담기
            var time = attendanceData.time;
            var PT = attendanceData.PT;

            /*var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`../syntax/data/${id}`, `../syntax/data/${title}`, function(err){
                fs.writeFile(`../syntax/data/${title}`, description, 'utf8', function(err){
                    response.writeHead(302, {Location: `/?id=${title}`});
                    response.end();
                })
            });
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();*/
        });
    }
    
    });
app.listen(3000);
