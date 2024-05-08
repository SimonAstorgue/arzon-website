document.addEventListener('DOMContentLoaded', function() {

    const youtube = document.getElementById('youtube-route');
    const instagram = document.getElementById('instagram-route');

    youtube.addEventListener('click', function() {
        window.open('https://www.youtube.com/playlist?list=PLwnKFvLHUe3IEkhVIWEnESkRiD-Ic0XnY', '_blank');
    });

    instagram.addEventListener('click', function() {
        window.open('https://www.instagram.com/arzon2.0/', '_blank');
    });
});