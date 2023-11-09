
// слайды Типы лестниц
const swiper = new Swiper('.typesStairs__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.typesStairs__btn-next',
        prevEl: '.typesStairs__btn-prev',
    },
});
// ===================================================

// Маска номера телефона +7(__)__-__
$(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
});
// =======================================

const swiper1 = new Swiper('.examples__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    

    // Navigation arrows
    navigation: {
        nextEl: '.examples__swiper-button-next',
        prevEl: '.examples__swiper-button-prev',
    },

    pagination: {
        el: '.examples__swiper-pagination',
        clickable: true,
        
    },
});
// ================================================================

const element1One = document.getElementById('element1');
const element1Two = document.getElementById('one');
const element2One = document.getElementById('element2');
const element2Two = document.getElementById('two');
const element3One = document.getElementById('element3');
const element3Two = document.getElementById('three');
const element4One = document.getElementById('element4');
const element4Two = document.getElementById('four');
const element5One = document.getElementById('element5');
const element5Two = document.getElementById('five');
const element6One = document.getElementById('element6');
const element6Two = document.getElementById('six');

element1One.addEventListener('mouseover', () => {
element1Two.style.border = '4px solid #202020';
});

element1One.addEventListener('mouseout', () => {
element1Two.style.border = '2px solid #202020';
});

element2One.addEventListener('mouseover', () => {
element2Two.style.border = '4px solid #202020';
});

element2One.addEventListener('mouseout', () => {
element2Two.style.border = '2px solid #202020';
});

element3One.addEventListener('mouseover', () => {
element3Two.style.border = '4px solid #202020';
});

element3One.addEventListener('mouseout', () => {
element3Two.style.border = '2px solid #202020';
});

element4One.addEventListener('mouseover', () => {
element4Two.style.border = '4px solid #202020';
});

element4One.addEventListener('mouseout', () => {
element4Two.style.border = '2px solid #202020';
});

element5One.addEventListener('mouseover', () => {
element5Two.style.border = '4px solid #202020';
});

element5One.addEventListener('mouseout', () => {
element5Two.style.border = '2px solid #202020';
});

element6One.addEventListener('mouseover', () => {
element6Two.style.border = '4px solid #202020';
});

element6One.addEventListener('mouseout', () => {
element6Two.style.border = '2px solid #202020';
});
// ================================================================