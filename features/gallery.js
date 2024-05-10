document.addEventListener('DOMContentLoaded', function () {
    const leftSelector = document.getElementById('left-selector');
    const rightSelector = document.getElementById('right-selector');
    const images = document.getElementsByClassName('diaporamaImage');
    for (let i = 0; i < images.length; i++) {
        if (i === 0) {
            images[i].classList.add('displayed');
            break;
        }
    }

    leftSelector.addEventListener('click', async function () {
        const images = document.getElementsByClassName('diaporamaImage');
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('displayed')) {
                images[i].classList.remove('displayed');
                if (i === 0) {
                    images[images.length - 1].classList.add('displayed');
                } else {
                    images[i - 1].classList.add('displayed');
                }
                break;
            }
        }
    });

    rightSelector.addEventListener('click', async function () {
        const images = document.getElementsByClassName('diaporamaImage');
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('displayed')) {
                images[i].classList.remove('displayed');
                if (i === images.length - 1) {
                    images[0].classList.add('displayed');
                } else {
                    images[i + 1].classList.add('displayed');
                }
                break;
            }
        }
    });
});