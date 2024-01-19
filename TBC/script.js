
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 2) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
});