import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import login from './module/login'
import aritcle from './module/aritcle'


var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());



app.post('/blog/login',login);
app.post('/blog/article/save',aritcle.save);
app.get('/blog/article/save',aritcle.get);

app.listen(8919,()=>{
	console.log('blogserver开启……')
});