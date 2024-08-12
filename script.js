window.onload = function () {
    const loader_element = document.getElementById('loader_wrap');
    loader_element.classList.add('loaded');
    };

window.addEventListener("load", function(){

        //プラグインを定義
        gsap.registerPlugin(ScrollTrigger);
      
        const area  = document.querySelector(".js-area");
        const items = document.querySelectorAll(".js-item");
        const num   = items.length;
      
        //位置とscaleを指定
        items.forEach((item, i) => {
          gsap.set(item, {
            zIndex : num - i,
          });
        });
       
        
        gsap.set(".welcome", {
          scale: 1, left: "10%", top: "20%",
        });
        gsap.set(".present", {
          scale: 1, width: "30%", height: "50%", left: "15%", top: "35%",
        });
        gsap.set(".home-img", {
          scale: 1, width: "40%", left: "52.5%", top: "15%",
        });
        gsap.set(".about-img", {
          scale: 0, width: "100%", height: "50%", left: "5.5%", top: "35%",
        });
        gsap.set(".works-img", {
          scale: 0, width: "45%", height: "50%",  left: "2.5%", top: "25%",
        });
        gsap.set(".contact-img", {
          scale: 0, width: "100%", height: "100%", left: "12.5%", top: "25%",
        });
      
        //タイムライン
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: area, //トリガー
            start: "top top", //開始位置
            end: "+=2000", //終了位置
            scrub: true, //ピン留め
            pin: true, //スクロール量に応じて動かす
          }
        });
      
        //要素を順に拡大する
        tl.to(".welcome", { opacity: 0, duration: 2 }, "-=0.2")
          .to(".present", { scale: 0.5, left: "30.5%", top: "-5%", duration: 1 },"-=0.5" )
        //   .to(".js-waku01", { scale: 1.3, duration: 1})
          .to(".home-img", { scale: 2, left: "110.5%", top: "45%", duration: 1 }, "-=0.5")
          .to(".home-img", { opacity: 0, duration: 2 }, "-=0.2")
          .to(".about-img", { scale: 2, left: "27.5%", top: "25%", duration: 1 },"-=0.5")
          .to(".about-img", { opacity: 0, duration: 0.4 }, "-=0.2")
        
          .to(".works-img", { scale: 2, left: "92.5%", top: "25%", duration: 1 }, "-=0.5")
          .to(".works-img", { opacity: 0, duration: 0.2 }, "-=0.2")
          .to(".contact-img", { scale: 0.8, left: "-5%", top: "5%", duration: 1 }, "-=0.5")
      });

    
      