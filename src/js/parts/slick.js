export class Slick{
    init(){
        $(document).ready(function(){
            $(".history-slider").slick({
                dots: false,
                autoplay: false,
                arrows: true,
                slideToShow: 2,
                slideToScroll: 2,
                infinite: false,
                draggable: true,
                prevArrow:'<i class="slick--prev position-absolute z-3"><img src="assets/images/left.png"></i>',
                nextArrow: '<i class="slick--next position-absolute z-3"><img src="assets/images/right.png"></i>',
            })
        });
    }
}