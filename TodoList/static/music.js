//音声ファイル呼出し
$(function(){
	const rollSound = new Audio("http://rei-yumesaki.up.seesaa.net/material/Rei-Yumesaki-Moe-48-Praise-Sugoi_nodesu.mp3");
	$('.finish').click(e => rollSound.play());
	
});