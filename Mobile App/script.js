$(document).ready(function () {
    var page = event.target;
    if (page.id === 'login') {
    } else if (page.id === 'page2') {
        $('ons-toolbar .center').html(page.data.title);
    }
});
document.addEventListener('prechange', function (event) {
    $('ons-toolbar .center').html(event.tabItem.getAttribute('label'));
});
