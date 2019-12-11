$(document).ready(function(){

    // toggle effect
    $("#designimg, .design").click(function(){
    $(".design").toggle()
    $("#designimg").toggle()
});

// toggle
$("#developmentimg, .development").click(function(){
    $(".development").toggle()
    $("#developmentimg").toggle()
});
$("#productimg , .product").click(function(){
    $(".product").toggle()
    $("#productimg").toggle()
})
// hover effect on the portfolio 
$(".wk1").hover(function(){
    $(".appear1").toggle()
})
$(".wk2").hover(function(){
    $(".appear2").toggle()
})
$(".wk3").hover(function(){
    $(".appear3").toggle()
})
$(".wk4").hover(function(){
    $(".appear4").toggle()
})
$(".wk5").hover(function(){
    $(".appear5").toggle()
})
$(".wk6").hover(function(){
    $(".appear6").toggle()
})
$(".wk7").hover(function(){
    $(".appear7").toggle()
})
$(".wk8").hover(function(){
    $(".appear8").toggle()
})

// notification on the form
$("form#mc-embedded-subscribe-form").submit(function(){
    var name = $("input#mce-NAME").val();
    var mail = $("input#mce-EMAIL").val();
    var message = $("textarea#mce-MESSAGE").val();
    var stored ="Name: " + name + "  " + "email: " + mail + "  " + "message: " + message
    $ (alert(stored));
    $ (alert("Thank you!!, your submission is well received "));
})
});