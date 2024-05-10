const homeButton = document.getElementById('home-route');
const recordsButton = document.getElementById('records-route');
const arzondexButton = document.getElementById('arzondex-route');

if (homeButton) {
    homeButton.addEventListener('click', () => {
        window.location.href = '/arzon-website/';
    });
}

if (recordsButton) {
    recordsButton.addEventListener('click', () => {
        window.location.href = '/arzon-website/pages/records/records.html';
    });
}

if (arzondexButton) {
    arzondexButton.addEventListener('click', () => {
        window.location.href = '/arzon-website/pages/arzondex/arzondex.html';
    });
}
