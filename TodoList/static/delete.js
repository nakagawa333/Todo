$(function(){
	$(".finish").on("click",function(){
		let todos_id = $(this).attr("todos_id");

		$.ajax({
			url:"/delete",
			type:"POST",
			data:{
				id:todos_id
			}
		})

		.done((data) => {
			$("#back" + todos_id ).remove();
			$("#tasktotal").text("リスト数(" + data + ")");
		})

		.fail(() => {
			alert("Error");
		}) 
	})
})