//音声ファイル呼出し
//完了ボタンを押した時
$(function(){
	const rollSound = new Audio("http://rei-yumesaki.up.seesaa.net/material/Rei-Yumesaki-Moe-48-Praise-Sugoi_nodesu.mp3");
	$('.finish').click(e => rollSound.play());
	
});

$(function(){
	const finishSound = new Audio("http://rei-yumesaki.up.seesaa.net/material/Rei-Yumesaki-Moe-48-Praise-Sugoi_nodesu.mp3");

	$("#deleteall").click(e => finishSound.play());
})