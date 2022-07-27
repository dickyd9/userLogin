const db = require("./connect_db");

const sql = `CREATE TABLE users 
    (
        id int NOT NULL AUTO_INCREMENT,
        username VARCHAR(11), 
        password VARCHAR(11),
        role VARCHAR(11),
        PRIMARY KEY (id)
    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});