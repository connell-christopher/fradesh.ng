const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;
        const speed = 100;
        const increment = Math.ceil(target / speed);

        let count = 0;

        const updateCounter = () => {

            count += increment;

            if (count >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold:0.4
});

counters.forEach(counter => {
    observer.observe(counter);
});
// ===============================
// Hero Slideshow
// ===============================

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 5000);


const menuButton = document.querySelector(".burger");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});



const gallerySlides = document.querySelectorAll(".gallery-slide");

let galleryIndex = 0;

function changeGallerySlide(){

    gallerySlides[galleryIndex].classList.remove("gallery-active");

    galleryIndex++;

    if(galleryIndex >= gallerySlides.length){

        galleryIndex = 0;

    }

    gallerySlides[galleryIndex].classList.add("gallery-active");

}

setInterval(changeGallerySlide,4000);

//==================================
         NAV-LINK
//==================================

// ==========================
// BURGER MENU
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (!burger) {
        console.error("Burger not found");
        return;
    }

    if (!navLinks) {
        console.error("Nav links not found");
        return;
    }

    burger.addEventListener("click", () => {

        console.log("Burger clicked");

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

});
