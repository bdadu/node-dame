var myPieces = [];
var movablePiece = null;

var API_URL = {
  CREATE: '...',
  //READ: 'users', //API.GET
  READ: './data/board-short.json'
};
var API_METHOD = {
  CREATE: 'POST',
  READ: 'GET',

};

fetch(API_URL.READ)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (response) {
    myPieces = response;
    Dame.display(response);
  });
/// aranjarea pieselor pe tabla

const Dame = {
  display: function (response) {
    var pieces = JSON.parse(response[0].piese);
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

  console.info('pozitie', x, y);

  var selectPiece = myPieces.find(function (p) {
    return p.x == x && p.y == y;
  });
  
  //cell has piece
  if (selectPiece != undefined) {
    movablePiece = selectPiece;
  } else if (movablePiece) { //cell is empty
    console.info('target', square, movablePiece);
    //move piece to square
    square.innerHTML = `<div class="piece piece${movablePiece.piece}"></div>`;

    //remove piece from old position
    document.querySelector(`.p${movablePiece.x}-${movablePiece.y}`).innerHTML = '';

    //reset global after move
    movablePiece = null;

    //push new ocupied position to json
    myPieces.push({x: x, y: y,})
  }


  console.warn('Piesa-Player', movablePiece);
})

//Json.parse -converteste un string in obiect array


