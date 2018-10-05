var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require("body-parser");//中间件
//解决跨域

app.use(bodyParser.urlencoded())
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blog'
});
connection.connect(function(error){
    if(error){
        console.log('[query]-:'+error);
        return;
    }
    console.log('[connection connect] succeed!')
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/nav',function(req,res){
    console.log("nav连接已经打开");
    connection.query('SELECT * FROM blog_category where status=1', function (error, results, fields) {
        if (error) throw error;
        // console.log('the solution is: ',results);
        res.json(results);
        console.log("回调nav数据库信息")
      });
    
});
app.post('/login',function(req,res){
    // console.log(res);
    console.log("登录验证");
    // console.log(req);
    connection.query('select user_id,name,role from blog_user where user_id="' + req.body.username + '" and password="' + req.body.password+'"', function (err, rows) {
        console.log(rows);
        if (err || rows.length == 0) {
          console.log(err)
          res.json({code: 0})
        }else {
          res.json({code: 1,rows})
        }
      });
});
app.get('/category',function(req,res){
    connection.query('SELECT id,title,content,create_time FROM blog_article_detail where status=1', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});
app.get('/saidto',function(req,res){
    connection.query('SELECT id,user_id,content FROM blog_said where status=1', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});
app.post('/inser',function(req,res){
    console.log("新增用户");
    var post = {user_id:req.body.username,password:req.body.password,role:req.body.role};
    connection.query('INSERT INTO blog_user SET ?',post, function (error, results, fields) {
    if (error){
        console.log(error);
        res.json({code:0})
    }else{
        res.json({code:1})
    }
    });
});
app.post('/sign',function(req,res){
    console.log("注册用户");
    var post = {user_id:req.body.username,password:req.body.password,role:"游客"};
    connection.query('INSERT INTO blog_user SET ?',post, function (error, results, fields) {
    if (error){
        console.log(error);
        res.json({code:0})
    }else{
        res.json({code:1})
    }
    });
});
app.post('/said',function(req,res){
    console.log("新增留言");
    var post = {user_id:req.body.user_id,content:req.body.content};
    connection.query('INSERT INTO blog_said SET ?',post, function (error, results, fields) {
    if (error){
        console.log(error);
        res.json({code:0})
    }else{
        res.json({code:1})
    }
    });
});
app.get('/users',function(req,res){
    connection.query("SELECT user_id,password,role FROM blog_user where status=1", function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});
// app.post('/getList',function(req,res){
//  	console.log("执行取数据");
//     //返回的json对象
//     var obj = {
//         list: [
//             {name: '苹果'},
//             {name: '香蕉'},
//             {name: '梨子'}
//         ]
//     };
//     res.json(obj);
// });
// add();
// function add(){
//     var post = {user_id:123,name:1,password:54,login_last_time:123,user_img:55,status:1};
//     var quer = connection.query('INSERT INTO blog_user SET ?',post, function (error, results, fields) {
//       if (error) throw error;
//     });
//     console.log(quer.sql);
// }
// select();
// function select(){
//     connection.query('SELECT user_id FROM blog_user where id=2', function (error, results, fields) {
//       if (error) throw error;
//       console.log('the solution is: ',results);
//     });
// }
// update();
// function update(){
//     connection.query('UPDATE blog_user SET name=? where id=?',['update',1], function (error, results, fields) {
//       if (error) throw error;
//       console.log('changed ',results.changedRows+ 'rows');
//     });
// }
// deletes();
// function deletes(){
//      connection.query('DELETE FROM blog_user WHERE id = ?',[1], function (error, results, fields) {
//       if (error) throw error;
//       console.log("请去数据库查看是否删除成功");
//     });
// } //SELECT * FROM blog_user AS u,blog_article_detail AS d WHERE u.id = d.id
//启动服务，监听一个端口，不要和页面的端口
console.log('启动服务器成功');
app.listen(3030);
