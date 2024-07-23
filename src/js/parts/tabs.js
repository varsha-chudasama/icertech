export class Tabs {
    init() {
        this.tab();
    }
    tab() {
        $(document).ready(function () {
            $(".tab").first().addClass("tab-active");
            $(".tab-item").first().addClass("active");
            $("#backButton").hide();

            $('.tab-item').click(function (e) {
                e.preventDefault();

                $(".tab").removeClass('tab-active');
                $(".tab-item").removeClass('active');

                var tabId = $(this).attr('data-id');
                $(".tab[data-id='" + tabId + "']").addClass("tab-active");
                $(this).addClass('active');

                if (tabId === 'tab1') {
                    $('#backButton').hide();
                } else {
                    $('#backButton').show();
                }
            });
        })
    }
}