let header = document.querySelector(".header")
let logo = document.querySelector('.header-logo-svg');  

    window.onscroll = function(){
        
if(window.scrollY > 100){
    header.style.background = "#000"
    logo.style.fill = '#fff';
}
else{
    header.style.background = "rgba(0, 0, 0, 0)"
    logo.style.fill = 'var(--main-light-theme)';
}
    }