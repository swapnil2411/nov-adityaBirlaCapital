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

    $('.close_otp_popup').on('click', function(){
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
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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

      let coveredBenefit = [
        {
            "id": 1,
            "title": "Upfront Good Health Discount",
            "maintitle": "Upfront Good Health Discount",
            "desc": "Available once, at the time of obtaining the first policy from us, if customer (18 years and above) undergoes a successful Health Risk Assessment, we will provide an upfront good health discount of 10%.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/discount.png"
        },
        {
            "id": 2,
            "title": "Early Bird Discount",
            "maintitle": "Early Bird Discount",
            "desc": "Discount applicable if Insured Person's age at entry is less than 35 years at the time of inception of first policy.",
            "descone": "a. 5% discount from 4th policy year to 7th policy year.",
            "desctwo": "b. 10% discount from 8th Policy year onwards.",
            "descthree": "",
            "descfour": "",
            "img": "img/early_discount.png"
        },
        {
            "id": 3,
            "title": "HealthReturnsTM",
            "maintitle": "HealthReturns™",
            "desc": "Stay healthy and earn up to 50% of your premium as HealthReturns™.Our policy rewards you for staying fit and healthy and these rewards are accumulated in the form of HealthReturns. You can start earning HealthReturns by completing the following steps",
            "descone": "1. Complete a health assessment which as a result provides you a healthy heart score ",
            "desctwo": "2. Start exercising to earn Activ Dayz ",
            "descthree": "3. Earn HealthReturns monthly based on the accumulated Activ Dayz and your Healthy Heart Score",
            "descfour": "  You can use these HealthReturns for something as small as getting medicines for a fever or even for a surgery that is not covered due to a waiting period or exclusion in the policy. Furthermore, you can use HealthReturns for paying your premium from the 1st renewal of the policy.",
            "img": "img/returns.png"
        },
        {
            "id": 4,
            "title": "Binge Refill",
            "maintitle": "Binge Refill",
            "desc": " If the Sum Insured along with accumulated No Claim Bonus or Super No Claim Bonus is completely exhausted/insufficient for covering a claim, we provide a complete refill of the Sum Insured unlimited times for any illness/injury.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/refill.png"
        },
        {
            "id": 5,
            "title": "Maternity Expense Benefit",
            "maintitle": "Maternity Expense Benefit",
            "desc": "We will cover pre and postnatal maternity expenses, new born baby expenses, vaccinations and stem cell preservation.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/maternity.png"
        },
        {
            "id": 6,
            "title": "In Patient Hospitalization",
            "maintitle": "In Patient Hospitalization",
            "desc": "Avail cashless cover for in-patient hospitalization across a wide network of hospitals. This includes cover up to the Sum Insured for modern treatments, HIV/AIDS, STDs and mental care. If it is a planned treatment or an unforeseen emergency and you need to stay in the hospital for more than 24 hours, we will cover expenses like room rent, doctor’s fee, operation theatre expenses, medicines, drugs and other consumable under the policy as per your eligibility. Room rent is available as per the Sum Insured opted.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/hospitalization.png"
        },

        {
            "id": 7,
            "title": "Daily Cash Benefit (Shared Accomodation)",
            "maintitle": "Daily Cash Benefit (Shared Accomodation)",
            "desc": "As an insured person, you are eligible for a single room. But if you still opt for shared accommodation during in-patient hospitalization, then you will get a daily cash benefit for every 24 hours spent in the hospital.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/dailycashbenefit.png"
        },
        {
            "id": 8,
            "title": "Day Care Treatments",
            "maintitle": "Day Care Treatments",
            "desc": "Due to advancements in medical science, certain medical procedures like a dialysis may not require a 24-hour hospitalization, we will cover you for such procedures as well. Covers all day care procedures up to your Sum Insured.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/daycaretreatment.png"
        },
        {
            "id": 9,
            "title": "Pre & Post Hospitalisation Medical Expenses",
            "maintitle": "You may incur expenses for consultations, medicines or diagnostic tests before your hospitalization or after hospitalization. Such costs will be covered for up to 90 days before your hospitalization and up to 180 days after your discharge from the hospital where the hospitalization claim is accepted by the company.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/medicalexpense.png"
        },
        {
            "id": 10,
            "title": "Domicilary Hospitalisation",
            "maintitle": "Domicilary Hospitalisation",
            "desc": "Covers up to Sum Insured for medical treatment at home for a period exceeding at least 3 consecutive days which would otherwise have necessitated hospitalization.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/domicilary.png"
        },
        {
            "id": 11,
            "title": "Home Treatment",
            "maintitle": "Home Treatment",
            "desc": "You can avail home care treatment expenses up to Sum Insured for any illnesses / injuries on a cashless basis. This is only to be availed through our Network Provider / Empanelled Service Providers providing such facility.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/home.png"
        },
        {
            "id": 12,
            "title": "Road Ambulance",
            "maintitle": "Road Ambulance",
            "desc": "We will cover actual expenses incurred towards transportation by road ambulance to a nearest hospital with adequate medical facility in case of an emergency when the services are provided by a hospital under our network and reimbursed up to Rs. 3000 per hospitalization for network providers not under our network.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/road_ambulance.png"
        },
        {
            "id": 13,
            "title": "Organ Donor Expenses",
            "maintitle": "Organ Donor Expenses",
            "desc": "We cover the medical expenses on harvesting from the organ donor for organ transplantation up to the Sum Insured, while medical expenses incurred due to organ transplant surgeries are also covered.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/organdonor.png"
        },

        {
            "id": 14,
            "title": "AYUSH Cover",
            "maintitle": "AYUSH Cover",
            "desc": "We will cover you for medical expenses incurred by you towards your in-patient hospitalization under AYUSH (Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homeopathy) treatment. We will cover reasonable and customary charges on re-imbursement basis.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/ayushcover.png"
        },

        {
            "id": 15,
            "title": "No Claim Bonus",
            "maintitle": "No Claim Bonus",
            "desc": "Get an additional 10% Bonus for each claim free year, maximum up to 100% of your sum insured.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/noclaim.png"
        },

        {
            "id": 16,
            "title": "Health Check-up Program",
            "maintitle": "Health Check-up Program",
            "desc": "We provide a free health check-up for each adult once in a policy year, on a cashless basis.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/healthcheckup.png"
        },

        {
            "id": 17,
            "title": "Domestic Emergency Assistance Service",
            "maintitle": "Domestic Emergency Assistance Service",
            "desc": "We travel on work or for leisure throughout the year. Sometimes we may end up travelling to remote locations where adequate medical facility or help is not available. This plan provides emergency medical assistance when you are travelling within India for 150 kms or more away from your registered residential address.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/emergencyassistance.png"
        },

        {
            "id": 18,
            "title": "Health Assessment",
            "maintitle": "Health Assessment",
            "desc": "Health Assessment measures MER including BP, BMI HWR smoking status, Blood Sugar and Total Cholesterol.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/healthassesment.png"
        },
        {
            "id": 19,
            "title": "Super No Claim Bonus",
            "maintitle": "Super No Claim Bonus",
            "desc": " Double your Sum Insured in 2 claim free years through Super No Claim Bonus.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/noclaimsuperbonus.png"
        },
        {
            "id": 20,
            "title": "Travel Protect",
            "maintitle": "Travel Protect",
            "desc": "Optional cover for fixed payout in case of total loss or delay of check-in baggage as well as trip cancellations, interruptions and delays or missed connecting flights, paid up to the limit defined in the policy schedule/product benefit table only once in a policy year. ",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/travelprotect.png"
        },
        {
            "id": 21,
            "title": "Premium Waiver",
            "maintitle": "Premium Waiver",
            "desc": "We understand you can be diagnosed with an unforeseen critical illness during the policy period or can suffer an injury due to an accident which may result in permanent total disablement. This may result in mental and financial stress. To help you sail through these tough times, within 365 days from the date of the accident or diagnosis of listed 20 critical illnesses during the policy period, you can avail one policy year premium waiver. This can be availed only once in the lifetime of the policy.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/preminumwaiver.png"
        },
        {
            "id": 22,
            "title": "EMI Protection",
            "maintitle": "EMI Protection",
            "desc": " We will pay 3 EMIs towards any existing loan account if an insured person is hospitalized and the claim is admissible under In-patient Hospitalization, under:",
            "descone": "Section C.I.(a) or Day Care Treatment under Section C.I.(c) or Section C.I.(i) (AYUSH Cover) or Section C.I. (f) (a) Domiciliary Hospitalization or (f) (b) Home Treatment due to any illness/injury in excess of 6 consecutive days during the policy period while the policy is in force.",
            "desctwo": "These 3 EMIs will be paid as a lump sum amount post discharge from the hospital. Sum Insured INR 10,000 to INR 1,00,000 (in multiples of 10,000). Selection of this optional cover will be on individual basis, irrespective of policy type.",
            "descthree": "",
            "descfour": "",
            "img": "img/emiprotection.png"
        },
        
        {
            "id": 23,
            "title": "Non-Medical Expense Waiver",
            "maintitle": "Non-Medical Expense Waiver",
            "desc": " This waiver helps in safeguarding you from extra expenses, so that you can use any saved money towards a comprehensive treatment. This covers the cost of Non-Medical Items (listed under Annexure I of the Policy Wording). This feature is available for In-patient Hospitalization and Day Care Treatments.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/nonmedicalexpense.png"
        },
        {
            "id": 24,
            "title": "OPD Expenses",
            "maintitle": "OPD Expenses",
            "desc": " Covers medical expenses incurred during the policy period for outpatient consultation in relation to any illness/injury occurred during the policy period. These services shall be provided through the Empanelled Service Provider in selected cities on cashless basis only.",
            "descone": "",
            "desctwo": "",
            "descthree": "",
            "descfour": "",
            "img": "img/opdexpense.png"
        },
        
    ]
    
      $('.covered_box').on('click', function(){
        var benefitname = $(this).find('.covered_txt').text();
        var trimbenefit = $.trim(benefitname);
        console.log(trimbenefit);
        coveredBenefit.forEach(element => {
            if (trimbenefit == element.title) {
                $('.box-content .heading').text(element.maintitle);
                $('.box-content .para').text(element.desc);
                $('.box-content .para1').text(element.descone);
                $('.box-content .para2').text(element.desctwo);
                $('.box-content .para3').text(element.descthree);
                $('.box-content .para4').text(element.descfour);
                $('.box-content .icon img').attr('src', element.img);
            }
        });
        $(".covered_feature_popup").addClass("showpopup");
        $(".overlay").addClass('visible')
    })

    $('.close_covered_feature').on('click', function(){
        $(".covered_feature_popup").removeClass("showpopup");
        $(".overlay").removeClass('visible')
    })

    

    
})