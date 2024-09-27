// ページがロードされたときの処理
window.addEventListener("load", function () {
    // ローダーの非表示
    const loaderElement = document.getElementById('loader_wrap');
    if (loaderElement) {
        loaderElement.classList.add('loaded');
    }

    // スクロールされすぎないように調整
//     const maxScroll = 4000;
//     if (window.scrollY > maxScroll) {
//       window.scrollTo(0, maxScroll);
// };

    // GSAPプラグインの登録
    gsap.registerPlugin(ScrollTrigger);

    // セレクタの取得
    const area = document.querySelector(".js-area");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;

    // 各アイテムのzIndexを設定
    items.forEach((item, i) => {
        gsap.set(item, { zIndex: num - i });
    });

    // 初期状態の設定
    const initialSettings = {
        ".welcome": { scale: 1, left: "10%", top: "20%" },
        ".present": { scale: 1, width: "30%", height: "50%", left: "15%", top: "35%" },
        ".home-img": { scale: 1, width: "40%", left: "52.5%", top: "18%" },
        ".about-img": { scale: 0, width: "40%", height: "50%", left: "5.5%", top: "35%" },
        ".works-img": { scale: 0, width: "45%", height: "50%", left: "0.5%", top: "25%" },
        ".contact-img": { scale: 0, width: "100%", height: "100%", left: "12.5%", top: "25%" }
    };

    for (const [selector, settings] of Object.entries(initialSettings)) {
        gsap.set(selector, settings);
    }

    // GSAPタイムラインの作成
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: area,
            start: "top top",
            end: "+=4000px",
            scrub: true,
            pin: true
        }
    });

    // タイムラインアニメーションの設定
    tl.to(".welcome", { opacity: 0, duration: 2 }, "-=0.2")
      .to(".present", { scale: 0.5, left: "30.5%", top: "-5%", duration: 1, zIndex: 100 }, "-=0.5")
      .to(".home-img", { scale: 2, left: "120.5%", top: "45%", duration: 1 }, "-=0.5")
      .to(".home-img", { opacity: 0, duration: 1 }, "-=0.2")
      .to(".about-img", { scale: 1.3, left: "15%", top: "30%", duration: 2 }, "-=1.5")
      .to(".about-img", { scale: 1.3, left: "15%", top: "30%", duration: 5 })
      .to(".about-img", { scale: 2, left: "15%", top: "30%", duration: 2 })
      .to(".about-img", { opacity: 0, duration: 2 }, "-=0.5")
      .to(".works-img", { scale: 1.1, left: "13%", top: "20%", duration: 1, zIndex: 400 }, "-=0.5")
      .to(".works-img", { scale: 1.1, left: "13%", top: "20%", duration: 5, zIndex: 400 })
      .to(".works-img", { scale: 2, left: "13%", top: "20%", duration: 1, zIndex: 400 })
      .to(".works-img", { opacity: 0, duration: 1 }, "-=0.2")
      .to(".contact-img", { scale: 0.8, left: "0%", top: "5%", duration: 2, zIndex: 500 }, "-=0");

    // Swiperの初期化
    new Swiper(".swiper", {
        direction: "vertical",
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        allowTouchMove: false,
        threshold: 999999
    });

    // スクロールでの画像スケールの変更
    const img = document.querySelector('.present img');
    const startScroll = 300; // スクロール開始位置（px）
    const minScale = 0.5; // 最小スケール値

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const scale = scrollPosition > startScroll
            ? Math.max(minScale, 1 - (scrollPosition - startScroll) / 300)
            : 1;
        if (img) {
            img.style.transform = `scale(${scale})`;
        }
    });

    // スクロールリンクの設定
    const scrollTo = (position) => window.scrollTo({ top: position, behavior: 'smooth' });

    document.getElementById('topimg')?.addEventListener('click', () => scrollTo(0));
    document.getElementById('aboutimg')?.addEventListener('click', () => scrollTo(1650));
    document.getElementById('worksimg')?.addEventListener('click', () => scrollTo(3300));
    document.getElementById('contactimg')?.addEventListener('click', () => scrollTo(4000));
});