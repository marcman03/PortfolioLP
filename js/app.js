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



document.addEventListener("DOMContentLoaded", function() {
  // Replace this with your actual birthdate
  const birthDate = new Date("2003-11-16"); 

  function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    // Adjust if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }

  // Set the age in the span with id "age"
  const ageSpan = document.getElementById("age");
  ageSpan.textContent = calculateAge(birthDate);
});


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

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(carousel => {
      let startX = 0;
      let currentIndex = 0;
      const items = carousel.querySelectorAll('.carousel-item');

      
      items[0].style.display = 'block';

   
      function showSlide(index) {
          items.forEach((item, i) => {
              item.style.display = i === index ? 'block' : 'none';
          });
      }


      carousel.addEventListener('touchstart', function (e) {
          startX = e.touches[0].clientX;
      });

      carousel.addEventListener('touchend', function (e) {
          const endX = e.changedTouches[0].clientX;
          const distance = endX - startX;

          if (distance < -50) {
             
              currentIndex = (currentIndex + 1) % items.length;
              showSlide(currentIndex);
          } else if (distance > 50) {
              
              currentIndex = (currentIndex - 1 + items.length) % items.length;
              showSlide(currentIndex);
          }
      });
  });
});
