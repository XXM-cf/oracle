// newsTab切换
$('.news_tab').click(function () {
    $(this).siblings().removeClass('news_active')
    $(this).addClass('news_active')
    // $('.newsList').toggle()
});

// 导航栏
var index = 1;
setInterval(function () {
    $('.dot_items').removeClass('dot_itemsActive')
    $('.dot_items').eq(index).addClass('dot_itemsActive')
    if (!index == 0) {
        $('.bannerList').animate({
            left: (-7.5 * index) + 'rem'
        }, 1000);
        $('.dot_items').removeClass('dot_itemsActive')
        $('.dot_items').eq(index).addClass('dot_itemsActive')
        index = (++index) % 3;
    } else {
        $('.bannerList').css('left', '0')
        index = (++index) % 3;
    }
}, 2000);