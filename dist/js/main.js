$(function(){





// -------start desctop dropdown menu--------
if(window.innerWidth > 992) {

    $('.header__menu ul li').hover(function () {
      $('.dropdown-menu-wrapper',this).css('display', 'block');
    }, function () { 
      $('.dropdown-menu-wrapper',this).css('display', 'none'); 
    });
 }	

// ----------end desctop dropdown menu---------

// -------start mobil dropdown menu--------
if(window.innerWidth < 992) {
 $('.header__menu ul li').click(function(){	
		$(this).toggleClass('active');		
	});
 $('.header__menu--left .menu__item-drop-down').click(function(){	
		$('.header__menu--right').toggleClass('active');		
	});
}
// -------end mobil dropdown menu--------

// -------start mobil menu menu--------
$('.header__menu-button').click(function(){	
		$('.header__menu ul').toggleClass('open');	
		$('.header').toggleClass('active');	
		$(this).toggleClass('active');
	});
// -------start mobil menu menu--------

// ------start sticky header------
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});
//-------end sticky header--------

$(window).scroll(function() {
if ($(this).scrollTop() > 100){
$('.scroll-down').hide();
}
else{
$('.scroll-down').show();
}
});



$('.media__play-btn').click(function(){ 
    $(this).toggleClass('active');
    //  $('.media__slider .items_slider--video').toggleClass('active');
    // $('.slider-nav .items_slider--video').toggleClass('active');
  });


$('.slider-nav .items_slider--video').click(function(){ 
   // $('.media__play-button').toggleClass('active');
     $('.media__slider .items_slider--video').toggleClass('active');
    $('.slider-nav .items_slider--video').toggleClass('active');
  });
$('.media__slider .items_slider--video').click(function(){ 
   // $('.media__play-button').toggleClass('active');
    $('.slider-nav .items_slider--video').toggleClass('active');
     $(this).toggleClass('active');
  });

$('.dropdown-list__item-header').click(function(){ 
    $(this).parent().toggleClass('active');

  });


$(".page-tab").click(function() {
  $(".page-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".page-tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".page-tab--media").click(function() {
  $(".page-tab--media").removeClass("active").eq($(this).index()).addClass("active");
  $(".page-tab__item--media").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".faq-tab").click(function() {
  $(".faq-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".faq-tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");





});

$(function(){
 $('.slider').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 4,

responsive: [
{
    breakpoint: 768,
    settings: {
    slidesToShow: 3,
    centerPadding: '50px',
    centerMode: true
    }
  },
   
   {
    breakpoint: 600,
    settings: {
    	slidesToShow: 2,
    centerPadding: '50px',
    centerMode: true
     
     
    }
  },
  {
    breakpoint: 480,
    settings: {
    	slidesToShow: 1,
    centerPadding: '50px',
    centerMode: true   
     
    }
  },
  ]

});
if(window.innerWidth > 768) {
 $('.explore__slider').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 1,
centerPadding: '50px',
centerMode: true,
autoplay: true,

responsive: [
{
    breakpoint: 768,
    settings: {
    slidesToShow: 1,
    centerPadding: '50px',
    centerMode: true
    }
  },
   
   {
    breakpoint: 600,
    settings: {
    	slidesToShow: 1,
    centerPadding: '50px',
    centerMode: true
     
     
    }
  },
  {
    breakpoint: 480,
    settings: {
    	slidesToShow: 1,
    centerPadding: '50px',
    centerMode: true   
     
    }
  },
  ]

});

}

if(window.innerWidth < 768) {
 $('.slider-all-news').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 3,

responsive: [
{
    breakpoint: 768,
    settings: {
    slidesToShow: 3,
    centerPadding: '50px',
    centerMode: true
    }
  },
   
   {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
    centerPadding: '50px',
    centerMode: true
     
     
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    centerPadding: '50px',
    centerMode: true   
     
    }
  },
  ]

});

}

 $('.jobs__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,  
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

 $('.media__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,  
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.media__slider',  
    focusOnSelect: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
{
    breakpoint: 768,
    settings: {
    slidesToShow: 4,
    centerPadding: '30px',
    centerMode: true
    }
  },
  {
    breakpoint: 600,
    settings: {
    slidesToShow: 3,
    centerPadding: '30px',
    centerMode: true
    }
  },
  {
    breakpoint: 360,
    settings: {
    slidesToShow: 2,
    centerPadding: '30px',
    centerMode: true
    }
  },

  ]
  });

	});


//--------start popup--------------


$('.reg-link').click(function(e){
   e.preventDefault();
    $('.reg-popup').fadeIn();
    $('.login-popup').fadeOut();
    $('.logo').addClass('active');


  })
$('.close').click(function(e){
    $('.reg-popup').fadeIn();
  })


jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".reg-popup"); 
    var divWrap = $(".login-popup-wrapper");
    if (!divWrap.is(e.target) 
        && divWrap.has(e.target).length === 0) {
      div.fadeOut();

    }
  });
});

//---------start video popup--------------
$('.video-popup-link').click(function(e){
   e.preventDefault();
    $('.video-popup').show();

  })
$('.close').click(function(e){
    $('.video-popup').hide();
  })


jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".video-popup"); 
    var divWrap = $(".video-popup-wrapper");
    if (!divWrap.is(e.target) 
        && divWrap.has(e.target).length === 0) {
      div.hide();

    }
  });
});
//-------------end video popup---------------


$(".popup__tabs .tab").click(function() {
  $(".popup__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".popup__tabs .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.registr-link').click(function(e){
  $('.tab_item').hide();
    $('.tab_item--reg').show();
    $('.popup__tabs .tab-log').removeClass('active');
     $('.tab-reg').addClass('active');
    
    
  })

$('.log-link').click(function(e){
  $('.tab_item').hide();
    $('.tab_item--login').show();
    $('.popup__tabs .tab-reg').removeClass('active');
     $('.tab-log').addClass('active');
    
    
  })

//----------end popup---------------




const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()    
    const blockID = anchor.getAttribute('href').substr(1)  
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
$(document).on('click', '.media__play-button', function() {
  var $video = $('#video'),
    src = $video.attr('src');
 
  $video.attr('src', src + '&autoplay=1');
 //$(this).hide();
 $(this).parent().find('.media__pause-button').show();

});
$(document).on('click', '.items_slider--photo, .next, .prev', function() {
  var $video = $('#video'),
    src = $video.attr('src');
 
  $video.attr('src', src + 'pause');
 //$(this).hide();
 $('.media__play-button').show();

});



// $(document).on('click', '.media__play-button.active', function() {
//   var $video = $('#video'),
//     src = $video.attr('src');
 
//   $video.attr('src', src + '&pause');
//  // $('.media__play-button').addClass('active');

// });
// $(document).on('click', '.media__play-button', function() {
//   var $video = $('#video'),
//     src = $video.attr('src');
 
//   $video.attr('src', src + '&autoplay=1');
//  $('.media__play-button').addClass('active');

// });