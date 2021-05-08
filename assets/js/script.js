window.onload = () => {
    const swiper = new Swiper(".swiper-container", {
        // Количество слайдов на экране
        slidesPerView: 'auto',
        // Центрирование
        centeredSlides: true,
        // Отступ между слайдами
        spaceBetween: 0,
        // Бесконечная прокрутка
        loop: true,
        // Автопрокрутка
        autoplay: {
            delay: 5000,
        },
        speed: 700,
        // Навигация
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};