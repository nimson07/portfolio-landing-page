window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY > 550) { // Change this value to adjust when it changes
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const typingText = document.getElementById('typingText');

function resetTypingAnimation() {
    typingText.style.animation = 'none'; // Reset animation
    // Trigger reflow to restart animation
    typingText.offsetHeight; // This is a hack to force a reflow
    typingText.style.animation = ''; // Restart animation
}

setInterval(resetTypingAnimation, 6500); // Reset every 6 seconds (4s typing + 2s delay)


let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i].classList.remove('active-dot');
                if (i === index) {
                    slide.classList.add('active');
                    dots[i].classList.add('active-dot');
                }
            });
        }

        function currentSlide(index) {
            currentIndex = index - 1; // Convert to zero-based index
            showSlide(currentIndex);
        }

        // Auto slide every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000)