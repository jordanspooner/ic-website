$(document).ready(function(){

    var compile = function compile(url) {
        $.ajax({
            url: "php/get-latex.php",
            data: {url : url},
            type: "POST",
            success: function(data) {
                console.log(data);
                $.get("php/compile-latex.php", function(data) {
                    console.log(data);
                    window.open("php/return-pdf.php");
                });
            }
        })
    };

    $("#compile113").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/113.tex");
    });

    $("#compile120.2").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/120.2.tex");
    });

    $("#compile130").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/130.tex");
    });

    $("#compile140").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/140.tex");
    });

    $("#compile141").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/141.tex");
    });

    $("#compile142.1").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/142.1.tex");
    });

    $("#compile142.2").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/142.2.tex");
    });

    $("#compile145").click(function() {
        compile("https://raw.githubusercontent.com/jordanspooner/first-year-notes/master/145.tex");
    });

});

