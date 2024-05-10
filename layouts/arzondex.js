let inEditMode = false;

document.addEventListener('DOMContentLoaded', function () {
    const noCards = document.getElementById('arzondexNoCard');
    const cards = document.getElementsByClassName('card');

    if (cards.length === 0) {
        noCards.style.display = 'block';
    } else {
        noCards.style.display = 'none';
    }

    function showAddButton() {
        $.ajax({
            url: '../components/button/add.html',
            success: (data) => {
                const [add] = $(data);
                if (add) {
                    add.addEventListener('click', () => {

                    });
                    document.getElementById('arzondexBannerSettings').prepend(add);
                }
            }
        })
    }

    function showEditButton() {
        $.ajax({
            url: '../components/toggle/edit.html',
            success: (data) => {
                const [toggle] = $(data);
                if (toggle) {
                    toggle.addEventListener('click', () => {
                        if (inEditMode) {
                            inEditMode = !inEditMode;
                            const deleteButtons = document.getElementsByClassName('delete-button');
                            while (deleteButtons.length > 0) {
                                deleteButtons[0].remove();
                            }
                        } else {
                            inEditMode = !inEditMode;
                            editCard();
                        }
                    });
                    document.getElementById('arzondexBannerSettings').appendChild(toggle);
                }
            }
        })
    }

    function editCard() {
        const contents = document.getElementsByClassName('content');
        for (const content of contents) {
            $.ajax({
                url: '../components/button/delete.html',
                success: (data) => {
                    const [button] = $(data);
                    if (button) {
                        button.addEventListener('click', async () => {
                            content.remove();
                        });
                        content.appendChild(button);
                    }
                }
            })
        }
    }
});