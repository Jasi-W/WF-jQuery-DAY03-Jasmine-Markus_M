$(window).ready(function() {
$(document).mousemove(function(element) {
    $("#moveme").offset({
        left: element.pageX - 100,
        top: element.pageY -100
    });
});
	$("#moveme").on("dblclick", function(){
		var temp = $("#moveme");
                temp.hide(1600);
                $.fx.speeds["very-slow"] = 200;
                temp.show("very-slow");
    $(document).off('mousemove');
});
	$("#moveme").on(`click`, function(){
		$(document).mousemove(function(element) {
    $('#moveme').offset({
        left: element.pageX - 2,
        top: element.pageY -2
    });
});});

});