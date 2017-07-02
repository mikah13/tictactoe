$(document).ready(function() {
  var WIN = {
    1: [0, 1, 2],
    2: [0, 4, 8],
    3: [0, 3, 6],
    4: [2, 5, 8],
    5: [6, 7, 8],
    6: [1, 4, 7],
    7: [3, 4, 5],
    8: [0, 3, 6],
    9: [2, 5, 8]
  }

  var gameWin = false;

  var player1 = {
    sign: "X",
    array: [],
    turn: true
  }
  var player2 = {
    sign: "O",
    array: []
  }

  function p1Move(a) {
    a.html("X");
    a.addClass("red unclickable")
  }

  function p2Move(a) {
    a.html("O");
    a.addClass("blue unclickable")
  }

  $(".square").on("click", function() {
    if (player1.turn == true) {
      $(this).css("color", "#f00");
      p1Move($(this));
      $(".blue").addClass("unclickable")
      player1.array.push($(this).attr("id"));
      player1.turn = false;
      for (var props in WIN) {
        check(WIN[props], player1.array);
      }
      if (gameWin === true) {
        $("#message").html("Player 1 Win");
        reset()
      } else if (player1.array.length === 5 && gameWin !== true) {
        $("#message").html("DRAW!!");
        reset();
      }
    } else {
      $(this).css("color", "#123fea");
      p2Move($(this));
      $(".red").addClass("unclickable")
      player2.array.push($(this).attr("id"));
      player1.turn = true;
      for (var prop in WIN) {
        check(WIN[prop], player2.array);
      }
      if (gameWin === true) {
        $("#message").html("Player 2 Win");
        reset();
      }
    }
  })

  function reset() {
    setTimeout(function() {
      $(".square").addClass("unclickable")
      newGame();
    }, 1500)
  }

  function check(win, player) {
    if (player.indexOf(String(win[0])) != -1 && player.indexOf(String(win[1])) != -1 && player.indexOf(String(win[2])) != -1) {
      gameWin = true;
    }
  }

  function newGame() {
    gameWin = false;
    player1.array = [];
    player2.array = [];
    player1.turn = true;
    $(".square").removeClass("unclickable").removeClass("red").removeClass("blue");
    $(".square").empty();
    $("#message").html("");
  }
  $("#new-game").on("click", function(a) {
    a.preventDefault();
    newGame();
  });

});
