function openNav() {
	document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
	document.getElementById("sidePanel").style.width = "0";
}
$(document).ready(function(){
	$("input#alert-btn").click(function(){
		Swal.fire('This App Create By AP Studio');
	});
});
