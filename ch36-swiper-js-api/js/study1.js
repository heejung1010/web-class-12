document.addEventListener("DOMContentLoaded",function(){

    const station1 = new Swiper('.swiper', {
        directive: `vertical`,
        loop: true,
        slidesPerView:1.2,
        spaceBetween: 20,
        speed:1000,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    const station2 = new Swiper('.swiper2', {
        directive: `horizontal`,
        loop: true,
        slidesPerView:1.2,
        spaceBetween: 20,
        speed:1000,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
      
})