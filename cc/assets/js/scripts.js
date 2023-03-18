$(document).ready(function(){
	$('textarea#textarea').val(getCookies('textarea'));
	$('a#finish').click(function(){
		var text = '';
		var str = '';
		str = $('textarea').val();
		str = str.split('//');
		console.log('1. ' + str);
		var i;
		var str2;
		var zipCount = 0;
		for(i=0; i<str.length; i++){
			str2 = str[i].split('#');
			console.log('2. ' + str2);
			fori(str2);
		}
		function fori(str2){
			var i;
			var str3;
			var name = '';
			var id = '';
			var count = 0;
			for(i=0; i<str2.length; i++){
				str3 = str2[i].split('=');
				console.log('3. ' + str3);
				if(str3[0] == 'name'){
					name = str3[1];
					count = count +1;
					console.log('name. ' + name);
				} else if(str3[0] == 'id'){
					id = str3[1];
					count = count +1;
					console.log('id. ' + id);
				}
				if(count == str2.length){
					zipFuc(name, id);
				}
				function zipFuc(name, id){
					var zipCount = 0;
					var zip = new JSZip();
					console.log('new JSZip done');
					if(zipCount == str.length){
						zip.generateAsync({type:'blob'})
						.then(function(content){
							saveAs(content, 'achrive.zip');
						});
					} else {
						zip.file(name + '.aden', 'id=' + id);
						var zipCount = zipCount + 1;
						console.log(name + '.txt', 'id=' + id);
						console.log('str.length. ' + str.length);
						console.log('zipCount. ' + zipCount);
						console.log('zipFile done')
					}
				}
			}
		}
		
		var name = '';
	});
	$('textarea#textarea').change(function(){
		$('a#finish').css('display', 'inline-block');
		$('a#txt').css('display', 'none');
		$('a#zip').css('display', 'none');
		setCookies('textarea', $('textarea').val(), 365);
	});
	
	function setCookies(cname, cvalue, exdays){
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
		window.location.reload();
	};
	function getCookies(cname){
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' '){
				 c = c.substring(1);
			}
			if (c.indexOf(name) == 0){
				return c.substring(name.length, c.length);
			}
		}
		return "";
	};
});