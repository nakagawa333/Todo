
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

	$("#tbody").append("<tr>" + "<td>" + data.section + "</td>" + "<td>"+  data.title + "</td>" +  "<td>"+  data.content + "</td>" + "</tr>");

// 	$(function(){

// 	let value = "";

// 	//$("#section").text();

// 	for(var i = 0; i < $(".back").length; i++){

// 		value = $("#"+i.toString()).text()
// 		if(value=='A'){
// 			$(".back:eq(" + i + ")").css("background-color","red");
// 			$(".back:eq(" + i + ")").css("color","white");
// 		}else if(value=='B'){
//            $(".back:eq(" + i + ")").css("background-color","orange");
//         } else if(value == "C"){
//         	$(".back:eq(" + i + ")").css("background-color","yellow");
//         } else if(value == "D"){
//         	$(".back:eq(" + i + ")").css("background-color","blue");
//         } else if(value == "E"){
//         	$(".back:eq(" + i + ")").css("background-color","purple");
//        }
// 	}
// 	//	alert("Hello");
	
// });

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
	console.log(data);
}

var errorCallback_a = function(){
	alerr("ErrorA");
}

