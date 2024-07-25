export class Slick{
    init(){
        $(document).ready(function(){
            $(".history-slider").slick({
                dots: false,
                autoplay: false,
                arrows: false,
                slideToShow: 2,
                slideToScroll: 2,
                infinite: false,
                draggable: true,
            })
        });
    }
}