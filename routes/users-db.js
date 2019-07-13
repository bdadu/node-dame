var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dame'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.getConnection((err, connection) => {
    const sql = `SELECT * FROM  piece`;
    connection.query(sql, (err, results) => {
      res.json(results);
    });
  });
});

module.exports = router;
