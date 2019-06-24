let board = document.getElementsByClassName("dame")[0];
let pieceCode = '\u2B24';

Array.from(board.children).forEach(function(cell) {
  cell.onclick = function(elem) { 
    if (elem.target.innerHTML === pieceCode) {
        from = elem.target;
   } else if (from && diagonalMove(from, elem.target)) {
        elem.target.innerHTML = pieceCode;
        from.innerHTML = '';
        from = null;
    }
  }
});

function diagonalMove(from, to) {
  let result = Math.abs(from.dataset.row - to.dataset.row) === 1;
  result = result && to.innerHTML !== pieceCode;
  result = result && to.className.indexOf('brown') > -1;
  return result;
}