
$(function(){
	$("#addSubmit").on("click",function(event){
		$.ajax({
			url:"/add",
			type:"POST",
			data:{
				"title":$("#title").val(),
				"content":$("#content").val(),
				"section":$("#selecttask").val()
			}
		})
		.done((data) => {
			
		})

		.fail((data) => {
			alert("Error");
		})

		event.preventDefault();
})
})

