//Mobile Nav Activation
$('.header-burger').on('click', function () {
    $('.header-burger').toggleClass('active')
    $('.header-menu nav').toggleClass('active')
    if ($('.header-menu nav').hasClass('active')) {
        $('body').css('overflow-y', 'hidden')
        $('#sticky-header').css("opacity", '1');
        $('#toTop').css('visibility', 'hidden')
    } else {
        $('body').css('overflow-y', 'unset')
        $('#toTop').css('visibility', 'visible')

    }
})

$(window).resize(function () {
    if ($(this).width() >= 1000) {
        $('.header-burger').removeClass('active')
        $('.header-menu nav').removeClass('active')
    }
});


$(document).ready(function () {
    $(".latestPostsContent").slice(0, 4).hide();
  
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".latestPostsContent:hidden").slice(0, 4).slideDown();
        if ($(".latestPostsContent:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
})

$( ".header-search-btn" ).click(function() {
    $(".search-form-header").css("display", "block");
    $(".header-logo-mainNavbar").css("display", "none")
    $(".header-menu").css("display", "none")
    $(".fa-search").css("display", "none")
    $(".search-close-btn").css("display", "block")
});

$(".search-close-btn").click(function() {
    $(".search-form-header").css("display", "none");
    $(".header-logo-mainNavbar").css("display", "block")
    $(".header-menu").css("display", "block")
    $(".fa-search").css("display", "block")
    $(".search-close-btn").css("display", "none")
});

// var fixmeTop = $('.fixme').offset().top;
// $(window).scroll(function() {
//     var currentScroll = $(window).scrollTop();
//     if (currentScroll >= fixmeTop) {
//         $('.fixme').css({
//             position: 'fixed',
//             top: '0',
//             left: '0'
//         });
//     } else {
//         $('.fixme').css({
//             position: 'static'
//         });
//     }
// });


    // $(window).scroll(function(){

    //     let offset = $('.comments').offset().top
    //     if ($(window).scrollTop() > offset){
    //         $('.rightMainDiv').css('position','fixed');
    //         $('.rightMainDiv').css('top','0');
    //         $('.rightMainDiv').css('right','0');
    //     }
    // });


const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});


$(".header-search-btn").click()


// Overlay - blur background
function isOverlay(){
    if ($("#menu__toggle").prop("checked")) {
        $(".overlay").css("visibility", "visible");
        $(".overlay").css("opacity", "1");
        $(".header-logo-hamburger").css('display','block')
    }else{
        $(".overlay").css("visibility", "hidden");
        $(".overlay").css("opacity", "0");
        $(".header-logo-hamburger").css('display','none')
    }
}


$(document).scroll(function() {
    var value=$(document).scrollTop();

     if(value >= 30 ){
        document.getElementsByClassName("main-header-section").style.top = "0px";
     }else {
        document.getElementsByClassName("main-header-section").style.top = "30px";
     }
});

