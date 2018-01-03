import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import login from './module/login'
import register from './module/register'
import aritcle from './module/aritcle'


var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


// 登录接口
app.post('/blog/login',login);

// 注册接口
app.post('/blog/register/save',register.save);

// 验证用户名是否已存在接口
app.post('/blog/register/checkUserName',register.checkUserName);

// 文章保存接口
app.post('/blog/article/save',aritcle.save);

// 文章获取接口
app.get('/blog/article/save',aritcle.get);

// 文章获取接口
app.get('/blog/article/delete',aritcle.dele);

app.listen(8919,()=>{
	console.log('blogserver开启……')
});