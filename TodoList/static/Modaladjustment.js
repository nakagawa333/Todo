let checkWidth = function(){
	let browserWidth = $(window).width();
	let modalWidth = $("#modal").width();

	let plusPxW = (( browserWidth - modalWidth) /2);

	$("#modal").css({"left": plusPxW + "px"});
}

let checkHeight = function(){
	let browserHeight = $(window).height();

	let modalHeight = $("#modal").height();

	let plusPxH = ((browserHeight - modalHeight) / 2);

	$("#modal").css({"top":plusPxH + "px"});

}


$('#exampleModalLong').on('shown.bs.modal', function () {
})

$(function(){
	checkWidth();
	checkHeight();
})

$(window).on("load resize",function(){
	checkWidth();
	checkHeight();
})