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

    var swiper1 = new Swiper(".swiper-horizontal-3d", {
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

   
    var splide = new Splide( '.splide', {
        direction: 'ttb',
        height   : '100vh',
        autoplay: true,
        type    : 'loop',
      } );
      
      splide.mount();


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

    $('.hamburger').on('click', function(){
        $('.menu_container .menu_links').addClass('show_menu_links');
        $('.overlay').addClass('show_overlay');
        $('.hamburger').css('display','none');
        $('body').css('overflow-y','hidden');
    })
    
    $('.closeLink span').on('click', function(){
        $('.menu_container .menu_links').removeClass('show_menu_links');
        $('.overlay').removeClass('show_overlay');
        $('.hamburger').css('display','block');
        $('body').css('overflow-y','auto');
    })

    $('.columnone_slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        dotsData: true,
    })

    $('.columntwo_slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        dotsData: true,
    })

    $('.columnthree_slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        dotsData: true,
    })

    var swiper2 = new Swiper(".mySwiper", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
    var playerSettings = {
          controls : ['play-large'],
          fullscreen : { enabled: false},
          resetOnEnd : true,
          autoplay: true,
          hideControls  :true,
      clickToPlay:true,
          keyboard : false,
          
        }
    
    const players = Plyr.setup('.js-player', playerSettings);
    
     players.forEach(function(instance,index) {
                instance.on('play',function(){
                    players.forEach(function(instance1,index1){
                      if(instance != instance1){
                            instance1.pause();
                        }
                    });
                });
            });
    
    $('.video-section').on('translated.owl.carousel', function (event) {
      players.forEach(function(instance,index1){
                      instance.pause();
                    });
    });
})