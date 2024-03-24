// feather icon

feather.replace();



// toggle class active 

const navbarNav = document.querySelector ('.navbar-nav');

// if hamburger menu click 

document.querySelector('#menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    event.preventDefault();
};

// alert ('website ini belum berfungsi sepenuhnya dan akan mengalami pembaruan seiring berjalannya waktu');