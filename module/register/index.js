import mysql from '../mysql'

var register = {
	checkUserName:checkUserNameFuc,
	save:saveFuc
}

function checkUserNameFuc(req,res){
	console.log('checkUserName……')

	if(!req.body.userName){
		console.log('缺少参数');
		res.send('缺少参数');
		return;
	}

	let postUserName = req.body.userName;
	let sql = 'SELECT * FROM usertable WHERE name ='+postUserName;
	mysql.query(sql,(err, data)=>{
		if(err){
			console.log('数据库错误');
			res.send('数据库错误');
		}else{
			if(data.length !== 0){
				console.log('该用户名已存在！');
				res.send('该用户名已存在！');
			}else{
				res.send({
					msg:'该用户名可用',
					data:1
				})
			}
		}
	});
};


function saveFuc(req,res){
	console.log('register……')

	if(!(req.body.userName && req.body.passWord && req.body.blogName)){
		console.log('缺少参数');
		res.send('缺少参数');
		return;
	}

	let postUserName = "'"+req.body.userName+"'";
	let postPassWord = "'"+req.body.passWord+"'";
	let blogName = "'"+req.body.blogName+"'";
	let sql = 'SELECT * FROM usertable WHERE name ='+postUserName;
	mysql.query(sql,(err, data)=>{
		if(err){
			console.log('数据库错误');
			res.send('数据库错误');
		}else{
			if(data.length !== 0){
				console.log('该用户名已存在！');
				res.send('该用户名已存在！');
			}else{
				let sql = 'INSERT INTO usertable (name,password,blogname) VALUES ('+postUserName+','+postPassWord+','+blogName+')';
				mysql.query(sql,(err,data)=>{
					if(err){
						console.log('数据库错误');
						console.log(sql)
						res.send('数据库错误');
					}else{
						console.log('注册成功！');
						res.send({
							msg:'注册成功！',
							data:1
						});
					}
				})
				
			}
		}
	});
}

module.exports = register;