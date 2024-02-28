const mysql=require('mysql2');

const pool = mysql.createPool({
user: process.env.USER,
database: process.env.DATABASE,
host: "localhost",
password: process.env.PASSWORD,
connectionLimit: 10
})
// pool.execute("select 'test' ", (err, result) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(result);
//     }
// })
module.exports = pool.promise();