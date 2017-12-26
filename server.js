import express from 'express'
import login from './module/login'
import bodyParser from 'body-parser'


var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));



app.post('/blog/login',login);

app.listen(8919,()=>{
	console.log('blogserver开启……')
});