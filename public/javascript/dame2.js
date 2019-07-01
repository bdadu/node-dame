var myPieces=[];
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

 const Dame= {
   display:function (pieces){
     pieces.forEach(p => {

      if(p.piece === 1) {
        document.querySelector(`.p${p.x}-${p.y}`).classList.add("piece1")
      } else {
        document.querySelector(`.p${p.x}-${p.y}`).classList.add("piece2")
      }
     });
   }
 }
   

paintEmptyTable = () => {
  for (var i = 1; i <= 8; i++) {
    var divRow = $("<div>", {
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

//Raul's cod for piece selection and diagonale move...to be update



