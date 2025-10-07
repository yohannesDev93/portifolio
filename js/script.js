// let headLinks = document.querySelectorAll("head link")
// console.log(headLinks[6].href)
// headLinks[6].href = "css/style.css"
// document.querySelector(".toggle-btn").addEventListener("click", () => {
//     console.log("clicked")
//     if (headLinks[6].href === "http://127.0.0.1:5500/portifolio/css/style.css") {
//         headLinks[6].href = "css/light.css"
//     } else {
//         headLinks[6].href = "css/style.css"
//     }
// })

let dropDown = document.querySelectorAll(".project-info-drop-down");
let projectDetails = document.querySelectorAll(".project-details");
for (let i = 0; i < dropDown.length; i++){
    dropDown[i].addEventListener("click", () => {
        for (let j = 0; j < projectDetails.length; j++){
            if (i === j) {
                projectDetails[j].classList.toggle("hidden")
            } else {
                projectDetails[j].classList.add("hidden")
            }
            if (projectDetails[j].classList.contains("hidden")) {
                dropDown[j].children[1].className="fas fa-arrow-circle-down"
            } else {
                dropDown[j].children[1].className="fas fa-arrow-circle-up"
            }
            
        }
        
    })
}
// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar active state on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typewriter effect with "I am ..."
const texts = [
    
    "Full Stack Developer.",
    "Freelancer.",
    "Problem Solver.",
    "Senior Javascript Developer.",
    "Senior React Developer."
    
];




const target = document.getElementById("type-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const prefix = "I Am ";

function typeWriter() {
    const currentText = texts[textIndex];
    const fullText = prefix + currentText;

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    target.textContent = fullText.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === fullText.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === prefix.length) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
    }

    setTimeout(typeWriter, speed);
}

typeWriter();

