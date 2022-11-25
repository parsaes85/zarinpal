let navbar = document.querySelector('.navbar')
window.addEventListener('scroll',e=>{
    if(window.innerWidth > 768){
        if(scrollY > 20){
            navbar.classList.add('navbar-scroll')
        }else{
            navbar.classList.remove('navbar-scroll')
        }
    }
})

let menuBtn = document.querySelector('.navbar-toggler')
menuBtn.addEventListener('click',e=>{
    menuBtn.classList.toggle('change-toggler')
})