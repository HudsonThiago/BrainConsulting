window.addEventListener("load", main)

function main(){
    const fechar_modal = document.querySelectorAll('.fechar-modal');
    const fechar_modal_main = document.querySelectorAll('.fechar-modal-main');
    
    for(let i=0;i<fechar_modal.length;i++){
        fechar_modal[i].addEventListener('click', ()=>{
            fechar_modal_main[i].style.visibility = "hidden";
            fechar_modal_main[i].style.opacity = 0;

            // if(cpf[i].value.length==3 || cpf[i].value.length==7){
            //     cpf[i].value += "."
            // } else if(cpf[i].value.length==11){
            //     cpf[i].value += "-"
            // }
        })
    } 
    
    //modal arquivar desafio
    const arquivar = document.querySelectorAll('.arquivar_desafio');
    const arquivar_main = document.querySelectorAll('.arquivar_main');
    
    for(let i=0;i<arquivar.length;i++){
        arquivar[i].addEventListener('click', ()=>{
            arquivar_main[i].style.visibility = "visible";
            arquivar_main[i].style.opacity = 1;
        })
    } 

    //modal DESAFIO
    const view_desafio = document.querySelectorAll('.abrir-modal-view-desafio');
    const main_view_desafio = document.querySelectorAll('.main-modal-view-desafio');

    
    for(let i=0;i<view_desafio.length;i++){
        view_desafio[i].addEventListener('click', ()=>{
            main_view_desafio[i].style.visibility = "visible";
            main_view_desafio[i].style.opacity = 1;
        })
    }     

}