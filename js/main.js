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
                    start:"top top", 
                    end:"bottom center",
                    scrub:1,
                    // markers: true,
                },
                xPercent:-25
            });
            gsap.to(".bg", {
                autoAlpha: 1,
		        ease: 'power1.in',
                scrollTrigger:{
                    trigger:".profile",
                    start: 'bottom bottom',
                    end: 'bottom 100px',
                    scrub: 1,
                    backgroundColor: "#333333",
                    markers: true,
                },
                
            });
        }
    });  
