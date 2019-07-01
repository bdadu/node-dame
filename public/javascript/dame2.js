var myPieces=[];
var API = {
  GET: './data/board-short.json'
};

fetch(API.GET)
 .then(function (resp) {
   return resp.json();
 })
 .then(function (piece) {

   myPiece=piece;
   Dame.display(piece);
 });

 const Dame= {
   display:function (pieces){
     for( var i=1; i<)
    document.querySelector(".pi-3").classList.add("piece2")
    document.querySelector(".p2-3").classList.add("piece1")
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



