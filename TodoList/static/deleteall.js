$(function(){
	$("#deleteall").on("click",function(){
		$.ajax({
			url:"deleteall",
			type:"POST"
		})

		.done((data) => {
			$("#tasktotal").text("リスト数(" + data + ")");
			$("#tbody").css("display","none");

		})

		.fail((data) => {
			alert("Error");
		})


		event.preventDefault();
	})
})