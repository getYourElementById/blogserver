import express from 'express'
import login from './module/login'




var app = express();
app.use(express.static('public'));

app.post('/blog/login',login);

app.listen(8919,()=>{
	console.log('blogserver开启……')
});