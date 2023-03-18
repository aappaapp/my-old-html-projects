function draw(){
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        var charator = new Image();
        charator.addEventListener("load", function() {
            // execute drawImage statements here
        }, false);
        charator.onload = function(){
            ctx.drawImage(charator,0,0);
        };
        charator.src = 'charator/right.png'
    }
}