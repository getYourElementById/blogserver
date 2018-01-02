import mysql from '../mysql'

var aritcle = {
	save:saveFuc,
	get:getFuc
}



function saveFuc(req,res){
	let name;
	let theme;
	let title;
	let content;
	let createDate;

	if(req.body){
		let resMsg = req.body;
		name = "'"+resMsg.name+"'";
		theme = "'"+resMsg.theme+"'";
		title = "'"+resMsg.title+"'";
		content = "'"+resMsg.content+"'";
	}else{
		return res.send('参数错误！')
	}
	
	let sql = 'INSERT INTO aritcle (name,theme,title,content,createDate) VALUES ('+name+','+theme+','+title+','+content+',NOW())';

	mysql.query(sql,(err,data)=>{
		if(err){
			console.log('数据库错误');
			console.log(err)
			res.send('数据库错误');
		}else{
			console.log('数据库错误');
			res.send('保存成功！')
		}
	})
}

function getFuc(req,res){
	let name;
	if(req.query){
		let resMsg = req.query;
		name = resMsg.name;
	}else{
		return res.send('参数错误！')
	}
	let sql = "SELECT * FROM aritcle WHERE NAME = "+ name + " order by createDate desc";
	mysql.query(sql,(err,data)=>{
		if(err){
			console.log('数据库错误');
			console.log(err)
			res.send('数据库错误');
		}else{
			console.log('获取成功！');
			res.send({
				msg:'获取成功！',
				data:data
			})
		}
	})
}


module.exports = aritcle;
