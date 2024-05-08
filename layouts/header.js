
window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');
        const scrollPosition = window.scrollY;
        const pageHeight = window.innerHeight;
        let opacity = scrollPosition / pageHeight;
        if (opacity >= 0.95) {
            opacity = 0.95;
        }
        header.style.backgroundColor = 'rgba(223, 230, 233, ' + opacity + ')';

        const settings = document.getElementById('settings');
        settings.style.color = interpolateColor(opacity);
    });

    function interpolateColor(opacity) {
        const startColor = [223, 230, 233];
        const endColor = [45, 52, 54];
        const interpolatedColor = startColor.map(function (start, index) {
            const end = endColor[index];
            return Math.round(start + (end - start) * opacity);
        });
        return 'rgb(' + interpolatedColor.join(',') + ')';
    }

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
});