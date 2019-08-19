$(function(){
	$("#searchSubmit").on("click",function(event){
		let req = $("#search-input").val();
		$.ajax({
			url:"search",
			type:"POST",
			data:{
				req:req
			}
		})
		.then(
			sucessCallback,
			errorCallback
		)
		event.preventDefault();
	})
})

var sucessCallback = (data) => {
	let search = data.searches;
	let length = search.length;

	let tbody = $("#tbody");
	tbody.empty();
	appendHtml = ""

	for(i = 0; i < search.length; i++){
		appendHtml += (`<tr id="back${search[i].id}" class="sa" todos_id=${search[i].id}>` + 
					`<td id=${i}>` + search[i].section + `</td>` 
      				+ `<td>` + search[i].title + `</td>` 
					+`<td>` + search[i].content + `</td>` 
					+`<td>` +  `<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" todos_id=${search[i].id}>` + "内容の変更" + `</button>`+ `</td>`
					+`<td>` + `<button class="btn btn-danger finish" todos_id=${search[i].id}>` + "完了" + `</button>` + `</td>`
					+ `</tr>`);
	}
	tbody.append(appendHtml);

	$("#tasktotal").text("リスト数(" + length + ")");
}

var errorCallback = () => {
	console.log("Error");
}