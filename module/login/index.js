import mysql from '../mysql'

module.exports = (req,res)=>{
	console.log('访问login……')

	let postUserName = req.body.userName;
	let postPassWord = req.body.passWord;

	let sql = 'SELECT * FROM usertable WHERE name ='+postUserName;

	mysql.query(sql,(err, data)=>{
		if(err){
			console.log('数据库错误');
			res.send('数据库错误');
		}else{
			if(data.length == 0){
				console.log('用户名错误');
				res.send('用户名错误');
			}else{
				if(data[0].password == postPassWord){
					console.log('登录成功');
					res.send('登录成功');
				}else{
					console.log('密码错误');
					res.send('密码错误');
				}
			}
		}
	});
}