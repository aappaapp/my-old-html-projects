$.fn.contextmenu = function(place) {
    var contextmenu = document.getElementById('contextmenu');
    place.addEventListener('contextmenu', function(event){
        event.preventDefault();
        document.getElementById('contextmenu').style.display = 'block';
        document.getElementById('contextmenu').style.left = event.pageX;
        document.getElementById('contextmenu').style.top = event.pageY;
    })
    document.addEventListener('click', function(event){
        if (!event.target.classList.contains('contextitem') && !event.target.classList.contains('contextsubmenu')) {
            document.getElementById('contextmenu').style.display = 'none';
        }
    })
};