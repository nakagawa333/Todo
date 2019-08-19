
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
	let todos = data.todo;
	let tbody = $("#tbody");
	tbody.empty();
	let appendHtml = "";

	for(i = 0; i < todos.length; i++){
		appendHtml += (`<tr id="back${todos[i].id}" class="back" todos_id=${todos[i].id}> 
			<td id=${i}> ${todos[i].section} </td>
			<td>${todos[i].title} </td>
			<td> ${todos[i].content} </td>
			<td> <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" todos_id=${todos[i].id}> 内容の変更 </button> </td>
		    <td><button class="btn btn-danger finish" todos_id=${todos[i].id}> 完了 </button></td>
		    </tr>`);
	}

	tbody.append(appendHtml);

	//color
	$(function(){
	    var value = "";

		for(var i = 0; i < $(".back").length; i++){
			value = $("#"+i.toString()).text()
			if(value=='A'){
				$(".back:eq(" + i + ")").css("background-color","red");
				$(".back:eq(" + i + ")").css("color","white");
				console.log("Hello");
			}else if(value=='B'){
	           $(".back:eq(" + i + ")").css("background-color","orange");
	        } else if(value == "C"){
	        	$(".back:eq(" + i + ")").css("background-color","yellow");
	        } else if(value == "D"){
	        	$(".back:eq(" + i + ")").css("background-color","blue");
	        } else if(value == "E"){
	        	$(".back:eq(" + i + ")").css("background-color","purple");
	       }
		}
	});
	//delete
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
				$("#back" + todos_id).remove();
				$("#tasktotal").text("リスト数(" + data +")");
			})

			.fail(() => {
				alert("既にデータが消えています");
			})
		})
	})


}

var errorCallback_b = function(){
	alert("ErrorB");
}
