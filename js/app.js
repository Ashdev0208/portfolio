window.addEventListener('DOMContentLoaded' , () => {
    const video = document.querySelector('.video video'),
    playerBtn = document.querySelector('.play-img'),
    links = document.querySelectorAll('.menu_link li a'),
    cross = document.querySelector('.cross'),
    menuOpen = document.querySelector('.menu-open'),
    twoMenu = document.querySelector('.menu_links'),
    twoLinks = document.querySelectorAll('.menu_links ul li'),
    line = document.querySelectorAll('.line'),
    slidePerant = document.querySelectorAll('.card-container'),
    controls = document.querySelector('.controls'),
    twoMenuOpen = document.querySelector('.portfolio-menu'),
    menu = cross.parentElement,
    body = document.body;
    playerBtn.onclick = () => {
        video.classList.toggle('active');
        video.play();
    }

    video.onclick = () => {
        video.classList.remove('active');
    };
    cross.onclick = () => {
        body.classList.remove('active')
        menu.classList.remove('active')
    }
    menuOpen.onclick = () => {
        menu.classList.add('active');
        body.classList.add('active')
    }
    links.forEach((item) => {
        item.onclick = () => {
            menu.classList.remove('active');
            body.classList.remove('active')
        }
    })
    twoLinks.forEach((item , i) => {
        item.onclick = () => {
            twoMenu.classList.remove('active')
            if(item.target && item.target.classList.contains('.link')){
                item.classList.remove('active')
            }
        }
    })
    twoMenuOpen.onclick = () => {
        twoMenu.classList.toggle('active')
    }
    function hideTabContent() {
        twoLinks.forEach(item => {
            item.classList.remove('active')
        })
        line.forEach(item => {
            item.classList.remove('active')
        })
    }

    function showTabContent(i = 0) {
        twoLinks[i].classList.add('active')
        line[i].classList.add('active')
    }

    hideTabContent()
    showTabContent()


    twoMenu.addEventListener('click' , (event) => {
        if (event.target && event.target.classList.contains('link')) {
            twoLinks.forEach((item, i) => {
                if (event.target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
    controls.addEventListener('click' , (event) => {
        if (event.target && event.target.classList.contains('line')) {
            line.forEach((item, i) => {
                if (event.target == item) {
                    hideTabContent()
                    showTabContent(i)
                };
            });
        };
    });
    line[0].onclick = () => {
        slidePerant[0].classList.add('active')
        slidePerant[1].classList.remove('active')
        slidePerant[2].classList.remove('active')
    }
    line[1].onclick = () => {
        slidePerant[0].classList.remove('active')
        slidePerant[1].classList.add('active')
        slidePerant[2].classList.remove('active')
    }
    line[2].onclick = () => {        
        slidePerant[0].classList.remove('active')
        slidePerant[1].classList.remove('active')
        slidePerant[2].classList.add('active')
    }
 });