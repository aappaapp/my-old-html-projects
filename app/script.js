$(document).ready(function(){
    function getDeviceType(){
        var ua = navigator.userAgent;
        if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
            return "tablet";
        }
        if(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
            return "mobile";
        }
        return "desktop";
    };
    var deviceType = getDeviceType();
    if(deviceType == 'desktop'){
        $(".desktop").css("display", "block");
    } else if(deviceType == 'mobile'){
        $(".mobile").css("display", "block");
    }
});