var mysql = require('mysql');
console.log('Get connection ...');

var conn = mysql.createConnection({
  database: 'defaultdb',
  host: "mysql-1ae6b180-antou98-d35e.aivencloud.com",
  user: "user-formatif",
  password: "AVNS_HOMMmMbEe4mV3SMTm_n",
  port : "20509"
});
//ALTER USER 'avnadmin:AVNS_bEHYz9ilE-mdt57XyrY'@'mysql-1ae6b180-antou98-d35e.aivencloud.com' IDENTIFIED WITH 'AVNS_bEHYz9ilE-mdt57XyrY' BY '12345';

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sqlQ = "select * from defaultdb.cars";
    conn.query(sqlQ,(err, rows, fields)=>{
        for(var i = 0;i<rows.lenght;i++){
            console.log(rows[i].id +"   " + rows[i].marque + "   "+rows[i].typeDeChar);
        }
    })
});