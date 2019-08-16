$(function(){
	$("#deleteall").on("click",function(){
		let tbody = $("#tbody").children();
		if(tbody){
			alert("ee");
		}

		$.ajax({
			url:"deleteall",
			type:"POST"
		})

		.done((data) => {
			 /*データベースのカウント */
			$("#tasktotal").text("リスト数(" + data + ")");
			/* テーブルの要素を削除*/
			$(".back").remove();
		})

		.fail((data) => {
			alert("Error");
		})

		event.preventDefault();
	})
})