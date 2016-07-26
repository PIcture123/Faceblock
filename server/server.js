var http = require('http'), app = require('express')();
app.get('/',function (req,res){
  res.sendfile(__dirname+"/index.html");
});
app.get('/index.html',function (req,res){
  res.sendfile(__dirname+"/index.html");
});
app.get('/raiting.js',function (req,res){
  res.sendfile(__dirname+'/raiting.js');
});
http.createServer(app).listen(1212);
