window.addEventListener('load', function(){
    if(document.getElementById('page').getAttribute('class') == 'index'){
        window.location = '1.html';
    }
});
document.addEventListener('click', function(){
    nextpage();
})
document.addEventListener('keydown', function(){
    if(event.keyCode == 37){
        backpage();
    } else if(event.keyCode == 39){
        nextpage();
    }
});
function backpage(){
    window.location = Number(document.getElementById('page').getAttribute('class')) - 1 + '.html';
}
function nextpage(){
    window.location = Number(document.getElementById('page').getAttribute('class')) + 1 + '.html';
}