
$(function(){
	$("#addSubmit").on("click",function(event){
	let title = $("#title").val();
	let content = 	$("#content").val();
	let section = $("#selecttask").val()
		$.ajax({
			url:"/add",
			type:"POST",
			data:{
				title:title,
				content:content,
				section:section
			}
		})
		.then(
			sucessCallback,
			errorCallback
		)


		event.preventDefault();
})

})

//1回目
var sucessCallback = (function(data){


	// $("#tbody").append(`<tr id="back">  <td>  ${data.section}  </td>  
	// 	                                 <td>   ${data.title}  </td>  <td>  ${data.content}  </td>
	// 	                                 <td><button class="btn btn-primary" data-toggle= data-target= todos_id=> 内容の変更 </button></td>
	// 	                                 <td> <button class="btn btn-danger" todos_id=${data}> 完了 </button> </td>
	// 	                                 </tr>`); 
	$.ajax({
		url:"/counttotal",
		type:"POST"
	})
	.then(
		sucessCallback_a,
		errorCallback_a
	)
})

var errorCallback = (function(){
	alert("Error");
})

//2回目
var sucessCallback_a = function(data){
	$("#tasktotal").text("リスト数(" + data + ")");

	$.ajax({
		url:"/total",
		type:"POST"
	})
	.then(
		sucessCallback_b,
		errorCallback_b
	)
}

var errorCallback_a = function(){
	alerr("ErrorA");
}

var sucessCallback_b = function(data){
	console.log(data.todo);
}

var errorCallback_b = function(){
	alert("ErrorB");
}
