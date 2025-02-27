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

setInterval(resetTypingAnimation, 5000); // Reset every 6 seconds (4s typing + 2s delay)


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


         // Target number to count to
         const targetNumber = 10; // Desired number
         const duration = 4000; // Duration of the counter effect in milliseconds
         const counterElement = document.getElementById('counter');
         let hasCounted = false; // Flag to check if counting has started
 
         function animateCounter(start, end, duration) {
             const incrementTime = duration / end; // Time per increment
             let currentCount = start;
             const timer = setInterval(() => {
                 currentCount++;
                 counterElement.innerText = currentCount;
 
                 if (currentCount >= end) {
                     clearInterval(timer);
                 }
             }, incrementTime);
         }
 
         function startCounting(entries) {
             entries.forEach(entry => {
                 if (entry.isIntersecting && !hasCounted) {
                     hasCounted = true; // Prevents multiple counts
                     animateCounter(0, targetNumber, duration);
                 }
             });
         }
 
         // Options for the Intersection Observer
         const options = {
             root: null, // Use the viewport as the root
             rootMargin: '0px', // No margin around the root
             threshold: 0.5 // Trigger when 50% of the target is visible
         };
 
         // Create an Intersection Observer
         const observer = new IntersectionObserver(startCounting, options);
 
         // Observe the counter section
         observer.observe(document.getElementById('counterSection'));