var API = {
  GET: './data/board-short.json'
};

fetch(API.GET)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    $(document).ready(function () {
      for (var i = 1; i <= 8; i++) {
        var divRow = $("<div>", {
          class: "row",
        });
        for (var j = 1; j <= 8; j++) {
          var div = $("<div>", {
            class: "square"
          });

          if (i % 2 == j % 2) {
            $(div).addClass("white");
          } else {
            $(div).addClass("black");
          }
          divRow.append(div);
        }
        $("#board").append(divRow);
      }
    });
  });
