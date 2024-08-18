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
          scale: 0, width: "45%", height: "50%",  left: "5.5%", top: "25%",
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
          .to(".about-img", { scale: 2, left: "27.5%", top: "25%", duration: 2, },"-=1.5")
          .to(".about-img", { opacity: 0, duration: 2 }, "-=0.5")
        
          .to(".works-img", { scale: 2, left: "52.5%", top: "25%", duration: 1, zIndex: 300}, "-=0.5")
          .to(".works-img", { opacity: 0, duration: 0.2 }, "-=0.2")
          .to(".contact-img", { scale: 0.8, left: "-5%", top: "5%", duration: 1, zIndex: 500 }, "-=0.5")
      });

      

    const swiper = new Swiper(".swiper", {
        // ナビボタン
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });


// ナビゲーションから該当箇所へスクロール

// DOM取得-TOP-
// const $topimg = document.getElementById('topimg');
// const $top = document.getElementById('top');     

// // id=top のブラウザの上からの位置を取得
// const topTop = $top.getBoundingClientRect().top;

// // id="topimg"を持つ要素がクリックされた場合
// $topimg.addEventListener('click',()=> {

//   // スクロール
//   window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//   });
// })

// // DOM取得-about
// const $aboutimg = document.getElementById('aboutimg');
// const $about = document.getElementById('about');     

// // id=text のブラウザの上からの位置を取得
// const aboutTop = $contact.getBoundingClientRect().top;

// // id="text-link"を持つ要素がクリックされた場合
// $aboutimg.addEventListener('click',()=> {

//   // スクロール
//   window.scrollTo({
//         top: 1000,
//         behavior: 'smooth'
//   });
// })

// // DOM取得-works-
// const $worksimg = document.getElementById('worksimg');
// const $works = document.getElementById('works');     

// // id=text のブラウザの上からの位置を取得
// const worksTop = $contact.getBoundingClientRect().top;

// // id="text-link"を持つ要素がクリックされた場合
// $worksimg.addEventListener('click',()=> {

//   // スクロール
//   window.scrollTo({
//         top: 2000,
//         behavior: 'smooth'
//   });
// })

// DOM取得
const $contactimg = document.getElementById('contactimg');
const $contact = document.getElementById('contact');     

// id=contact のブラウザの上からの位置を取得
const contactTop = $contact.getBoundingClientRect().top;

// id="contactimg"を持つ要素がクリックされた場合
$contactimg.addEventListener('click',()=> {

  // スクロール
  window.scrollTo({
        top: 4000,
        behavior: 'smooth'
  });
})