document.addEventListener('DOMContentLoaded', function() {

    const homeButton = document.getElementById('home-route');
    const recordsButton = document.getElementById('records-route');
    const arzondexButton = document.getElementById('arzondex-route');

    homeButton.addEventListener('click', () => {
        window.location.href = '/arzon-website/';
    });

    recordsButton.addEventListener('click', () => {
        window.location.href = '/arzon-website/pages/records.html';
    });

    arzondexButton.addEventListener('click', () => {
        window.location.href = '/arzon-website/pages/arzondex.html';
    });
});