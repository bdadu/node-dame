var myPieces = [];
var API = {
  GET: './data/board-short.json'
};

fetch(API.GET)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (response) {
    myPiece = response;
    Dame.display(response);
  });
/// aranjarea pieselor pe tabla

const Dame = {
  display: function (pieces) {
    pieces.forEach(p => {


      document.querySelector(`.p${p.x}-${p.y}`).classList.add(`piece${p.piece}`)/// din json am mers in adancime si am adus proprietatea pieces


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



function initEvents() {
  Dame.addEventListener('click', function (e) {
   /// if (e.target.className === "piece1") {
   
    //  from = e.target;
  alert("ok");
    })
   // else if (from && diagonalMove(from, e.target)) {
     // e.target.className = Dame;
     // from.className = '';
     // from = null;
   // }
  //});
};

    
  


//Raul's cod for piece selection and diagonale move...TO do: to be update

function diagonalMove(from, to) {
  let result = Math.abs(from.dataset.row - to.dataset.row) === 1;
  result = result && to.innerHTML !== pieceCode;
  result = result && to.className.indexOf('brown') > -1;
  return result;
}