var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
router.post('/add', function (req, res, next) {
  var x = req.body.x;
  var y = req.body.y;
  var piece = req.body.piece;
  console.warn('add', x, y, piece);
  var piece = require('../public/data/board-short.json');

   const id=new Date().getTime()
  myPieces.push({
    x,
    y,
    piece
    
  });




  var str = JSON.stringify(persons, null, 2);
  fs.writeFileSync('./public/data/persons.json', str);// se sterge in fiser ce a fost si se salveaza noile date


  res.json({
    success: true,
    id,
    message: 'DONE'
  });
});