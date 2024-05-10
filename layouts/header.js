window.addEventListener('DOMContentLoaded', function () {

    const textMenu = document.getElementsByClassName('textMenu');
    const menuIcon = document.getElementsByClassName('menuIcon');
    if (window.innerWidth <= 440) {
        for (let i = 0; i < textMenu.length; i++) {
            textMenu[i].style.display = 'none';
            menuIcon[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < textMenu.length; i++) {
            textMenu[i].style.display = 'block';
            menuIcon[i].style.display = 'none';
        }
    }

    for (const e of textMenu) {
        e.addEventListener('mouseover', function () {
            e.classList.add('textMenu-hover');
        });
        e.addEventListener('mouseout', function () {
            e.classList.remove('textMenu-hover');
        });
    }

    function showSettings() {
        const settings = document.getElementById('settings');
        settings.style.display = 'block';
    }

});