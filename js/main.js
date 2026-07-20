(function ($) {
    "use strict";

    if (!$) {
        return;
    }

    $(function () {
        setTimeout(function () {
            $("#spinner").removeClass("show");
        }, 1);

        if (typeof WOW !== "undefined") {
            new WOW().init();
        }

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 45) {
                $(".navbar").addClass("sticky-top shadow-sm");
            } else {
                $(".navbar").removeClass("sticky-top shadow-sm");
            }

            if ($(this).scrollTop() > 300) {
                $(".back-to-top").fadeIn("slow");
            } else {
                $(".back-to-top").fadeOut("slow");
            }
        });

        $(".back-to-top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 900, "easeInOutExpo");
            return false;
        });

        if ($.fn.owlCarousel) {
            $(".header-carousel").owlCarousel({
                animateOut: "slideOutDown",
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ]
            });

            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                dots: true,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ]
            });
        }

        var $video = $("#video");
        var $videoModal = $("#videoModal");
        var videoSrc = "";

        $(".btn-play").on("click", function () {
            videoSrc = $(this).data("src") || "";
        });

        if ($video.length && $videoModal.length) {
            $videoModal.on("shown.bs.modal", function () {
                if (videoSrc) {
                    $video.attr("src", videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
                }
            });

            $videoModal.on("hide.bs.modal", function () {
                $video.attr("src", videoSrc);
            });
        }
    });
})(window.jQuery);
