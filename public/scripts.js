window.onload = () => {
    let cookieInfoBar = document.getElementById('cookie-law-info-bar');
    if (!document.cookie) {
        cookieInfoBar.classList.remove('d-none');
    }

    let dropdown = document.querySelector("[aria-labelledby='navbarDropdownMenuLink']");
    document.getElementById('navbarDropdownMenuLink').addEventListener('click', () => {
        if (dropdown.classList.contains('d-block')) {
            dropdown.classList.remove('d-block');
        } else {
            dropdown.classList.add('d-block');
        }
    })

    document.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', () => {
            dropdown.classList.remove('d-block');
        })
    })

    document.getElementById('cookie-law-close-button').addEventListener('click', () => {
        let expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (30*24*60*60*1000));

        document.cookie = 'cookie_law=true;expires=' + expireDate.toUTCString() + ';path=/';
        cookieInfoBar.classList.add('d-none');
    })
}