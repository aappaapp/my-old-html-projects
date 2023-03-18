var allUsername, allPassword, allDisplayname = new Array();
allUsername=[
    "adenpn"
];
allPassword=[
    "Adenp1126"
];
allDisplayname=[
    "Aden Pun"
];
var i = 0;
var number = -1;

function login(){
    for(i=0; i<allUsername.length; i++){
        if ((document.getElementById("username").value == allUsername[i]) && (document.getElementById("password").value == allPassword[i])) {
            number = i;
            document.getElementById("loginForm").style.display = 'none';
            document.getElementById("login").style.display = 'block';
            alert("Success Login, Welcome " + allUsername[number]);
            document.getElementById("displayname").innerHTML = allDisplayname[number];
        }
    }
}