$(document).ready(function(){
    $('.desktop_eligibilty_period .panel_tabs li').click(function () {
        var panelToShow = $(this).attr('rel');
        $(this).addClass('active').siblings().removeClass('active')
    
        $('.desktop_eligibilty_period .panel.active').fadeOut(600, function () {
            $(this).removeClass('active');
            $('#' + panelToShow).fadeIn(600, function () {
                $(this).addClass('active');
            })
        })
    })

    $('.banner_form form .form-element .orange-btn').on('click', function(){
        $('.overlay').addClass('visible');
        $('.otp_area').addClass('visible');
    })

    $('.otp_area .orange-btn').on('click', function(){
        $('.overlay').removeClass('visible');
        $('.otp_area').removeClass('visible');
    })

    var swiper = new Swiper(".swiper-horizontal-3d", {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        slidesPerView: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });

    $('.slider_highlights').owlCarousel({
        // loop:true,
        margin:15,
        nav:true,
        dots: false,
        stagePadding: 100,
        items: 1,
        responsiveClass:true,
        responsive:{
            0:{
                stagePadding: 20,
            },
            480:{
                stagePadding: 100,
            }
        }
        
    })

    $('.collapse_benefits_flex').on('click', function(){
        $('.collapse_benefits_flex svg').toggleClass('rotate');
        $('.benefits_covered_flex').toggleClass('overflow_collapse');
    })
})