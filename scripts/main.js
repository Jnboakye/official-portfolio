/*const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});
/* 
const typed = new Typed('.multiple', {
    Strings: ['Front-End Developer', 'Freelancer', 'Entreprenuer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
*/

var typed = new Typed('.multiple', {

    strings: ['A web developer based in Accra', 'A freelancer', 'And an entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function getActiveSection() {
    let activeSection = null;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            activeSection = section.id;
        }
    });
    return activeSection;
}

function updateNav() {
    const activeSection = getActiveSection();

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateNav);
updateNav(); // Initial call to set the active link on page load

function animateProgressBar(targetPercentage, duration) {
    const progressBar = document.getElementById('progressBar');
    let currentPercentage = 0;
    const increment = targetPercentage / (duration / 10);

    const animationInterval = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(animationInterval);
        }
        progressBar.style.width = currentPercentage + '%';
    }, 10);
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const progressBarContainer = document.getElementById('progressBarContainer');
let animationStarted = false;

window.addEventListener('scroll', function () {
    if (isElementInViewport(progressBarContainer) && !animationStarted) {
        animateProgressBar(75, 2000); // Animate to 75% in 2 seconds
        animationStarted = true;
    }
});


// const hamburgerBtn = document.getElementById('hamburger-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// hamburgerBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });


