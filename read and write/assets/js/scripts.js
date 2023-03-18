function onload(){}
$(document).ready(function(){
	$("a#start").click(function() {
		$("p#text-show").load("unzip/data.aden");
	});
	$("a#download-btn").click(function() {
		blob = new Blob([document.getElementById("textarea").value], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "data.aden");
	});
	$("a#zip").click(function() {		
		zip = new JSZip();
		zip.file("data.aden", document.getElementById("textarea").value);
		zip.generateAsync({type:"blob"})
		.then(function(content) {
			// see FileSaver.js
			saveAs(content, "achrive.zip");
		});
	});
	$("h1#title").dblclick(function() {
		window.open("unzip.html", "", "width=500,height=500");
	});
});