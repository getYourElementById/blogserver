import mysql from 'mysql'

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mydatabase'
});
  
module.exports = connection;