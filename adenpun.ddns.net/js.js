function reload(){
  window.location = window.location.href+'?eraseCache=true';
}

function loginPage(){
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("noLogin").style.display = "none";
}

function bar(){
    document.getElementById("bar").innerHTML = '<div class="w3-bar w3-indigo"><a href="/index.html" class="w3-bar-item w3-button w3-mobile w3-hover-blue">主頁</a><div class="w3-dropdown-hover"><button class="w3-button w3-hover-blue">Download</button><div id="demodr" class="w3-dropdown-content w3-bar-block w3-card-4"><a class="w3-bar-item w3-button w3-hover-blue" href="/black.html" download>1. 黑暗神器</a></div></div><a href="javascript:loginPage()" class="w3-bar-item w3-button w3-mobile w3-hover-blue w3-right">Login</a></div>';
}