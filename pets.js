var burger = document.querySelector(".header-burger"),
    headerMenu = document.querySelector(".header-menu"),
    header = document.querySelector(".header"),
    burgerMenu = document.querySelector('.header-menu-burger'),
    body = document.querySelector("body"),
    overlay = document.querySelector(".overlay"),
    logoTitle = document.querySelector(".header-logo-title"),
    logoSubtitle = document.querySelector(".header-logo-subtitle"),

    overlayPopup1 = document.querySelector(".overlay-popup1"),
    popupButton1 = document.querySelector(".popup-close1"),
    card1 = document.querySelector(".card1"),
    popup1 = document.querySelector(".popup1"),

    overlayPopup2 = document.querySelector(".overlay-popup2"),
    popupButton2 = document.querySelector(".popup-close2"),
    card2 = document.querySelector(".card2"),
    popup2 = document.querySelector(".popup2"),

    overlayPopup3 = document.querySelector(".overlay-popup3"),
    popupButton3 = document.querySelector(".popup-close3"),
    card3 = document.querySelector(".card3"),
    popup3 = document.querySelector(".popup3"),
    
    overlayPopup4 = document.querySelector(".overlay-popup4"),
    popupButton4 = document.querySelector(".popup-close4"),
    card4 = document.querySelector(".card4"),
    popup4 = document.querySelector(".popup4"),
    
    overlayPopup5 = document.querySelector(".overlay-popup5"),
    popupButton5 = document.querySelector(".popup-close5"),
    card5 = document.querySelector(".card5"),
    popup5 = document.querySelector(".popup5"),
    
    overlayPopup6 = document.querySelector(".overlay-popup6"),
    popupButton6 = document.querySelector(".popup-close6"),
    card6 = document.querySelector(".card6"),
    popup6 = document.querySelector(".popup6"),
    
    overlayPopup7 = document.querySelector(".overlay-popup7"),
    popupButton7 = document.querySelector(".popup-close7"),
    card7 = document.querySelector(".card7"),
    popup7 = document.querySelector(".popup7"),
    
    overlayPopup8 = document.querySelector(".overlay-popup8"),
    popupButton8 = document.querySelector(".popup-close8"),
    card8 = document.querySelector(".card8"),
    popup8 = document.querySelector(".popup8");



burger.addEventListener("click", () => {
    burger.classList.toggle("header-burger-active");
    headerMenu.classList.toggle("header-menu-active");
    header.classList.toggle("header-active");
    burgerMenu.classList.toggle("header-menu-burger-active");
    body.classList.toggle("body-active");
    overlay.classList.toggle("overlay-active");
    logoTitle.classList.toggle("header-logo-title-active");
    logoSubtitle.classList.toggle("header-logo-subtitle-active");
});

overlay.addEventListener("click", () => {
    burger.classList.toggle("header-burger-active");
    headerMenu.classList.toggle("header-menu-active");
    header.classList.toggle("header-active");
    burgerMenu.classList.toggle("header-menu-burger-active");
    body.classList.toggle("body-active");
    overlay.classList.toggle("overlay-active");
    logoTitle.classList.toggle("header-logo-title-active");
    logoSubtitle.classList.toggle("header-logo-subtitle-active");
});



//POPUP 1

card1.addEventListener("click", () => {
    popup1.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup1.classList.toggle("overlay-popup-active");
});

overlayPopup1.addEventListener("click", () => {
    popup1.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup1.classList.toggle("overlay-popup-active");
});

popupButton1.addEventListener("click", () => {
    popup1.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup1.classList.toggle("overlay-popup-active");
});



//POPUP 2

card2.addEventListener("click", () => {
    popup2.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup2.classList.toggle("overlay-popup-active");
});

overlayPopup2.addEventListener("click", () => {
    popup2.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup2.classList.toggle("overlay-popup-active");
});

popupButton2.addEventListener("click", () => {
    popup2.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup2.classList.toggle("overlay-popup-active");
});



//POPUP 3

card3.addEventListener("click", () => {
    popup3.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup3.classList.toggle("overlay-popup-active");
});

overlayPopup3.addEventListener("click", () => {
    popup3.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup3.classList.toggle("overlay-popup-active");
});

popupButton3.addEventListener("click", () => {
    popup3.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup3.classList.toggle("overlay-popup-active");
});



//POPUP 4

card4.addEventListener("click", () => {
    popup4.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup4.classList.toggle("overlay-popup-active");
});

overlayPopup4.addEventListener("click", () => {
    popup4.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup4.classList.toggle("overlay-popup-active");
});

popupButton4.addEventListener("click", () => {
    popup4.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup4.classList.toggle("overlay-popup-active");
});



//POPUP 5

card5.addEventListener("click", () => {
    popup5.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup5.classList.toggle("overlay-popup-active");
});

overlayPopup5.addEventListener("click", () => {
    popup5.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup5.classList.toggle("overlay-popup-active");
});

popupButton5.addEventListener("click", () => {
    popup5.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup5.classList.toggle("overlay-popup-active");
});



//POPUP 6

card6.addEventListener("click", () => {
    popup6.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup6.classList.toggle("overlay-popup-active");
});

overlayPopup6.addEventListener("click", () => {
    popup6.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup6.classList.toggle("overlay-popup-active");
});

popupButton6.addEventListener("click", () => {
    popup6.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup6.classList.toggle("overlay-popup-active");
});



//POPUP 7

card7.addEventListener("click", () => {
    popup7.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup7.classList.toggle("overlay-popup-active");
});

overlayPopup7.addEventListener("click", () => {
    popup7.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup7.classList.toggle("overlay-popup-active");
});

popupButton7.addEventListener("click", () => {
    popup7.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup7.classList.toggle("overlay-popup-active");
});



//POPUP 8

card8.addEventListener("click", () => {
    popup8.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup8.classList.toggle("overlay-popup-active");
});

overlayPopup8.addEventListener("click", () => {
    popup8.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup8.classList.toggle("overlay-popup-active");
});

popupButton8.addEventListener("click", () => {
    popup8.classList.toggle("popup-open");
    body.classList.toggle("body-active");
    overlayPopup8.classList.toggle("overlay-popup-active");
});