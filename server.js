import express from 'express'
import bodyParser from 'body-parser'

import login from './module/login'
import aritcle from './module/aritcle'


var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));



app.post('/blog/login',login);
app.post('/blog/aritcle/save',aritcle);

app.listen(8919,()=>{
	console.log('blogserver开启……')
});