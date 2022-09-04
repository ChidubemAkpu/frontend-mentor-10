const headerMenu = document.querySelector('header ul');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);
function toggleMenu() {
            headerMenu.classList.toggle('open-close')
    }

const [allTheItems, allTheNews] = [document.querySelectorAll('.for-each'), document.querySelectorAll('.each-news')];
document.addEventListener('scroll', getThem)

function getThem(){
    const height = window.innerHeight;
    [allTheItems, allTheNews].forEach(a => Array.from(a).forEach(b => {
        if(b.getBoundingClientRect().top < height - 60){
            b.style.opacity = '1';
        } else{
            b.style.opacity = '0';
        }
    }))

}

