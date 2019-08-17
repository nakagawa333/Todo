$(function(){
	$("#sort").on("click",function(){
		$.ajax({
			url:"/sort",
			type:"POST"
		})

		.done((data) => {
			let todos = data.todo;
			let tbody = $("#tbody");
			tbody.empty();
			appendHtml = ""
			
			for(i = 0;  i < todos.length; i++){
				appendHtml +=(`<tr id="back" todos_id=${todos[i].id}>` + 
					`<td>` + todos[i].section + `</td>` 
      				+ `<td>` + todos[i].title + `</td>` 
					+`<td>` + todos[i].content + `</td>` 
					+`<td>` +  `<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" todos_id=${todos[i].id}>` + "内容の変更" + `</button>`+ `</td>`
					+`<td>` + `<button class="btn btn-danger finish" todos_id=${todos[i].id}>` + "完了" + `</button>` + `</td>`
					+ `</tr>`);
			}
			tbody.append(appendHtml);

			//color
			$(function(){
			    var value = "";

				for(var i = 0; i < $("#back").length; i++){
					value = $("#"+i.toString()).text()
					if(value=='A'){
						$(".back:eq(" + i + ")").css("background-color","red");
						$(".back:eq(" + i + ")").css("color","white");
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
			//color finish

			//update

			//delete
			$(function(){
				$(".finish").on("click",function(){
					let todos_id = $(this).attr("todos_id");
					console.log(todos_id);
					$.ajax({
						url:"/delete",
						type:"POST",
						data:{
							id:todos_id
						}
					})

					.done((data) => {
						$("#back" + todos_id).remove();
						$("#tasktotal").text("リスト数(" + data + ")");
					})

					.fail(() => {
						alert("dataError");
					})
				})
			})

		})

		.fail(() => {
			alert("Error");
		})
	})
})


