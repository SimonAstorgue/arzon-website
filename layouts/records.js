document.addEventListener('DOMContentLoaded', function () {

    function showAddButton() {
        $.ajax({
            url: '../components/button/add.html',
            success: (data) => {
                const [add] = $(data);
                if (add) {
                    add.addEventListener('click', () => {

                    });
                    document.getElementById('recordsBanner').prepend(add);
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

                    });
                    document.getElementById('recordsDescription').insertAdjacentElement('beforebegin', toggle);
                }
            }
        })
    }
});