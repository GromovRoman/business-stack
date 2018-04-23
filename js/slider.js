 $(document).ready(function(){
    $('.slides').slick({
        prevArrow: $('.carousel__arrow_left, .preview__arrow_left'),
        nextArrow: $('.carousel__arrow_right, .preview__arrow_right'),
        dots: true,
        appendDots: $('.preview__slides'),
        customPaging: function (slider, thumbIndex){
            const text = slider.$slides.eq(thumbIndex).data('text');
            if (thumbIndex === 0) {
                return `
                    <button
                        type="button"
                        class="thumbs__button thumbs__button_active"
                    >${text}</button>
                    `;
            }
            return `
                <button
                    type="button"
                    class="thumbs__button"
                >${text}</button>
            `;
        },
        dotsClass: "thumbs",
    }).on('beforeChange', function(event, slider, currentSlide, nextSlide){
        const $dots = $('.thumbs__button', slider.$dots);
        
        $dots.eq(nextSlide).addClass('thumbs__button_active');
        $dots.eq(currentSlide).removeClass('thumbs__button_active');
    });
});
