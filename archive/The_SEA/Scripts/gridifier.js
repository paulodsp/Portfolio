(function ($) {
    var Gridifier = {};
    Gridifier.extend = function () {
        return $.extend(true, {}, this);
    };
    Gridifier.templates = {
        portfolioContent: $("#ajax-portfolio-template").html(),
        loadmore: $('<div id="load-more" class="loadmore"><a href="#">' + "Load more " + '</a></div>')
    };
    Gridifier.colClasses = [];
    Gridifier.colClasses[12] = "col-lg-1 col-md-2 col-sm-12 col-xs-12";
    Gridifier.colClasses[6] = "col-lg-2 col-md-3 col-sm-12 col-xs-12";
    Gridifier.colClasses[4] = "col-lg-3 col-md-3 col-sm-12 col-xs-12";
    Gridifier.colClasses[3] = "col-lg-4 col-md-4 col-sm-12 col-xs-12";
    Gridifier.colClasses[2] = "col-lg-6 col-md-6 col-sm-12 col-xs-12";
    Gridifier.colClasses[1] = "col-lg-12 col-md-12 col-sm-12 col-xs-12";

    Gridifier.says = function (action, data, callback) {
        var ajaxData = $.extend(true, data, { action: action });
        var _this = this;
        $.ajax({
            type: "POST",
            url: adminAjax,
            data: ajaxData,
            dataType: 'json',
            success: function (response) {
                _this[callback](response);
            },
            error: function (response) {
                _this[callback](response);
            }
        });
    };

    Gridifier.getFormFilter = function () {
        var allClasses = [],
            $items = this.$container.find('.grid-item'),
            _this = this
            ;
        $items.each(function (index, value) {
            var categories = $(this).data("categories");
            if (categories && categories.length > 0) {
                for (var i in categories) {
                    allClasses.push(categories[i].name);
                }
            }
        });
        var uniqueClasses = allClasses.filter(function (itm, i, allClasses) {
            return i == allClasses.indexOf(itm);
        });
        var filterList = $('<ul class="portfolio-filter" />');
        for (var j in uniqueClasses) {
            var lower = uniqueClasses[j];
            lower = lower.split(' ').join('-');
            filterList.append('<li><a href="#" data-filter="' + lower.toLowerCase() + '">' + uniqueClasses[j] + '</a></li>');
        }
        filterList.prepend('<li><a href="#" class="selected" data-filter="all">All</a></li>');
        filterList.find('a').each(function () {
            $(this).click(function (event) {
                event.preventDefault();

                filterList.find('a').removeClass('selected');
                $(this).addClass('selected');
                if ($(this).attr("data-filter") != "all") {
                    var active = _this.$container.find('.grid-item.' + $(this).attr("data-filter")).removeClass('filter-off');
                    var off = _this.$container.find('.grid-item:not(.' + $(this).attr("data-filter") + ')');
                    $.each(off, function () {
                        var $that = $(this);
                        $that.addClass("filter-off");
                    });

                }
                else {
                    _this.$container.find('.grid-item').removeClass('filter-off');
;
                }
                if (_this.options.type == "metro" || _this.options.type == "justified") {
                    setTimeout(function () {
                        _this.metroLayout();
                    }, 200);
                }

                else if (_this.options.type == "masonry") {
                    setTimeout(function () {
                        _this.masonryLayout();
                    }, 200);
                }
            });
        });
        return filterList;
    };

    Gridifier.hideActivePopup = function () {
        var $body = $('body');
        $body.find('.gridifier-popup').fadeOut(500);
        $body.find('.gridifier-background-wrap').fadeOut(200);
        this.$container.find('.grid-item').removeClass("ajax-content");
    };

    Gridifier.fillPortfolioContent = function ($form, data) {
        $form.find('.title').html(data.title);
        $form.find('.description').html(data.description);
        $form.find('.client').html(data.client);
        $form.find('.blog-date').html(data.date);
        var i, $item, _this = this;

        var $gallery = $form.find('.gallery');
        if (data.projectType == "video") {
            $gallery.append($item);
            $item = $(' <div class="gallery-item" />');
            $item.append(data.video);
            $gallery.append($item);
        }
        for (i in data.gallery) {
            if (data.gallery[i]) {
                $item = $('<a href="' + data.gallery[i] + '" data-lightbox="content"></a>');
                $item.append($('<div class="gallery-item" />').css('background-image', 'url(' + data.gallery[i] + ')'));
                $gallery.append($item);
            }
        }
        var gallerySize = $gallery.find('.gallery-item').length;
        if (gallerySize > 1) {
            $gallery.owlCarousel({
                items: 1,
                navigation: true,
                navigationText: ["prev", "next"]
            });
        }
        var $close = $('<div class="close-content"><span></span></div>');

        switch (this.options.showType) {
            case "inline-content":
                $close.click(function () {
                    _this.hideActiveContent();
                });
                break;
            case "popup-content":
                $close.click(function () {
                    _this.hideActivePopup();
                });
                break;
            default:
                break;
        }
        $gallery.prepend($close);

        var $tags = $form.find('.tags');
        for (i in data.tags) {
            $item = $('<div class="tag-item" />').append('<a href="' + data.tags[i].url + '">' + data.tags[i].name + '</a>');
            $tags.append($item);
        }

        var $categories = $form.find('.categories');
        for (i in data.categories) {
            $item = $('<div class="category-item" />').append('<a href="' + data.categories[i].url + '">' + data.categories[i].name + '</a>');
            $categories.append($item);
        }
        $form.find('.button').html('<a target="_blank" href="' + data.button.link + '">' + data.button.text + '</a>');
        return true;
    };

    Gridifier.getContentForm = function (data) {
        var $form;
        if (this.options.contentType == "portfolio") {
            $form = $(this.templates.portfolioContent);
            this.fillPortfolioContent($form, data);
        }
        return $form;
    };

    Gridifier.getItemData = function (id) {
        var action;
        switch (this.options.contentType) {
            case "portfolio":
                action = "get_portfolio_content";
                break;
            case "blog":
                action = "get_blog_content";
                break;
        }
        this.says(
            action,
            { id: id },
            "loadItemData"
        );
        this.ajaxState = "waiting";
    };

    Gridifier.loadItemData = function (data) {
        var $sender = this.$container.find('.ajax-content'),
            $items = this.$container.find('.grid-item');
        this.ajaxState = "idle";
        switch (this.options.showType) {
            case "inline-content":
                var senderRow = Math.ceil($items.index($sender) / this.options.cols); // get the row of this item
                senderRow = senderRow > 0 ? senderRow : 1;
                if ($items.length > senderRow * this.options.cols - 1) {
                    $items.eq(senderRow * this.options.cols - 1).after(this.getContentForm(data));
                }
                else {
                    $items.last().after(this.getContentForm(data));
                }
t
                var $anchor = this.$container.find('#portfolio-content');
                $.scrollTo($anchor, {duration: 1000});
                break;
            case "popup-content":
                var $popup = $('<div class="gridifier-popup" />');
                var $body = $("body");
                $popup.append(this.getContentForm(data));
                $body.append('<div class="gridifier-background-wrap" />');
                $body.append($popup);
                break;
            default:
                break;
        }


        $sender.find('.cover').fadeOut(500);

        $('.portfolio-content-wrapper').addClass("animated fadeInLeftBig").show();
        setTimeout(function () {
            $('.portfolio-content-wrapper .owl-wrapper-outer').addClass("animated fadeIn").show();
            $('.portfolio-content-wrapper .owl-controls').addClass("animated fadeIn").show();

            $('#pl').removeClass('loader-animate');
        }, 1000);
    };

    Gridifier.setSize = function ($item) {
        this.base = Math.ceil(this.base) || Math.ceil(this.$container.width() / this.options.cols);
        if (!this.mobile) {
            $item.width(Math.ceil(this.base * $item.data("widthX"))).height(Math.ceil(this.base * $item.data("heightX")));
        }
        else {
            $item.width(this.base).height(this.base);
        }
    };

    Gridifier.canFit = function (width, x, offsets, originalOffsets) {
        if(this.tryingHard == true){
            var result = (width <= ( offsets.length - x ))
                && (offsets[x + (width - 1)] == offsets[x])
                && (this.offsets[x] == offsets[x])
                && (offsets[x + (width - 1)] == this.offsets[x + (width - 1)]);
;
        }
        return (width <= ( offsets.length - x ))
            && (offsets[x + (width - 1)] == offsets[x])
            && (this.offsets[x] == offsets[x])
            && (offsets[x + (width - 1)] == this.offsets[x + (width - 1)]);
    };

    Gridifier.fitBox = function ($item, offsets) {
        var width = $item.data("widthX"),
            tmpOffsets = offsets.slice(0);
        var minOffset = Math.min.apply(Math, tmpOffsets),
            minIndex = tmpOffsets.indexOf(minOffset);
        if (this.canFit(width, minIndex, tmpOffsets)) {

            return minIndex;
        }
        else {
            ++tmpOffsets[minIndex];
            ++this.attempts;
            if(this.attempts>20){
                if(this.hardToFit == undefined){
                    this.hardToFit = [];
                }
                this.hardToFit.push($item)
                return 'ouch';
            }
            return this.fitBox($item, tmpOffsets);
        }
    };

    Gridifier.metroLayout = function () {
        var $items = this.$container.find('.grid-item:not(.filter-off)'),
            _this = this;
        this.offsets = [];
        for (var k = 0; k < this.options.cols; k++) {
            this.offsets.push(0);
        }
        $.each($items, function (index, value) {
            var $thisItem = $(this);
            _this.setSize($thisItem);
            var $video = $(this).find('.grid-video');
            if ($video.length) {
                var $videoEl = $video.find("video").get()[0];
                $video.height($thisItem.height());
                $video.width($thisItem.width());
                var video = $video.find("video").get()[0];
                if ($thisItem.width() == $thisItem.height()) {
                    video.width = Math.ceil($thisItem.width() * 16 / 9);
                    video.setAttribute("style",
                        "margin-left: -" + Math.ceil(( (video.width - $thisItem.width() ) / 2)).toString() + "px");
                }
                else if ($thisItem.width() > $thisItem.height()) {
                    video.width = $thisItem.width();
                }
                else if ($thisItem.width() < $thisItem.height()) {
                    video.width = $thisItem.height() * 16 / 9;
                    video.setAttribute("style",
                        "margin-left: -" + Math.ceil(( (video.width - $thisItem.width() ) / 2)).toString() + "px");
                }
            }
            if (!_this.mobile) {
                _this.attempts = 0;
                var result = _this.fitBox($thisItem, _this.offsets);
                if( result == 'ouch'){ 
                    return; 
                }
                else{
                    var newX = result, newY = _this.offsets[newX];
                    $thisItem.css({left: Math.ceil(newX * _this.base) + "px", top: Math.ceil(newY * _this.base) + "px"});
                    for (var i = newX; i < newX + $thisItem.data("widthX"); i++) {
                        _this.offsets[i] += $thisItem.data("heightX");
                    }

                    if(_this.hardToFit && _this.hardToFit.length > 0){ 
                        var $hardItem = _this.hardToFit.pop();
                        _this.tryingHard = true;
                        result = _this.fitBox($hardItem, _this.offsets);
                        _this.tryingHard = false;
                        if(result == 'ouch') return;

                        var newX = result, newY = _this.offsets[newX];
                        $hardItem.css({left: Math.ceil(newX * _this.base) + "px", top: Math.ceil(newY * _this.base) + "px"});
                        for (var i = newX; i < newX + $hardItem.data("widthX"); i++) {
                            _this.offsets[i] += $hardItem.data("heightX");
                        }
                        _this.initialAnimate($hardItem);
                    }
                }
            }
            else {
                $thisItem.css({left: 0, top: index * _this.base + "px"});
            }
            if ($thisItem.css("display") == "none") {
                _this.initialAnimate($thisItem);
            }
        });
        $.each($items, function (index, value) {
            var $thisItem = $(this);
        });
        $('body #loading-content').remove();
        $('#pl').removeClass('loader-animate');
        var height = Math.max.apply(Math, _this.offsets) * _this.base;
        if (_this.mobile) {
            height = $items.length * _this.base;
        }
        this.$container.height(height);
    };



    Gridifier.masonryLayout = function () {
        var $items = this.$container.find('.grid-item:not(.filter-off)'),
            cols = this.options.cols, width = 100 / cols,
            offsets = [],
            mobileOffset = 0,
            _this = this;

        for (var k = 0; k < cols; k++) {
            offsets.push(0);
        }

        _this.$container.imagesLoaded().always(function () {

            $items.css({width: width + "%"});
            $items.css({height: "auto"});

            var galleries = $items.find('.post-gallery');

            galleries.each(function () {
                $(this).owlCarousel({
                    items: 1,
                    navigation: !_this.mobile,
                    pagination: false,
                    autoPlay: !_this.mobile
                });
            });

            setTimeout(function(){
                $.each($items, function (index, value) {
                    var m = offsets.indexOf(Math.min.apply(Math, offsets)),
                        $thisItem = $(this),
                        offset = offsets[m];
                    if(!_this.mobile){
                        $thisItem.css({left: m * width + '%', top: offset + "px", opacity: 1});
                    }
                    else{
                        $thisItem.css({left: 0, top: mobileOffset + "px", opacity: 1});
                        mobileOffset += $thisItem.height();
                    }

                    offsets[m] += $(this).height() + Number($(this).css("margin-bottom").replace("px", ""));
                    if ($thisItem.css("display") == "none") {
                        setTimeout(function () {
                            _this.initialAnimate($thisItem);
                        }, 500);
                    }
                });

                if(!_this.mobile){
                    var height = Math.max.apply(Math, offsets);
                }
                else{
                    var height = mobileOffset;
                }
                _this.$container.height(height);
                $('body #loading-content').remove();
                $('#pl').removeClass('loader-animate');

            }, 300);

        });
    };


    Gridifier.initialAnimate = function ($thisItem) {
        if (!($("html").hasClass("ie"))) {
            $thisItem.addClass("animated flipInX");
            $thisItem.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $thisItem.css({opacity: 1});
                $thisItem.removeClass("animated flipInX");
            });
            $thisItem.show();
        }

        else {
            $thisItem.addClass("animated flipInX");
            $thisItem.css({opacity: 1});
        }
    };


    Gridifier.loadContent = function () {
        var _this = this,
            action;
        switch (this.options.contentType) {
            case "portfolio":
                action = "load_portfolio_items";
                break;
            case "blog":
                action = "load_blog_items";
                break;
        }
        this.says(
            action,
            {
                type: "multiple",
                number: this.options.initRows * this.options.cols,
                offset: 0,
                category: _this.options.category
            },
            "initGrid"
        );
        this.ajaxState = "waiting";
    };

    Gridifier.hideActiveContent = function () {
        var content = this.$container.find('.portfolio-content-wrapper');
        content.removeClass("animated fadeInLeftBig").addClass('animated fadeOutLeftBig');
        setTimeout(function () {
            content.slideUp(600);
        }, 600);
        setTimeout(function () {
            content.remove();
        }, 1200);
        this.$container.find('.grid-item').removeClass("ajax-content");
    };

    Gridifier.bindGridEvents = function ($content) {
        var _this = this;


        if (this.options.showType == "popup-content" && this.options.contentType == 'portfolio') {
            $content.find('.grid-item').each(function () {
                $(this).click(function (event) {

                    $('#pl').addClass('loader-animate');
                    if (!_this.mobileDevice) {
                        event.preventDefault();
                        $(this).prepend('<div class="cover"><div class="loader"></div></div>').find('.cover').fadeIn();
                        $(this).addClass('ajax-content');
                        _this.getItemData($(this).attr("data-post-id"));
                    }
                })
            });
        }
        $content.find('.grid-video').each(function () {
            var $video = $(this).find('video'),
                $cover = $(this).parent().find(".portfolio-image"),
                $item = $(this).parents(".grid-item");
            $item.hover(function () {
                    $cover.removeClass("animated fadeIn");
                    $cover.addClass("animated fadeOut");
                    $video.get(0).play();
                },
                function () {
                    $video.get(0).pause();
                    $cover.removeClass("animated fadeOut");
                    $cover.addClass("animated fadeIn");
                });
        });
    };



    Gridifier.loadMore = function () {
        var _this = this,
            $items = this.$container.find('.grid-item'),
            itemsLength = $items.length,
            action;

        $('#pl').addClass('loader-animate');

        switch (this.options.contentType) {
            case "portfolio":
                action = "load_portfolio_items";
                break;
            case "blog":
                action = "load_blog_items";
                break;
        }
        this.says(action,
            {
                type: "multiple",
                number: this.options.cols * this.options.loadmoreRows,
                offset: itemsLength
            },
            "initGrid"
        );
        this.ajaxState = "waiting";
    };

    Gridifier.getFormPortfolioItems = function (items, $content) {
        var _this = this;
        for (var i = 0; i < items.length; i++) {
            var $item = $(items[i].html);
            if (this.options.type == "justified") {

                $item.addClass("justified")
                    .addClass("box11")
                    .data("boxSize", 11)
                    .data("widthX", 1)
                    .data("heightX", 1);
            }
            else if (this.options.type == "metro") {
                $item.addClass("metro")
                    .addClass("box-" + items[i].boxSize)
                    .data("boxSize", items[i].boxSize)
                    .data("widthX", Math.floor(Number(items[i].boxSize) / 10))
                    .data("heightX", Number(items[i].boxSize) % 10);
            }
            else if (this.options.type == "masonry") {
                $item.addClass("masonry");
            }
            var categories = items[i].categories;
            for (var j in categories) {
                var cat = categories[j].name;
                $item.addClass(cat.toLowerCase().split(' ').join('-'));
            }
            $item.data("categories", categories);
            $content.append($item);
        }
        return $content;
    };

    Gridifier.getFormBlogItems = function (items, $content) {

        var _this = this;

        for (var i in items) {
            var $item = $(items[i].html);//$(this.itemTemplate);
            if (this.options.type == "justified") {
                $item.addClass("justified " + this.colClasses[ this.options.cols ])
                    .attr("data-post-id", items[i].id);
            }
            else if (this.options.type == "metro") {
                $item.addClass("metro")
                    .addClass("box-" + items[i].boxSize)
                    .data("boxSize", items[i].boxSize)
                    .data("widthX", Math.floor(Number(items[i].boxSize) / 10))
                    .data("heightX", Number(items[i].boxSize) % 10)
                    .attr("data-post-id", items[i].id);
            }
            else if (this.options.type == "masonry") {
                $item.addClass("masonry");
            }
            var categories = items[i].categories;
            for (var j in categories) {
                var cat = categories[j].name;
                $item.addClass(cat.toLowerCase().split(' ').join('-'));
            }
            if (items[i].post_format == "video") {
                $item.fitVids();
            }
            $item.data("categories", categories);
            $content.append($item);
        }

        return $content;
    };


    Gridifier.getFormItems = function (items) {
        var _this = this,
            $content = $('<div class="gridifier-items clearfix" />');
        switch (this.options.contentType) {
            case "portfolio":
                $content = this.getFormPortfolioItems(items, $content);
                break;
            case "blog":
                $content = this.getFormBlogItems(items, $content);
                break;
        }
        this.bindGridEvents($content);
        return $content.children();
    };

    Gridifier.initGrid = function (data) {
        var _this = this,
            items = data.items,
            $sidebar = $('#page-sidebar'),
            $sidebarR = $('#page-sidebar-responsive'),
            $menu = $sidebar.find('#sidebar-menu'),
            $menuR = $sidebarR.find('#sidebar-menu');

        this.ajaxState = "idle";

        if(this.firstRun == true){
            this.firstRun = false;
        }
        else if($('.loadmore').length){
            this.initState = "working";
            this.scrollPosition = $('.loadmore').get(0).offsetTop;
            console.log(this.scrollPosition);
        }

        var $items = this.getFormItems(items);

        this.$container.append($items);

        if (this.options.filter == "1") {
            $sidebar.find("#sidebar-filter").remove();
            $sidebarR.find("#sidebar-filter").remove();
            var $filterSection = $('<section id="sidebar-filter" class="sidebar-block"></section>');
            $filterSection.append(this.getFormFilter());
            $menu.after($filterSection);
        }
        if (!data.loadmore) {
            this.loadMoreState = false;
            $("#infscroll").remove();
        }

        setTimeout(function () {
            $(window).trigger("resize");
            $(window).trigger("scroll");
            $("html").getNiceScroll().resize()
        }, 300);


    };
    Gridifier.mobileCheck = function () {
        var ua = navigator.userAgent.toLowerCase();
        this.android = ua.indexOf("android") > -1;
        this.iPhone = navigator.userAgent.match(/iPhone/i);
        this.iPad = navigator.userAgent.match(/iPad/i);
        this.mobileDevice = this.android || this.iPhone || this.iPad || $(window).width() <= 1024;
    };

    Gridifier.init = function ($container) {
        this.$container = $container;
        this.options = {
            type: $container.attr("data-type"),
            contentType: $container.attr("data-content-type"),
            itemTemplate: $container.attr("data-item-template"),
            cols: $container.attr("data-cols"),
            filter: $container.attr("data-filter"),
            postId: $container.attr("data-id") || "",
            initRows: $container.attr("data-init-rows"),
            category: $container.attr("data-category") || "",
            initLoaded: false,
            loadmoreRows: $container.attr("data-loadmore-rows"),
            showType: $container.attr("data-show-type"),
            infScroll: $container.attr("data-infscroll"),
            masonryAnimate: false
        };
        this.mobileCheck();
        this.ajaxState = "idle";
        this.loadMoreState = true;
        this.$container.addClass("columns" + this.options.cols);
        this.firstRun = true;

        $container.data("gridifier", this);
        this.loadContent();
        var _this = this,
            $window = $(window);

        $(window).on("debouncedresize", function () {
            _this.mobileCheck();
            if ($window.width() <= 480) {
                _this.base = _this.$container.width();
                console.log(_this.base);
                _this.options.cols = 1;
                _this.mobile = true;
                _this.$container.addClass("mobile");
                _this.$container.removeClass("desktop");
                _this.$container.removeClass("tablet");
            }
            else if ($window.width() > 480 && $window.width() <= 1280 && _this.$container.attr("data-cols") == 6) {
                _this.options.cols = 4;
                _this.base = _this.$container.width() / _this.options.cols;
                _this.mobile = false;
                _this.tablet = true;
                _this.$container.addClass("tablet");
                _this.$container.removeClass("desktop");
                _this.$container.removeClass("mobile");
            }
            else if ($window.width() > 480 && $window.width() <= 1280 && _this.$container.attr("data-cols") == 4 && (_this.options.type == "masonry")) {
                _this.options.cols = 2;
                _this.base = _this.$container.width() / _this.options.cols;
                _this.mobile = false;
                _this.tablet = true;
                _this.$container.addClass("tablet");
                _this.$container.removeClass("desktop");
                _this.$container.removeClass("mobile");
            }
            else {
                if (_this.mobile || _this.tablet) {
                    _this.options.cols = _this.$container.attr("data-cols");
                }

                _this.$container.width(_this.$container.parent().width());

                if (_this.$container.width() % _this.options.cols) {
                    _this.$container.width(_this.$container.width() - 1);
                }

                _this.base = _this.$container.width() / _this.options.cols;

                _this.mobile = false;
                _this.tablet = false;
                _this.$container.addClass("desktop");
                _this.$container.removeClass("mobile");
                _this.$container.removeClass("tablet");
            }
            if (_this.options.type == "metro" || _this.options.type == "justified") {
                _this.metroLayout();
            }
            else if (_this.options.type == "masonry") {
                _this.masonryLayout();
            }

            _this.$container.parent().find('.loadmore').remove();

            if (_this.loadMoreState && !_this.options.infScroll && !$('.loadmore').length) {
                var parent = _this.$container.parent();
                _this.$container.after($('<div id="load-more" class="loadmore"><a href="#">' + "Load more " + '</a></div>'));
                parent.find('.loadmore').click(function (event) {
                    event.preventDefault();
                    $(this).addClass('fadeOutDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).css({opacity: 0});
                    });
                    _this.hideActiveContent();
                    _this.loadMore();
                });
                if (_this.initState == "working") {
                    $('html').scrollTo({top:_this.scrollPosition -190 + 'px', left: 0}, 800);//{top: }, 1000,  {axis:'x'});
                    _this.initState = "done";
                }
            }

        });



        if (this.options.infScroll) {
            var $infMarker = $('<div id="infscroll"></div>');
            $container.after($infMarker);
            $window.on("scroll", function () {
                if (!_this.loadMoreState) return;
                if (_this.ajaxState == "idle" && $infMarker.offset().top < ( $window.scrollTop() + $window.height() + 200 )) {
                    _this.ajaxState = "waiting"; 

                    $('#pl').addClass('loader-animate');
                    _this.loadMore();
                }
            });
        }
    };

    $.fn.gridifier = function () {
        var gridifierItems = $('.gridifier');
        gridifierItems.each(function (index, value) {
            var gridifier = Gridifier.extend();
            gridifier.init($(this));
        });
    };

    $(window).load(function () {
        $("#page-content").gridifier();
    });

})(jQuery);

