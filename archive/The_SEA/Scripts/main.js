(function ($) {

    var clean = {};

    /**
     * Remove preloader
     */

    clean.removePreloader = function () {
        var $wrapper = $('#preloader-wrapper');
        $wrapper.find('.timer').remove();
        $wrapper.addClass('done');

        setTimeout(function () {
            $wrapper.remove();
        }, 2000);
    };

    /**
     *
     */

    clean.mobileCheck = function () {
        var ua = navigator.userAgent.toLowerCase();

        this.android = ua.indexOf("android") > -1;
        this.iPhone = navigator.userAgent.match(/iPhone/i);
        this.iPad = navigator.userAgent.match(/iPad/i);
        this.mobile = this.android || this.iPhone || this.iPad;

        this.ie = $("html").hasClass("ie");

        if (!this.mobile) {
            $("body").addClass("desktop");
            $("html").addClass("desktop");
        }
        else {
            $("body").addClass("mobile");
            $("html").addClass("mobile");
        }
    };


    /**
     * Google map section
     */

    initMap = function () {

        var _this = clean;

        var mapOptions = {
            zoom: Number(themeOptions['map_zoom']) || 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            draggable: !_this.mobile
        };

        var image = templateDirectory + '/img/marker.png';

        var address = themeOptions['address'];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {

                var geocoderlatlng = results[0].geometry.location;

                mapOptions.center = geocoderlatlng;

                map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

                var marker = new google.maps.Marker({
                    map: map,
                    draggable: false,
                    position: geocoderlatlng,
                    icon: image
                });
                google.maps.event.trigger(map, 'resize');
            }
        });
    };

    clean.initSectionGMap = function () {
        var el = $('#map_canvas'),
            _this = this;

        if (el.length == 0) return;

        /**
         * Asynchronous gmap
         * @type {HTMLElement}
         */

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initMap';
        document.body.appendChild(script);
    };

    /**
     *
     */

    clean.backToTop = function () {
        var backToTop = $("#back-top");
        backToTop.hide();

        if (this.mobile) return;

        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                backToTop.fadeIn();
            } else {
                backToTop.fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

    clean.projectSlider = function () {

        var $projectSlider = $("#project-slider"),
            _this = this,
            speed = Number($projectSlider.attr('data-speed')) * 1000 || 5000,
            slideSpeed = !_this.iPhone ? speed : false,
            total = $projectSlider.find('.project-slide').length,
            $slides = $projectSlider.find('.project-slide'),
            $slideIndex = $projectSlider.parent().find('.slide-index .index-big'),
            $loader = $('#slider-loader');

        $projectSlider.find('.project-slide').height($(window).height() - $("#page-header").height());
        $projectSlider.owlCarousel({items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            addClassActive: true,
            autoPlay: slideSpeed,
            afterInit: function () {
                setTimeout(function () {
                    $loader.css("transition-duration", (speed - 500) / 1000 + "s");
                    $loader.css("animation-duration", (speed - 500) / 1000 + "s");
                    $loader.addClass('loader-animate');
                }, 50);
                $slideIndex.html($projectSlider.find('.active').index() + 1 + '/');
            },
            beforeMove: function () {
                $loader.css("transition-duration", "0s");
                $loader.css("animation-duration", "0s");
                $loader.removeClass('loader-animate');
            },
            afterMove: function () {
                setTimeout(function () {
                    $loader.css("transition-duration", (speed - 500) / 1000 + "s");
                    $loader.css("animation-duration", (speed - 500) / 1000 + "s");
                    $loader.addClass('loader-animate');
                }, 50);
                $slideIndex.html($projectSlider.find('.active').index() + 1 + '/');
            },
            transitionStyle: "fadeUp",
            navigation: !_this.mobile,
            pagination: true
        });

        $(window).on('debouncedresize', function () {
            $projectSlider.find('.project-slide').height($(window).height() - $("#page-header").height());
        });
    };

    clean.videoIntro = function () {
        var $header = $("#video-intro"),
            $container = $header.find(".video_container"),
            $yt_video = $container.find('.yt_player'),
            $window = $(window);

        function resizeVideo() {
            if ($container.width() / 16 * 9 > $window.height()) {
                $container.height($window.height());
                $yt_video.css("margin-top", - ($yt_video.height() - $(window).height()) / 2 + "px");
            }
            else {
                $container.height($container.width() / 16 * 9);
            }
        };
        resizeVideo();
        $window.on("debouncedresize", resizeVideo);

        $header.find('#intro-button a').click(function(event){
            event.preventDefault();
            var $button = $(this),
                address = $button.attr('href');

            $header.css('transition-duration', '1.5s');
            $header.css('animation-duration', '1.5s');
            $header.css('-webkit-transition-duration', '1.5s');
            $header.css('-webkit-animation-duration', '1.5s');

            $header.addClass('animated bounceOutUp');

            setTimeout(
                function(){
                    window.location = address;
                },
                1500
            );

        });
    };

    /**
     * Init
     */

    jQuery("document").ready(function () {
        clean.videoIntro();
        clean.initSectionGMap();
        clean.mobileCheck();
        clean.backToTop();

        $('article.post.format-video').each(function () {
            $(this).fitVids();
        });

        $('.responsive-video').each(function () {
            $(this).fitVids();
        });

        //$('#about_team').owlCarousel({items: 4});

        var _this = clean;
        $('.post-gallery').each(function () {
            $(this).owlCarousel({items: 1, navigation: !_this.mobile, pagination: false, autoPlay: !_this.mobile});
        });

        if (!$("#video-intro").length) {

            $('#page-sidebar').niceScroll({
                zindex: "9999",
                scrollspeed: 50,
                mousescrollstep: 50,
                cursorwidth: 0,
                cursorborder: 0,
                background: "#333",
                cursorcolor: themeOptions.scrollColor,
                cursorborderradius: 0,
                autohidemode: false,
                horizrailenabled: false
            });

            $("html").niceScroll({
                zindex: "9999",
                scrollspeed: 50,
                mousescrollstep: 50,
                cursorwidth: 15,
                cursorborder: 0,
                background: "#333",
                cursorcolor: themeOptions.scrollColor,
                cursorborderradius: 1,
                autohidemode: false,
                horizrailenabled: false
            });
        }

        $('#page-content .portfolio-grid').height($(window).height());

        clean.projectSlider();


    });

    jQuery(window).load(function () {

        /**
         * Start.
         */
    });


    /**
     *  Responsive menu button
     */

    $("#responsive-button").click(function (event) {
        event.preventDefault();
        $("#responsive-menu").toggleClass("active");
    })

})(jQuery);


