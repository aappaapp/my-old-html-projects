$.extend({
    threestart: function () {
        window.threevalue = 1;
        window.threestarttrue = true;
    }
});
$.fn.append3d = function (type, config) {
    if (window.threestarttrue) {
        this.append('<div class=\'cube cube' + window.threevalue + '\'><div class=\'cubea cube' + window.threevalue + '\'>top</div><div class=\'cubeb cube' + window.threevalue + '\'>bottom</div><div class=\'cubec cube' + window.threevalue + '\'>left</div><div class=\'cubed cube' + window.threevalue + '\'>right</div><div class=\'cubee cube' + window.threevalue + '\'>forward</div><div class=\'cubef cube' + window.threevalue + '\'>back</div></div>');
        console.log(config);
        $('.cube' + window.threevalue + ':not(.cube)').css({
            'width': config['length'],
            'height': config['length'],
            'display': 'inline-block',
            'background': config['background']
        });
        window.threevalue++;
    } else {
        throw new Error('Please start the 3d.js to use this function.');
    }
}
