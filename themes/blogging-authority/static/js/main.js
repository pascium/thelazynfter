window.addEventListener('load', (event) => {
    const fccBtn = document.getElementById('fcc-button');
    const bannerFcc = document.getElementById('fcc-banner');
    const fccCookie = localStorage.getItem('affiliate');
    const menuBtn = document.getElementById('menu-btn');


    function removeFcc() {


        fccBtn.addEventListener('click', function() {
            localStorage.setItem('affiliate', 'accepted');
            bannerFcc.style.display = "none";
        });

        function checkFcc() {

            if (fccCookie == "accepted") {
                bannerFcc.style.display = "none";
            } else {
                bannerFcc.style.display = "block";
            }

        }; checkFcc();

    };
    removeFcc();




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
    };toggleMenu();


    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('service worker registered'))
          .catch(err => console.log('service worker not registered', err));
      }





});
