//Check off Specific Todos By Clicking
$("ul").on("click","li",function (){
    // console.log($(this).css("color"));
    //if li is gray, reset it to unchecked
    // if ( $(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         textDecoration: "none",
    //         color: "black"
    //     });
    // }else {
    //     //turn it gray
    //     $(this).css({
    //         "text-decoration": "line-through",
    //         "color": "gray"
    //     });
    // }

    //we have $(multiple tags).addClass(), removeClass(), toggleClass()
    $(this).toggleClass("completed");
});

//Click On X To Delete Todos
$("ul").on("click","li span",function (event) {
   $(this).parent().fadeOut(500, function () {
      $(this).remove();
   });
   //stop bubbling up event, only trigger this level
   event.stopPropagation();
});

//Create A New Todos
$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {
        if ($(this).val() !== "") {
            //grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");
            //create a new li and add to ul
            $("ul").append("<li><span><i class=\'far fa-trash-alt\'></i></span> " + todoText + "</li>");
        }
    }
});

$(".fa-plus-circle").on("click",function () {
   $("input[type='text']").fadeToggle();
});
