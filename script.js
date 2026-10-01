// hamburger menu script

const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '✕'; 
    } else {
        mobileMenuBtn.innerHTML = '☰'; 
    }
});

const navItems = document.querySelectorAll('nav a'); 

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); 
        mobileMenuBtn.innerHTML = '☰';
    });
});

// --- TYPEWRITER EFFECT ---
const textToType = "BASED IN THE UK"; 

const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        typewriterElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); 
    }
}

// Starts the typing 0.5 seconds after the page loads
setTimeout(typeWriter, 500);


// --- FEATURED BANNER SLIDESHOW ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


setInterval(() => {

    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
}, 1500); 

// --- DYNAMIC PROJECT IMAGE SWAPPER ---
const listItems = document.querySelectorAll('.list-item');
const projectDisplayImg = document.getElementById('dynamic-project-img');
const projectLink = document.getElementById('dynamic-project-link');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        
        
        listItems.forEach(el => el.classList.remove('active'));
   
        item.classList.add('active');
        
        const newImageSrc = item.getAttribute('data-image');
        const newLinkHref = item.getAttribute('data-link');
        
        projectDisplayImg.style.opacity = 0; 
        
        setTimeout(() => {
            projectDisplayImg.src = newImageSrc;
            projectLink.href = newLinkHref;
            projectDisplayImg.style.opacity = 1;
        }, 300); 
    });
});