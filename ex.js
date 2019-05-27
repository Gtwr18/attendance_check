// let a = new Array;
// a[1]={id:1};
// a[1].location = a[1].id+2;
// console.log(a[1]); array 내에서 object 선언하기    a[1].id = 1; 하면 오류남

const mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1q2w3e4r',
    database : 'checkboard'
  });
if(db.query(`select * from userinfo where name ='신찬영' and year = '2019' and 
mon = '4' and date = '25'`)){
    console.log('good');
}else{
    console.log('nothing');
}//데이터만 써놓으면 된다.