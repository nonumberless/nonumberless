$(function(){
    $("div.example").hide();
    $("div.trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("fast");
    });
})