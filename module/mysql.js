import mysql from 'mysql'

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mydatabase'
});
  
var sqlObj = {
	connection:connection.connect(),
	query:function(query,cd){
		connection.query(query, cd);
	},
	end:connection.end()
}

module.exports = sqlObj;