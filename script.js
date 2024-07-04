document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});

// Fade-in effect on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s forwards';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
