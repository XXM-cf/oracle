var index = 1;
setInterval(function () {
    if (!index == 0) {
        $('.abpicList').animate({
            left: (-7.5 * index) + 'rem'
        }, 1000);
        index = (++index) % 4;
    } else {
        $('.bannerList').css('left', '0')
        index = (++index) % 4;
    }
}, 2000);