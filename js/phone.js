$('.phone').click(function () {
    $('.phoneBox').css('display', 'block')
    $('.black_overlay').css({
        'display': 'block',
        // 'height': $(document.body).height() + 'rem'
    })
    // 禁用滚动条
});

$('.black_overlay').click(function () {
    $('.phoneBox').css('display', 'none')
    $('.black_overlay').css('display', 'none');

    $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });
});