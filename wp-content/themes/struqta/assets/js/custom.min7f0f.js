!function(e){"use strict";if(e(window).on("load",function(){e("body").addClass("loaded")}),!e("body").hasClass("page-template-blank-template")){if("enable"===e(".header").data("mobile-sticky")){if(e(window).width()>767){var o=e(".primary-header").clone();e(".header").after('<div class="sticky-header"></div>'),e(".sticky-header").html(o);var a=document.querySelector(".sticky-header");new Headroom(a,{offset:100}).init()}}else{o=e(".primary-header").clone();e(".header").after('<div class="sticky-header"></div>'),e(".sticky-header").html(o);a=document.querySelector(".sticky-header");new Headroom(a,{offset:100}).init()}e(".primary-header").length&&(e(".header .primary-header .burger-menu").on("click",function(){e(this).toggleClass("menu-open"),e(".header .header-menu-wrap").slideToggle(300)}),e(".sticky-header .primary-header .burger-menu").on("click",function(){e(this).toggleClass("menu-open"),e(".sticky-header .header-menu-wrap").slideToggle(300)})),e(".header-menu-wrap ul li:has(ul)").each(function(){e(this).append('<span class="dropdown-plus"></span>'),e(this).addClass("dropdown_menu")}),e(".header-menu-wrap .dropdown-plus").on("click",function(){e(this).prev("ul").slideToggle(300),e(this).toggleClass("dropdown-open")}),e(".header-menu-wrap .dropdown_menu a").append("<span></span>")}e(window).on("resize",function(){var o;o=e("body"),e(window).width()<992?(o.removeClass("viewport-lg"),o.addClass("viewport-sm")):(o.removeClass("viewport-sm"),o.addClass("viewport-lg")),function(){if(e("body").hasClass("header-3")){var o=e(".header-3 .header .header-logo").data("sticky-logo");""!=o&&e(".header-3 .sticky-header .header-logo img").attr("src",o)}var a=e(".header.header-three").height();e(".page-header").css("padding-top",a+"px")}()}).resize(),e(function(){e("#dl-popup-search-box").removeClass("toggled"),e(".dl-search-icon").on("click",function(o){o.stopPropagation(),e("#dl-popup-search-box").toggleClass("toggled"),e("#popup-search").focus()}),e("#dl-popup-search-box input").on("click",function(e){e.stopPropagation()}),e("#dl-popup-search-box, body").on("click",function(){e("#dl-popup-search-box").removeClass("toggled")})}),e('a[href*="#"]').smoothscroll({duration:400});var r=e("#scroll-top");e(window).on("scroll",function(){e(this).scrollTop()>100?(e("#scrollup").removeClass("hide"),e("#scrollup").addClass("show")):(e("#scrollup").removeClass("show"),e("#scrollup").addClass("hide"))}),e(r).on("click",function(){return e("html, body").animate({scrollTop:0},800),!1}),e(".hover_content .tinv-wraper .tinvwl-tooltip").append('<i class="ti-heart"></i>'),e(".ar_top").on("click",function(){var o=e(this).next().attr("id"),a=document.getElementById(o),r=a.value;if(e(".woocommerce-cart .cart_btn.cart_btn_two").removeAttr("disabled"),isNaN(r))return!1;a.value++}),e(".ar_down").on("click",function(){var o=e(this).prev().attr("id"),a=document.getElementById(o),r=a.value;if(e(".woocommerce-cart .cart_btn.cart_btn_two").removeAttr("disabled"),isNaN(r)||!(r>0))return!1;a.value--})}(jQuery);