window.addEventListener('load', (event) => {
    const menuBtn = document.getElementById('menu-btn');
    const mainMenu = document.getElementById('main-menu');
    const footNavitems = document.getElementById('footer-nav-items');

    function toggleMenu() {

        menuBtn.addEventListener('click', (event) => {
            mainMenu.classList.toggle('active-menu');

            if (menuBtn.getAttribute('aria-expanded') == "false") {
                menuBtn.setAttribute('aria-expanded', "true");
                menuBtn.setAttribute('aria-label', "close menu");
                menuBtn.innerHTML = `&#x2715;`;
            } else { 
                menuBtn.setAttribute('aria-expanded', "false");
                menuBtn.setAttribute('aria-label', "open menu");
                menuBtn.innerHTML = `&#x2630;`;
            } 
        });
    };toggleMenu();


    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('service worker registered'))
          .catch(err => console.log('service worker not registered', err));
      }


    
})