let header = document.querySelector(".header")
let logo = document.querySelector('.logo__svg');  

    window.onscroll = function(){
        
if(window.scrollY > 100){
    header.style.background = 'rgba(0, 0, 0, 0.6)';
    logo.style.fill = '#fff';
}
else{
    header.style.background = "rgba(0, 0, 0, 0)"
    logo.style.fill = 'var(--main-light-theme)';
}
    }