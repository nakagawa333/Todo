
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
	alert("おっぱい");
})

//2回目
var sucessCallback_a = function(data){
	$("#tasktotal").text("リスト数(" + data + ")");
	$.ajax({
		url:"/addAll",
		type:"POST",
		dataType:"json"
	})
	.then(
		sucessCallback_b,
		errorCallback_b
	)
}

var errorCallback_a = function(){
	alerr("ErrorA");
}

//3回目
var sucessCallback_b = function(data){
	alert("SucessB");

}

var errorCallback_b = function(){
	alert("ErrorB");
}

