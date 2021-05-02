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

// модалка
const bannerModal = document.querySelector(".banner__modal-wrap");
const btnBanner = document.querySelector(".btn__banner");

btnBanner.onclick = function(){
    
    bannerModal.style.display = "block";
    bodyLock.classList.add('body__lock');
}

window.onclick = function(event) {
    if (event.target == bannerModal) {
        bannerModal.style.display = "none";
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
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
