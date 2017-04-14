// check off specific todos by clicking
$("ul").on("click", "li", function(){		
	$(this).toggleClass("completed");
}); 

// click on x to delete to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	
	event.stopPropagation(); // stop event bubbling
});

$("input[type='text']").keypress(function(event){
	// which is character code 13 for enter key
	if (event.which === 13) {
		//  grepping new todo
		var todoText = ($(this).val());
		$(this).val(" ");
// create a new li and add in ul
		$("ul").append("<li><span><i class='fa fa-trash-o'></i> </span>" + todoText + "</li>")

	}
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});