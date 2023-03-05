$(window).scroll(function(){

    var scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    $('.secondo').css('top',-(scrollTop)+'px');
});