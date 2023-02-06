$("#want").click(function(){
    $("div.want").removeClass("hidden")
    $("div.want").addClass("show");;
    $("div.to").addClass("hidden");
    $("div.to").removeClass("show")
})

$("#to").click(function(){
    $("div.to").removeClass("hidden")
    $("div.to").addClass("show");;
    $("div.want").addClass("hidden");
    $("div.want").removeClass("show")
})

$(".first").click(function(event){
    $('html, body').animate({scrollTop: '+=270px'}, 100);
});

$(".second").click(function(event){
    $('html, body').animate({scrollTop: '+=300px'}, 100);
});

let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
$("input[name=help]").val(width);