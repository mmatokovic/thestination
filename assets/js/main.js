/**
 * @file
 * A JavaScript file. Runs first, before other things have loaded.
 */

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
if (window.pageYOffset >= 1000) {
    scrollToTopBtn.classList.remove('hidden');
    scrollToTopBtn.classList.add('opacity-100');
    scrollToTopBtn.classList.remove('opacity-0');
} else {
    scrollToTopBtn.classList.add('opacity-0');
    scrollToTopBtn.classList.remove('opacity-100');

    // Delay hiding to allow opacity transition
    setTimeout(() => {
    if (window.pageYOffset < 1000) {
        scrollToTopBtn.classList.add('hidden');
    }
    }, 200); // matches Tailwind's `duration-300`
}
});