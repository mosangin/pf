// 로딩 mask , visual 텍스트 효과
    window.addEventListener("DOMContentLoaded", () => {
        $('.mask').addClass('on');
        setTimeout(function(){
            $('.mask').addClass('hidden');
        }, 800);
        const tl = gsap.timeline({
            repeat: 0,
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
                "-=50%"
            );
            return tl;
        }
    });

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
        }
    });  
