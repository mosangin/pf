// visual 텍스트 효과
window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    repeat: 1,
  });

  document.querySelectorAll(".word").forEach((word) => {
    tl.add(txtRectMotion(word), "-=90%"); // 동시에 작동
  });

  function txtRectMotion(element) {
    const rect = element.querySelector(".rect");
    const tl = gsap
      .timeline()
      .from(element, {
        y: 16,
        opacity: 0,
        duration: 0.75,
        ease: "power4.out",
      })
      .set(rect, { opacity: 0 })
      .to(
        rect,
        {
          x: "105%",
          duration: 1,
          ease: "power4.out",
        },
        "-=55%"
      );
    return tl;
  }
});

//스크롤시 header
$(function () {
  var shrinkHeader = 300;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

var pull = $(".fas");
menu = $(".var");
menuHeight = menu.height();

$(pull).on("click", function (e) {
  e.preventDefault();
  menu.slideToggle();
});
$(window).resize(function () {
  var w = $(window).width();
  if (w > 768 && menu.is(":hidden")) {
    menu.removeAttr("style");
  }
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

$("#nav a, .var a").click(function () {
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
AOS.init({
  offset: 300,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
