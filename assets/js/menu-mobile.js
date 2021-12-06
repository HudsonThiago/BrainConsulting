window.addEventListener("load", main)

function main(){
    const btnMenu = document.getElementById('btn-menu')
    
    function toggleMenu(){
        const nav = document.getElementById('nav-mobile')
        nav.classList.toggle('active');
    }

    btnMenu.addEventListener('click', toggleMenu);
}