$(document).ready(function(){
    $("#designimg, .design").click(function(){
    $(".design").toggle()
    $("#designimg").toggle()
});
$("#developmentimg, .development").click(function(){
    $(".development").toggle()
    $("#developmentimg").toggle()
});
$("#productimg , .product").click(function(){
    $(".product").toggle()
    $("#productimg").toggle()
})
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
$("form#contact-us").submit(function(){
    var name = $("input#name").val();
    var mail = $("input#email").val();
    var message = $("textarea#message").val();
    $ (alert("Thank you for your submission " + message))
})
});