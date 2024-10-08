// script.js
const container = document.querySelector('.home');
const mountain = document.querySelector('.parallax-item-mountain');
const background = document.querySelector('.parallax-item-background');
const titleh1 = document.querySelector('.parallax-title-h1'); 
const titleh2 = document.querySelector('.parallax-title-h2');
container.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const offsetX = (mouseX / window.innerWidth - 0.5) * 30;
    const offsetY = (mouseY / window.innerHeight - 0.5) * 30;
    
    mountain.style.transform = `translateX(${offsetX}px)`;
    background.style.transform = `translateX(${offsetX / 2}px)`;

    
    titleh1.style.transform = `translateX(${offsetX / 1.5}px)`;
    titleh2.style.transform = `translateX(${offsetX /1.2 }px)`;
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const lightMask = document.querySelector("[data-light-mask]");

window.addEventListener("mousemove",function(e){
    const posX =e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    lightMask.style.display = 'block';
    lightMask.animate([
        { left: `${posX}px`, top: `${posY}px` }
    ], { duration: 100, fill: "forwards"});

});



let currentSlideIndex = {};


function moveSlide(n, carouselId) {
  const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
  
  
  if (!currentSlideIndex[carouselId]) {
    currentSlideIndex[carouselId] = 0;
  }
  
 
  currentSlideIndex[carouselId] = (currentSlideIndex[carouselId] + n + slides.length) % slides.length;
  
  
  slides.forEach(slide => slide.style.display = 'none');
  
  
  slides[currentSlideIndex[carouselId]].style.display = 'block';
}

function initCarousels() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach(carousel => {
    const carouselId = carousel.id;
    
 
    moveSlide(0, carouselId);
  });
}


document.addEventListener("DOMContentLoaded", function() {
  initCarousels();
});



function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  const dayDiff = now.getDate() - birth.getDate();

  
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }
  return age;
}


const birthDate = '2003-11-16';
const age = calculateAge(birthDate);



document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav .a');
  const sections = document.querySelectorAll('section'); 
  const buffer = 200; 

  
  function onScroll() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - buffer)) {
      currentSection = "contact"; 
    }

    navLinks.forEach(link => {
      link.classList.remove('selected');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('selected');
      }
    });
  }


  window.addEventListener('scroll', onScroll);
});
