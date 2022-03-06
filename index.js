const navElements = {
    toggleBtn: document.querySelector('.fa-solid'),
    navMenu: document.querySelector('.menudisplay')
};

const aboutElements = {
    aboutcontainer: document.querySelector('.aboutgrid'),
    roundLogo: document.querySelector('.aboutgrid__roundlogo')
}

navElements.toggleBtn.addEventListener('click', function(){
    if(navElements.navMenu.classList.contains('menudisplay__hide')){
        navElements.navMenu.classList.remove('menudisplay__hide');
        navElements.toggleBtn.classList.remove('fa-bars');
        navElements.toggleBtn.classList.add('fa-xmark');
    } else if (!navElements.navMenu.classList.contains('menudisplay__hide')){
        navElements.navMenu.classList.add('menudisplay__hide');
        navElements.toggleBtn.classList.add('fa-bars');
        navElements.toggleBtn.classList.remove('fa-xmark');
    }
})

window.addEventListener('scroll', function(){
    if(window.scrollY > 530){
        aboutElements.aboutcontainer.classList.add('aboutgrid__pop');
    }
    let rate = window.scrollY * 0.1;
    aboutElements.roundLogo.style.transform = `rotate(${rate}deg)`;
})

console.log(document.body.childElementCount);

function removeChildElem(elem){
    let wait = setInterval(() => {
        document.body.removeChild(elem);
    }, 2000);
}

let loader = document.querySelector('.screenloader');

window.addEventListener('load', removeChildElem(loader));


