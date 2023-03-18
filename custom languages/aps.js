$(function () {
    $.get($('aps').attr('src'), function (data) {
        runaps(data);
    });
    function runaps(data) {
        data = data.split('\n');
        window.data = data;
        for (i = 0; i < data.length; i++) {
            if (!data[i].includes('/\\')) {
                if (data[i].slice(0, 4) == 'log(') {
                    try {
                        eval('console.' + data[i]);
                    } catch (err) {
                        console.error(err.toString().split('\n')[0]);
                    }
                }
                if (data[i].slice(0, 7) == 'notice(') {
                    data[i] = data[i].split('(');
                    try {
                        eval('alert(' + data[i][1]);
                    } catch (err) {
                        console.error(err.toString().split('\n')[0]);
                    }
                }
                if (data[i].slice(0, 4) == 'aps(') {
                    eval('$' + data[i].slice(3, data[i].length));
                }
                if ('') { }
            }
        }
    }
});
