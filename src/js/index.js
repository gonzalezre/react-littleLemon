

document.addEventListener('DOMContentLoaded', function () {
     menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});

