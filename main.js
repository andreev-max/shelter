var burger = document.querySelector(".header-burger"),
    headerMenu = document.querySelector(".header-menu"),
    header = document.querySelector(".header"),
    burgerMenu = document.querySelector('.header-menu-burger'),
    body = document.querySelector("body"),
    overlay = document.querySelector(".overlay"),

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
    popup3 = document.querySelector(".popup3");


burger.addEventListener("click", () => {
    burger.classList.toggle("header-burger-active");
    headerMenu.classList.toggle("header-menu-active");
    header.classList.toggle("header-active");
    burgerMenu.classList.toggle("header-menu-burger-active");
    body.classList.toggle("body-active");
    overlay.classList.toggle("overlay-active");
});

overlay.addEventListener("click", () => {
    burger.classList.toggle("header-burger-active");
    headerMenu.classList.toggle("header-menu-active");
    header.classList.toggle("header-active");
    burgerMenu.classList.toggle("header-menu-burger-active");
    body.classList.toggle("body-active");
    overlay.classList.toggle("overlay-active");
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