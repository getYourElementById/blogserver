import mysql from '../mysql'

module.exports = (req,res)=>{
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


