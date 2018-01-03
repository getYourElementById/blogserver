import mysql from 'mysql'

// let connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123456',
//   database : 'mydatabase'
// });

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'blog'
});
  
module.exports = connection;