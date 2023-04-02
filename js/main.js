// 로딩 mask , visual 텍스트 효과
    window.addEventListener("DOMContentLoaded", () => {
        $('.mask').addClass('on');
        setTimeout(() => {
            $('.word').addClass('on');
        }, 500);
        setTimeout(() => {
            $('.mask').addClass('hidden');
            $('.word').addClass('on');
        }, 800);
        const visualTimeLine = gsap.timeline({ repeat: 1,});

        document.querySelectorAll(".word").forEach((word) => {
            visualTimeLine.add(txtRectMotion(word), "-=90%"); // add  동시에 작동
        });

        function txtRectMotion(element) {
            const rect = element.querySelector(".rect");
            const tl = gsap.timeline();
            tl.from(element, {
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
                "-=50%" //직전 rect 50% 경과시 실행됨.
            )
            return tl;
        }
    });
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
        "(min-width:1024px)": function () {
            gsap.to(".one1",{
                scrollTrigger:{
                    trigger:".visual",
                    start:"top top", 
                    end:"bottom center",
                    scrub:1,
                    // markers: true,
                },
                yPercent:25
            });
            gsap.to(".one2",{
                scrollTrigger:{
                    trigger:".visual",
                    start:"top 50%", 
                    end:"bottom top",
                    scrub:1,
                    // markers: true,
                },
                width: '800px',
                height: '800px',
            });

            const aboutBg =  gsap.timeline({
                scrollTrigger: {
                    trigger: '.profile',
                    start: 'top 50%',
                    end:"bottom bottom",
                },
            });
            aboutBg
            .set('.about .txt_bg', { duration: 1, x: '-100%' })
            .to('.about .txt_bg',{duration: 1, x: 0})
            
            gsap.to(".about .txt_bg",{
                scrollTrigger:{
                    trigger: ".portfolio",
                    scrub: 1,
                    start: "top 70%", 
                    toggleClass: { targets: '.about .txt_bg', className: 'bdRadius'},
                },
            });

            gsap.to(".about .txt_line p",{
                scrollTrigger:{
                    trigger: ".profile",
                    toggleClass: { targets: '.txt_line p', className: 'active'},
                    scrub: 1,
                    start: "top 60%", 
                },
            });
            // 포트폴리오 백그라운드 텍스트
            gsap.to(".portfolio .txt_box .bg_txt1",{
                scrollTrigger:{
                    trigger: ".portfolio",
                    scrub: 1,
                    start: "top 60%", 
                },
                xPercent: 20
            });

            gsap.to(".portfolio .txt_box .bg_txt2",{
                scrollTrigger:{
                    trigger: ".portfolio",
                    scrub: 1,
                    start: "top 60%", 
                },
                xPercent: -20
            });

            gsap.to(".portfolio .moreBtn", {
                backgroundPositionX: '0%',
                stagger: 0.5,
                scrollTrigger:{
                    trigger: ".portfolio",
                    scrub: 1,
                    start: "top 50%",
                    end: "bottom bottom"
                },
            });

             gsap.to(".contact .txt_line h2",{
                scrollTrigger:{
                    trigger: ".contact",
                    toggleClass: { targets: '.contact .txt_line h2', className: 'active'},
                    scrub: 1,
                    start: "top 60%", 
                },
            });
        }
        
    });  
function updateIndicator(entries, observer) {
  const indicator = document.querySelector('.indicator');

  entries.forEach(entry => {
    const index = entry.target.textContent.replace('#', '');
    const el = indicator.querySelector(`[data-index="${index}"]`);    
    el.classList.toggle('on', entry.isIntersecting);
  });
}

const io = new IntersectionObserver(updateIndicator);

Array.from(document.querySelectorAll('.section')).forEach(box => {
  io.observe(box);
});