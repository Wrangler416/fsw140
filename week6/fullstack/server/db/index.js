const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "password",
    user: "root",
    database: "fullstack",
    host: "localhost",
    port: "3306"
});

let fullstackdb = {};

fullstackdb.all = () => {
 return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM nile", (err, results) => {
        if(err){
            return reject(err)
        }
        return resolve(results)
    })
 })
}

module.exports = fullstackdb; 











