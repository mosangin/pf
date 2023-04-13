$(function () {

  //스크롤시 header
  var fixedHeader = 300;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= fixedHeader) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  // 모바일 메뉴
  $('.nav_btn').click(function () {
    $('.nav_box').toggleClass('active');
    $('.nav_btn').toggleClass('active');
    $('.logo').toggleClass('active');
    $('body').toggleClass('no_scroll');
  })

  // 1024px 초과시 active 클래스 제거
  $(window).on('resize', function(){
    var windowWidth = $(this).width();
    if (windowWidth > 1024) {
      $('.nav_box').removeClass('active');
      $('.logo').removeClass('active');
      $('.nav_btn').removeClass('active');
      $('body').removeClass('no_scroll');
    }
  });

   ////menu click
  gsap.registerPlugin(ScrollTrigger);
   menuMo = gsap.timeline({
            defaults:{
                ease:'ease-in-out'
            }
        })
    $('.nav ul li a, .nav_box ul li a').click(function(e){
      e.preventDefault();

      trgt = $(this).data('target');
      trgtOffset = $(trgt).offset().top;

      // 햄버거 메뉴 클릭시 navbox 닫히면서 이동
      menuMo.reverse();
      $('.nav_box').removeClass('active');
      $('.logo').removeClass('active');
      $('.nav_btn').removeClass('active');
      $('body').removeClass('no_scroll');

      gsap.to('html,body',{
        scrollTop:trgtOffset,
        duration: .5,
      })

    })

});


//맨 위로 올라가기
var sa = 700;
//스크롤 기본폼 window기억!
$(window).scroll(function () {
  var num = $("html,body").scrollTop();
  console.log(num);
  if (num > sa) {
    $(".scroll_show").fadeIn();
  } else {
    $(".scroll_show").fadeOut();
  }
});
$(".top").click(function (e) {
  $("html,body").stop().animate({ scrollTop: 0 }, 1000, "swing");
  e.preventDefault();
});

//스크롤

$(".nav a").click(function () {
  var $elem = $($(this).attr("href"));
  var offset = $elem.offset().top - $(window).height() / 2 + $elem.height() / 2;
  $("html, body").animate(
    {
      scrollTop: offset,
    },
    400
  );
  return false;
});
//배너 화살표 스크롤
$(".scroll a").click(function () {
  var $elem = $($(this).attr("href"));
  var offset = $elem.offset().top - $(window).height() / 2 + $elem.height() / 2;
  $("html, body").animate(
    {
      scrollTop: offset,
    },
    600
  );
  return false;
});

//스크롤할때 자연스럽게
AOS.init();




