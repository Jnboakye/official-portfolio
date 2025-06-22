const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

var typed = new Typed('.multiple', {
    strings: ['A web developer based in Accra', 'A freelancer', 'And an entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const navLinksItems = document.querySelectorAll('.nav-link');
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
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateNav);
updateNav();

function downloadCV() {
    window.open('documents/cv.pdf', '_blank');
}