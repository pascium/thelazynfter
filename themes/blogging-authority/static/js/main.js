window.addEventListener('load', (event) => {
    const menuBtn = document.getElementById('menu-btn');


    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });


    function toggleMenu() {

        menuBtn.addEventListener('click', (event) => {

            if (menuBtn.getAttribute('aria-expanded') == "false") {
                menuBtn.setAttribute('aria-expanded', "true");
                menuBtn.setAttribute('aria-label', "close menu");
            } else {
                menuBtn.setAttribute('aria-expanded', "false");
                menuBtn.setAttribute('aria-label', "open menu");
            }
        });
    };
    toggleMenu();

    function subHeadings() {
        if (/learn/.test(window.location.href)) {
            const singlePage = document.getElementById('single-page');

            var subheadingCollection = singlePage.querySelectorAll('h2');

            for (var i = 0; i < subheadingCollection.length; i++) {
                subheadingCollection[i].classList.add('sub-gradient');
            };

        };

    };subHeadings();


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('service worker registered'))
            .catch(err => console.log('service worker not registered', err));
    }





});
