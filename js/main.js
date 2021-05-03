// бургер
const headerBurger = document.querySelector('.header__burger');
const burgerIcon = document.querySelector('.burger__icon')
const headerMenu = document.querySelector('.header__hide-menu')
const headerMenuBg = document.querySelector('.header__hide-menu--bg')
const bodyLock = document.querySelector('body')

// Клик по кнопке для скрытия / показа фильтра и изменения  иконки
headerBurger.onclick = function(){
    burgerIcon.classList.toggle('burger__icon--active');
    headerMenu.classList.toggle('header__hide-menu--active');
    headerMenuBg.classList.toggle('header__hide-menu--bg--active');
    bodyLock.classList.toggle('body__lock');
};

const listItem = document.querySelectorAll('.list__item');
if(listItem) {
    for (let list of listItem) {
        const itemLink = list.querySelector('.list__item-link');

        if(itemLink) {
            itemLink.addEventListener('click', function(){
                burgerIcon.classList.remove('burger__icon--active');
                headerMenu.classList.remove('header__hide-menu--active');
                headerMenuBg.classList.remove('header__hide-menu--bg--active');
                bodyLock.classList.remove('body__lock');
            })
        }
            
    }
};

// модалка banner
const bannerModal = document.querySelector(".banner__modal-wrap");
const btnBanner = document.querySelector(".btn__banner");
const modalBtn = document.querySelector(".banner__modal-btn");

btnBanner.onclick = function(){
    bannerModal.style.display = "block";
    bodyLock.classList.add('body__lock');
}

modalBtn.onclick = function(){
    bannerModal.style.display = "none";
    bodyLock.classList.remove('body__lock');
}

window.onclick = function(event) {
    if (event.target == bannerModal) {
        bannerModal.style.display = "none";
        bodyLock.classList.remove('body__lock');
    }
}

// модалка cost
const costModal = document.querySelector(".cost__modal-wrap");
const btnCost = document.querySelector(".btn__cost");
const modalBtnCost = document.querySelector(".cost__modal-btn");

btnCost.onclick = function(){
    costModal.style.display = "block";
    bodyLock.classList.add('body__lock');
}

modalBtnCost.onclick = function(){
    costModal.style.display = "none";
    bodyLock.classList.remove('body__lock');
}

window.onclick = function(event) {
    if (event.target == costModal) {
        costModal.style.display = "none";
        bodyLock.classList.remove('body__lock');
    }
}

// модалка footer cost
const footerCostModal = document.querySelector(".footer__cost-modal-wrap");
const btnCostfooter = document.querySelector(".btn__cost2");
const modalBtnCostFooter = document.querySelector(".footer-cost__modal-btn");

btnCostfooter.onclick = function(){
    footerCostModal.style.display = "block";
    bodyLock.classList.add('body__lock');
}

modalBtnCostFooter.onclick = function(){
    footerCostModal.style.display = "none";
    bodyLock.classList.remove('body__lock');
}

window.onclick = function(event) {
    if (event.target == footerCostModal) {
        footerCostModal.style.display = "none";
        bodyLock.classList.remove('body__lock');
    }
}

// модалка footer call
const footerCallModal = document.querySelector(".footer__call-modal-wrap");
const btnCallfooter = document.querySelector(".btn__call");
const modalBtnCallFooter = document.querySelector(".footer-call__modal-btn");

btnCallfooter.onclick = function(){
    footerCallModal.style.display = "block";
    bodyLock.classList.add('body__lock');
}

modalBtnCallFooter.onclick = function(){
    footerCallModal.style.display = "none";
    bodyLock.classList.remove('body__lock');
}

window.onclick = function(event) {
    if (event.target == footerCallModal) {
        footerCallModal.style.display = "none";
        bodyLock.classList.remove('body__lock');
    }
}

// карусель
$('.owl-carousel').owlCarousel({
    center: true,
    stagePadding: 200,
    // items:3,
    loop:true,
    nav:true,
    pagination: true,
    margin:30,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        1219: {
            items:2,
            stagePadding: 0,
            center: false
        },
        1800: {
            items:2,
            stagePadding: 200,
            center: true
        }

    }
});

// фиксируем шапку
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 0){
//         $('header').addClass("sticky");
//     }
//     else{
//         $('header').removeClass("sticky");
//     }
// });