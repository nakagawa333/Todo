
$(function(){
    var value = "";

	//$("#section").text();

	for(var i = 0; i < $(".back").length; i++){

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
	//	alert("Hello");
	
});
