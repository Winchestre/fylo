const toggler = document.querySelector('.mobile-toggle');
const primaryNav = document.querySelector('.navbar');

toggler.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible');

    if (isVisible === "false"){
        primaryNav.setAttribute('data-visible', true);
        toggler.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        toggler.setAttribute('aria-expanded', false);
    }
})