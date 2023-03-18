window.ondragstart = function () {
    return false;
};
$(function () {
    output = '';
    $.get('char.json', function (data) {
        $('.datconfirm').append('名稱: ' + data.name + '<br>');
        $('.datconfirm').append('Id: ' + data.id + '<br>');
        $('.datconfirm').append('技能: {' + '<br><br>');
        var i;
        for (i = 0; i < data.skills.length; i++) {
            if (i >= 1) {
                $('.datconfirm').append(',' + '<br><br>');
            }
            $('.datconfirm').append('技能' + (i + 1) + ': {' + '<br><br>');
            $('.datconfirm').append('名稱: ' + data.skills[i].name + '<br>');
            $('.datconfirm').append('Id: ' + data.skills[i].id + '<br>');
            $('.datconfirm').append('<br>' + '}');
        }
        $('.datconfirm').append('<br><br>' + '}' + '<br>');
    });

    $(document).keydown(function () {
        if (event.key == 'Alt') {
            event.preventDefault();
        }
    });
});
