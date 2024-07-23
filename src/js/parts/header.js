export class Header {
    init() {
        this.HeaderHover();
    }

    HeaderHover() {
        $(document).ready(function () {
            function handleWindowResizeDeskSize() {
                var windowWidth = $(window).width();
                if (windowWidth >= 992) {
                    $('.menu-item').each(function () {
                        if ($(this).children(".mega-menu").length === 0) {
                            return;
                        } else {
                            $(this).hover(function () {
                                $('.header').addClass('header-hover');
                                $(this).addClass('menu-active');
                            }, function () {
                                $('.header').removeClass('header-hover');
                                $(this).removeClass('menu-active');
                            });
                        }
                    });
                }
            }
            handleWindowResizeDeskSize();
            $(window).resize(handleWindowResizeDeskSize);
        });
    }
}