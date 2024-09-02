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
          scale: 1, width: "40%", left: "52.5%", top: "18%",
        });
        gsap.set(".about-img", {
          scale: 0, width: "40%", height: "50%", left: "5.5%", top: "35%",
        });
        gsap.set(".works-img", {
          scale: 0, width: "45%", height: "50%",  left: "0.5%", top: "25%",
        });
        gsap.set(".contact-img", {
          scale: 0, width: "100%", height: "100%", left: "12.5%", top: "25%",
        });
      
        //タイムライン
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: area, //トリガー
            start: "top top", //開始位置
            end: "+=4000", //終了位置
            scrub: true, //ピン留め
            pin: true, //スクロール量に応じて動かす
          }
        });

      
        //要素を順に拡大する
        tl.to(".welcome", { opacity: 0, duration: 2 }, "-=0.2")
          .to(".present", { scale: 0.5, left: "30.5%", top: "-5%", duration: 1, zIndex: 100 },"-=0.5" )
          .to(".home-img", { scale: 2, left: "120.5%", top: "45%", duration: 1 }, "-=0.5")
          .to(".home-img", { opacity: 0, duration: 1 }, "-=0.2")
          .to(".about-img", { scale: 1.3, left: "19%", top: "30%", duration: 2, },"-=1.5")
          .to(".about-img", { scale: 1.3, left: "19%", top: "30%", duration: 5, })
          .to(".about-img", { scale: 2, left: "19%", top: "30%", duration: 2, })
          .to(".about-img", { opacity: 0, duration: 2 }, "-=0.5")
          .to(".works-img", { scale: 1, left: "13%", top: "20%", duration: 1, zIndex: 400}, "-=0.5")
          .to(".works-img", { scale: 1, left: "13%", top: "20%", duration: 5, zIndex: 400})
          .to(".works-img", { scale: 2, left: "13%", top: "20%", duration: 1, zIndex: 400})
          .to(".works-img", { opacity: 0, duration: 0.2 }, "-=0.2")
          .to(".contact-img", { scale: 0.8, left: "-1.5%", top: "5%", duration: 1, zIndex: 500 }, "-=0")
      });

      

      
        const swiper = new Swiper(".swiper", {
            direction: "vertical",
            spaceBetween: 20,
            slidesPerView: 1, 
            loop: true,
           
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    
// ナビゲーションから該当箇所へスクロール


window.addEventListener('scroll',function(){
  console.log(window.scrollY);
});

// DOM取得-TOP-
const $topimg = document.getElementById('topimg');    
// id="topimg"を持つ要素がクリックされた場合
$topimg.addEventListener('click',()=> {
  // スクロール
  window.scrollTo({
        top: 0,
        behavior: 'smooth'
  });
})

// DOM取得-about
const $aboutimg = document.getElementById('aboutimg');
// id="text-link"を持つ要素がクリックされた場合
$aboutimg.addEventListener('click',()=> {
  
  // スクロール
  window.scrollTo({
        top: 1850,
        behavior: 'smooth'
  });
})

// DOM取得-works-
const $worksimg = document.getElementById('worksimg');
// id="text-link"を持つ要素がクリックされた場合
$worksimg.addEventListener('click',()=> {

  // スクロール
  window.scrollTo({
    top: 3450,
        behavior: 'smooth'
  });
})
    // DOM取得
    const $contactimg = document.getElementById('contactimg');
    
    // id="contactimg"を持つ要素がクリックされた場合
    $contactimg.addEventListener('click',()=> {
    
      // スクロール
      window.scrollTo({
            top: 4000,
            behavior: 'smooth'
      });
})

const img = document.querySelector('.present img');
        const startScroll = 300; // スクロール開始位置（px）
        const minScale = 0.5; // 最小スケール値

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            // スクロール位置が1000pxを超えた場合にスケールを計算
            if (scrollPosition > startScroll) {
                // スケールを計算し、最小スケール値を適用
                const scale = Math.max(minScale, 1 - (scrollPosition - startScroll) / 300);
                img.style.transform = `scale(${scale})`;
            } else {
                // スクロール位置が1000px未満の場合は、スケールを1に設定
                img.style.transform = 'scale(1)';
            }
        });