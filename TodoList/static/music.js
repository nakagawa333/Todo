//音声ファイル呼出し
$(function(){
	const rollSound = new Audio("http://rei-yumesaki.up.seesaa.net/material/Rei-Yumesaki-Moe-48-Praise-Sugoi_nodesu.mp3");
	$('.finish').click(e => rollSound.play());

})

$(function(){

	var value = "";

	//$("#section").text();

	for(var i = 0; i < $(".back").length; i++){

		value = $(".back :eq("+i +")").text()
		if(value=='A'){
			$(".back:eq(" + i + ")").css("background-color","red")
		}else if(value=='B'){
           $(".back:eq(" + i + ")").css("background-color","yellow")
		}else {
           $(".back:eq(" + i + ")").css("background-color","blue")
		}
		
	}
	//	alert("Hello");
	
});
