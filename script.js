const headerMenu = document.querySelector('header ul');
const allBodyEl = document.querySelector('body');
allBodyEl.addEventListener('mousedown', avoidDefault)

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

async function toggleMenu() {
            headerMenu.classList.toggle('open-close')
            
    }

function avoidDefault(el){
    el.preventDefault();  
}

const [allTheItems, allTheNews, forFooter] = [document.querySelectorAll('.for-each'), document.querySelectorAll('.each-news'), document.querySelector('footer')];
document.addEventListener('scroll', getThem)

function getThem(){
    const height = window.innerHeight;
    [allTheItems, allTheNews,[forFooter]].forEach(a => Array.from(a).forEach(b => {
        if(b.getBoundingClientRect().top < height - (height /3)){
            b.style.opacity = '1';
        } else{
            b.style.opacity = '0';
        }
    }))

}

