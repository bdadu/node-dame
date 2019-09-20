var myPieces = [];
var selectedPiece;
var red;
var API_URL = {
  CREATE: '/users',
  READ: '/users',
};

var API_METHOD = {
  READ: 'GET',
  CREATE: 'POST'
};

if (location.host === "mraulb.github.io") {
  API_URL.READ = 'data/board-short.json';
  API_METHOD.READ = 'GET';
  API_METHOD.CREATE = 'POST';
};

/// aranjarea pieselor pe tabla

const Dame = {
  load: () => {
    fetch(API_URL.READ)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (response) {
        var rawPieces = response[0].piese;
        var pieces = typeof rawPieces === 'object' ? rawPieces : JSON.parse(rawPieces);
        myPieces = pieces;
        Dame.display(pieces);

      })
      .catch(e => {
        console.log(e);
      });
  },
  display: function (pieces) {
    paintEmptyTable();
    pieces.forEach(p => {
      var square = document.querySelector(`.p${p.x}-${p.y}`);
      //square.classList.add(`piece${p.piece}`)/// din json am mers in adancime si am adus proprietatea pieces
      square.innerHTML = `<div data-color="${p.piece}" class="piece piece${p.piece}"></div>`

    });
  }
}

Dame.load();

// creearea tablei de joc

const paintEmptyTable = () => {
  $("#board").html('');
  for (var i = 1; i <= 8; i++) {
    divRow = $("<div>", {
      class: "row",
    });
    for (var j = 1; j <= 8; j++) {
      var div = $(`<div data-x="${i}" data-y="${j}" class="square p${i}-${j}">`);

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

function clickedOnSquare(x, y) {

  // logica pt a verifica patratul ales sa facem mutarea se incadreaza in mutari permise (suma x+y a mutarilor nepermise este nr par)
  if ((x + y) % 2 === 0) {
    console.log('invalid move', x, y, x + y);
    return;
  }
  var piece = findPiece(x, y);

  console.log('selectedPiece', x, y, piece)

  if (piece) {
    selectedPiece = piece;

    return;
  }
  if (selectedPiece) {
    //move
    tryToMoveRed(selectedPiece, x, y);

  } if (selectedPiece) {

    tryToMoveBlue(selectedPiece, x, y);
  }
}

// logica pt a gasi o piesa si afisarea coordonatelor ei
function findPiece(x, y) {
  return myPieces.find(function (p) {
    return p.x == x && p.y == y;
  });
}

//regula pt a muta piese rosii
function tryToMoveRed(piece, x, y) {
  console.info('moved', piece, 'to', x, y);

  // regula pt mutare pe diagonala player 1 (red) cand  NU captureaza piesa adversarului
  if (piece.piece == 1) {
    if (piece.x + 1 == x && (piece.y - 1 == y || piece.y + 1 == y)) {
      movePiece1(piece, x, y);
    }
    //regula pt mutare cand player 1 (red) captureaza piesa adversarului
    else if (piece.x + 2 == x) {

      var opozitePiece = findPiece(x - 1, y - (y - piece.y) / 2);
      if (opozitePiece && opozitePiece.piece != piece.piece) {
        removePiece(opozitePiece);
        movePiece1(piece, x, y);
      }
    }
    // piesa obisnuita devine king (UK ) sau Dama (RS)
    if (piece.piece == 1 && (piece.x + 1== 8 || piece.x + 2 == 8)) {
      piece.piece = 3;
    }

  } else if (piece.piece == 3) {
    // regula pt mutare pe diagonala player 1 (Red) piesa King cand Nu  captureaza piesa adversarului

    if ((piece.x + 1 == x || piece.x - 1 == x) && (piece.y - 1 == y || piece.y + 1 == y)) {

      movePiece1(piece, x, y);
    }

    // regula pt mutare pe diagonala player 1 (red) piesa King cand captureaza piesa adversarului
    else if (piece.x + 2 == x) {

      var opozitePiece = findPiece(x - 1, y - (y - piece.y) / 2);
      if (opozitePiece && (opozitePiece.piece != 1 && opozitePiece.piece != piece.piece)) {
        removePiece(opozitePiece);
        movePiece1(piece, x, y);

      }
    } else if (piece.x - 2 == x) {
      var opozitePiece = findPiece(x + 1, y - (y - piece.y) / 2);
      if (opozitePiece && (opozitePiece.piece != 1 && opozitePiece.piece != piece.piece)) {
        removePiece(opozitePiece);
        movePiece1(piece, x, y);
      }
    }
 
  } 
  winer();
}
  
// regula pentru mutare piese albastre
function tryToMoveBlue(piece, x, y) {
  // regula pt mutare pe diagonala player 2 (blue) cand  NU captureaza piesa adversarului
  if (piece.piece == 2) {
    if (piece.x - 1 == x && (piece.y - 1 == y || piece.y + 1 == y)) {

      movePiece2(piece, x, y);

      // regula pt mutare pe diagonala player 2 (blue) cand  captureaza piesa adversarului
    } else if (piece.x - 2 == x) {
      var opozitePiece = findPiece(x + 1, y - (y - piece.y) / 2);
      if (opozitePiece && opozitePiece.piece != piece.piece) {
        removePiece(opozitePiece);
        movePiece2(piece, x, y);
      }

    }
    // regula cand piesa player 2 (blue) devine king
    if (piece.piece == 2 && piece.x - 1 == 1 || piece.x -2  == 1) {
      piece.piece = 4;

    }
    // logica jocului cand piesa devine king (blue) (UK version not US)

  } else if (piece.piece == 4) {

    // regula pt mutare pe diagonala player 2 (blue) piesa King cand Nu  captureaza piesa adversarului
    if ((piece.x - 1 == x || piece.x + 1 == x) && (piece.y - 1 == y || piece.y + 1 == y)) {
      movePiece2(piece, x, y);

      // regula pt mutare pe diagonala player 2 (blue) piesa King cand   captureaza piesa adversarului
    } else if (piece.x - 2 == x) {
      var opozitePiece = findPiece(x + 1, y - (y - piece.y) / 2);
      if (opozitePiece && (opozitePiece.piece != 2 && opozitePiece.piece != piece.piece)) {
        removePiece(opozitePiece);
        movePiece2(piece, x, y);
      }
    } else if (piece.x + 2 == x) {
      var opozitePiece = findPiece(x - 1, y - (y - piece.y) / 2);
      if (opozitePiece && (opozitePiece.piece != 2 && opozitePiece.piece != piece.piece)) {
        removePiece(opozitePiece);
        movePiece2(piece, x, y);
      }
    } winer();

  }
}

// logica pt a verifica cine castiga

function winer() {
  var red = myPieces.filter(piece => piece.piece == 1 || piece.piece == 3);
  var blue = myPieces.filter(piece => piece.piece == 2 || piece.piece == 4);
  if (blue.length == 10) {
    window.alert("Red win")
  } else if (red.length == 10) {
    window.alert("Blue win")
  }
}

// functia pt a captura piesa adversarului
function removePiece(piece) {
  console.info('Capturam piesa', piece);
  myPieces = myPieces.filter(p => p !== piece);
}

// functia miscare piesa rosie
function movePiece1(piece, x, y) {
  piece.x = x;
  piece.y = y;
  Dame.display(myPieces);
  selectedPiece = undefined;

}

//functie miscare piesa albastra
function movePiece2(piece, x, y) {
  piece.x = x;
  piece.y = y;
  Dame.display(myPieces);
  selectedPiece = undefined;
}

// logica pt a face click
document.querySelector('#board').addEventListener('click', function (e) {
  var square = e.target;
  if (e.target.className.indexOf('piece') > -1) {
    square = e.target.parentNode; ///am verificat daca parintele lui e.target ii square
  }
  const x = square.getAttribute('data-x') * 1;
  const y = square.getAttribute('data-y') * 1;

  clickedOnSquare(x, y);
  return;

})

