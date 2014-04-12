$(document).ready(function() {
	$("#text1").fadeIn("fast");
	$("#text2").fadeOut("fast");
	$("#text3").fadeOut("fast");
	
	$("#link1").click(function() {
		$("#text1").fadeIn("fast");
		$("#text2").fadeOut("fast");
		$("#text3").fadeOut("fast");
	});
	$("#link2").click(function() {
		$("#text1").fadeOut("fast");
		$("#text2").fadeIn("fast");
		$("#text3").fadeOut("fast");
	});
	$("#link3").click(function() {
		$("#text1").fadeOut("fast");
		$("#text2").fadeOut("fast");
		$("#text3").fadeIn("fast");
	});
});