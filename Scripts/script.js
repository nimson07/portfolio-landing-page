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