var myPieces = [];
var API = {
  GET: './data/board-short.json'
};

fetch(API.GET)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (response) {
    myPieces = response;
    Dame.display(response);
  });
/// aranjarea pieselor pe tabla

const Dame = {
  display: function (pieces) {
    pieces.forEach(p => {
      var square = document.querySelector(`.p${p.x}-${p.y}`);
      //square.classList.add(`piece${p.piece}`)/// din json am mers in adancime si am adus proprietatea pieces
      square.innerHTML = `<div class="piece piece${p.piece}"></div>`
 
    });
  }
 }


paintEmptyTable = () => {
  for (var i = 1; i <= 8; i++) {
    divRow = $("<div>", {
      class: "row",
    });
    for (var j = 1; j <= 8; j++) {
      var div = $(`<div class="square p${i}-${j}">`);

      if (i % 2 == j % 2) {
        $(div).addClass("white");
      } else {
        $(div).addClass("black");
      }
      divRow.append(div);
    }
    $("#board").append(divRow);

  }

}
paintEmptyTable();

//document.querySelector('#board')=$("#board")..sunt acelasi lucru

document.querySelector('#board').addEventListener('click', function (e) {
  var square = e.target;
  if (e.target.className.indexOf('piece') > -1) {
    square = e.target.parentNode; ///am verificat daca parintele lui e.target ii square
  }
  var classList = square.getAttribute('class');
  var x = classList.split(' ')[1].substring(1).split('-')[0];
  var y = classList.split(' ')[1].substring(1).split('-')[1];

  var selectPiece = myPieces.find(function (p) {
    if (p.x == x && p.y == y) {
    return true;
    } else {
    return false;
     }
    
  });
  console.warn('ok', selectPiece);
})



  
  