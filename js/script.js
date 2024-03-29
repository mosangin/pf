$(function () {

  //ios 100vh
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

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

   //menu click
  gsap.registerPlugin(ScrollTrigger);
   menuMo = gsap.timeline({
            defaults:{
                ease:'ease-in-out'
            }
        })
    $('.nav ul li a, .nav_box ul li a').click(function(e){
      e.preventDefault();

      trgt = $(this).data('target');
      trgtOffset = $(trgt).offset().top-70;

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

$(".pf_more").each(function(index) {
    var target = ".view_cont[data-id='" + (index + 1) + "']"; // 공통된 클래스(.view_cont)와 data-id 속성값을 사용해서 선택자를 만듭니다.
    $(this).attr("data-target", target);
});
$(".m_pf_more").each(function(index) {
    var target = ".view_cont[data-id='" + (index + 1) + "']"; // 공통된 클래스(.view_cont)와 data-id 속성값을 사용해서 선택자를 만듭니다.
    $(this).attr("data-target", target);
});
$(".view_cont").each(function(index) {
  $(this).attr("data-id", index + 1);
});
$(".pf_more").click(function() {
  var target = $(this).data("target"); // 클릭한 버튼의 data-target 속성값
  $(target).show().siblings(".view_cont").hide(); // 해당 view_cont 엘리먼트를 보이고, 다른 view_cont 엘리먼트는 숨김
  $(".pf_modal").show(); 
  $('body').addClass('no_scroll')
});

$(".m_pf_more").click(function() {
  var target = $(this).data("target"); 
  $(target).show().siblings(".view_cont").hide(); 
  $(".pf_modal").show(); 
  $('body').addClass('no_scroll')
});

$(".pf_close").click(function() {
    $(".pf_modal").hide(); 
    $('body').removeClass('no_scroll')
  });

// scroll Top
$(".top").click(function (e) {
  $("html,body").stop().animate({ scrollTop: 0 }, 1000, "swing");
  e.preventDefault();
});

AOS.init();




