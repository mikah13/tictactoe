$(document).ready(function() {
    function b(k) {
        k.html("X"), k.addClass("red unclickable")
    }

    function c(k) {
        k.html("O"), k.addClass("blue unclickable")
    }

    function d() {
        setTimeout(function() {
            $(".square").addClass("unclickable"), f()
        }, 1500)
    }

    function e(k, l) {
        -1 != l.indexOf(k[0] + "") && -1 != l.indexOf(k[1] + "") && -1 != l.indexOf(k[2] + "") && (h = !0)
    }

    function f() {
        h = !1, i.array = [], j.array = [], i.turn = !0, $(".square").removeClass("unclickable").removeClass("red").removeClass("blue"), $(".square").empty(), $("#message").html("")
    }
    var g = {
            1: [0, 1, 2],
            2: [0, 4, 8],
            3: [0, 3, 6],
            4: [2, 5, 8],
            5: [6, 7, 8],
            6: [1, 4, 7],
            7: [3, 4, 5],
            8: [0, 3, 6],
            9: [2, 5, 8]
        },
        h = !1,
        i = {
            sign: "X",
            array: [],
            turn: !0
        },
        j = {
            sign: "O",
            array: []
        };


    $(".square").on("click", function() {
        if (!0 == i.turn) {
            for (var k in $(this).css("color", "#f00"), b($(this)), $(".blue").addClass("unclickable"), i.array.push($(this).attr("id")), i.turn = !1, g) e(g[k], i.array);
            !0 == h ? ($("#message").html("Player 1 Win"), d()) : 5 === i.array.length && !0 != h && ($("#message").html("DRAW!!"), d())
        } else {
            for (var l in $(this).css("color", "#123fea"), c($(this)), $(".red").addClass("unclickable"), j.array.push($(this).attr("id")), i.turn = !0, g) e(g[l], j.array);
            !0 == h && ($("#message").html("Player 2 Win"), d())
        }
    }), $("#new-game").on("click", function(k) {
        k.preventDefault(), f()
    })
});
