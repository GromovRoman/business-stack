 $(document).ready(function(){
    $('.slides').slick({
        prevArrow: $('.carousel__arrow_left'),
        nextArrow: $('.carousel__arrow_right'),
        asNavFor: '.thumbs'
    });
    $('.preview__arrow_right').on('click', function() {
        $('.slides').slick('slickNext');
    });
    $('.preview__arrow_left').on('click', function() {
        $('.slides').slick('slickPrev');
    });
    $('.thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slides',
        arrows: false
    });
});
