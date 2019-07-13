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
<<<<<<< HEAD
    const sql = `SELECT * FROM  pices`;
=======
    const sql = `SELECT * FROM  pozitii piese`;
>>>>>>> 2a7c24a447505b980d87ea53965878a0d5d4cb08
    connection.query(sql, (err, results) => {
      res.json(results);
    });
  });
});

module.exports = router;
