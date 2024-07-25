export class Header {
    init() {
        this.HeaderHover();
        this.ResponsiveHeader();
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

    ResponsiveHeader() {
        $(document).ready(function () {
            function handleWindowResizeMegaMenu() {
                var windowWidth = $(window).width();
                if (windowWidth >= 0 && windowWidth <= 992) {
                    $('.menu-toggle').click(function (e) {
                        e.preventDefault();
                        $('.burgar-menu').toggleClass('activate');
                        $('.header').toggleClass('header-active');
                        $('.header-btn-end ,.top-header , .header-logo').toggleClass('d-none');
                        $('html').toggleClass('overflow-hidden');
                        $('.header').removeClass('header-megamenu-active');
                        $('.menu-item').removeClass('res-menu-active');
                    });
                    $('.menu-item').appendTo('.menu-items');
                    $('.tab-data1').appendTo('.tab-item1');
                    $('.tab-data2').appendTo('.tab-item2');
                    $('.tab-data3').appendTo('.tab-item3');
                    $('.menu-item').each(function () {
                        if ($(this).children(".mega-menu").length === 0) {
                            return;
                        } else {
                            var menuItem = $(this);
                            menuItem.click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                if (menuItem.hasClass('res-menu-active')) {
                                    $('.header').removeClass('header-megamenu-active');
                                    menuItem.removeClass('res-menu-active');
                                } else {
                                    $('.header').removeClass('header-megamenu-active');
                                    $('.res-menu-active').removeClass('res-menu-active');
                                    $('.header').addClass('header-megamenu-active');
                                    menuItem.addClass('res-menu-active');
                                }
                            });


                        }
                    });
                }
            }
            handleWindowResizeMegaMenu();
            $(window).resize(handleWindowResizeMegaMenu);
        });
    }
}