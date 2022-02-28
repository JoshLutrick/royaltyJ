const navElements = {
    toggleBtn: document.querySelector('.fa-solid'),
    navMenu: document.querySelector('.menudisplay')
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