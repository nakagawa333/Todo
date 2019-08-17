$(function(){
	$("#deleteall").on("click",function(){
		$.ajax({
			url:"deleteall",
			type:"POST"
		})

		.done((data) => {
			 /*データベースのカウント */
			$("#tasktotal").text("リスト数(" + data + ")");
			/* テーブルの要素を削除*/
			$("#tbody").empty();
		})

		.fail((data) => {
			alert("Error");
		})

		event.preventDefault();
	})
})