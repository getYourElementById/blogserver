// import mysql from '../mysql'
import mysql from 'mysql'

var  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mydatabase'
});
console.log(mysql)
  
// var sqlObj = {
// 	connection:connection.connect(),
// 	query:function(query,cd){
// 		connection.query(query, cd);
// 	},
// 	end:connection.end()
// }


module.exports = function(req,res){
	console.log('访问login……');

	let query = 'SELECTED * FROM usertable'
	connection.connection();
	connection.query(query,(error,res,file)=>{
		if (error){
			console.log('[SELECT ERROR] - ',err.message);
            return;
		}
		console.log(res)
	});
	connection.end();

	res.send('登录成功！')
}