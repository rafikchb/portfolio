let burger = document.getElementById('burger');
let navMenu = document.getElementById('navMenu'); 
burger.addEventListener('click',()=>{ 
    if(navMenu.classList.contains('hidden')){
        navMenu.classList.remove('hidden') ;  

    }else{ 
navMenu.classList.add('hidden'); 
    }
});  