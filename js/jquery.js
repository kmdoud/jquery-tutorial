$().ready(function() 
{

console.log("everything is ok");

$("p").css("color","red").css("font-size", ".55em");

$("button").click(function() 
{
    $("p").css("color", "gold").css("font-size","5.5em");
    $("input").val("this is the new default")
});

$("label").text("This is my first jquery label:");


});