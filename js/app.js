const navItem = document.querySelectorAll('.nav-item');
const navLink =     document.querySelectorAll('.nav-link');

navLink.forEach(function (a) {
    a.addEventListener('click',function (e) {

        a.classList.remove('active');
        a.classList.remove('active-tab');
        e.classList.add('active');
        e.classList.add('active-tab');
        a.style.backgroundColor = 'white';
        a.style.border = '2px solid';
        a.style.borderColor = '#800225 #800225 #fff'
        a.style.borderBottom = 'transparent';
    });
});
