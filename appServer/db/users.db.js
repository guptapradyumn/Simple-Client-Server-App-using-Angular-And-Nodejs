const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    host: 'localhost',
    port: '3306',
    database: 'friendsbook'
});
let db = [];

db.DBquery = (query) =>{
    return new Promise((resolve,reject)=>{
        conn.query(query,(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    });
}


module.exports = db;