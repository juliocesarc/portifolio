window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Service section - modal

const serviceModals = document.querySelectorAll(".services-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtn.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () =>{
        serviceModals.forEach(modalView => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - modal

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () =>{
        portfolioModals.forEach(portfolioModalView => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });