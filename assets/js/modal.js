window.addEventListener("load", main)

function main(){
    //fechar modal
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

    /*
    ------------------------------------------------------------------------
    usuarios.html
    ------------------------------------------------------------------------
    */

    //MODAL DESAFIO
            //modal visualizar desafio
            const view_desafio = document.querySelectorAll('.abrir-modal-view-desafio');

            
            for(let i=0;i<view_desafio.length;i++){
                view_desafio[i].addEventListener('click', ()=>{
                    window.location.href = view_desafio[i].dataset.href
                })
            }   
            
            //modal arquivar desafio
            const arquivar_desafio = document.querySelectorAll('.u_arquivar_desafio');
            const arquivar_desafio_main = document.querySelectorAll('.u_arquivar_desafio_main');
            
            for(let i=0;i<arquivar_desafio.length;i++){
                arquivar_desafio[i].addEventListener('click', ()=>{
                    arquivar_desafio_main[i].style.visibility = "visible";
                    arquivar_desafio_main[i].style.opacity = 1;
                })
            }   
            
            //modal abrir desafio
            const abrir_desafio = document.querySelectorAll('.u_abrir_desafio');
            const abrir_desafio_main = document.querySelectorAll('.u_abrir_desafio_main');
            
            for(let i=0;i<abrir_desafio.length;i++){
                abrir_desafio[i].addEventListener('click', ()=>{
                    abrir_desafio_main[i].style.visibility = "visible";
                    abrir_desafio_main[i].style.opacity = 1;
                })
            }    

    //MODAL ALUNO
            //modal visualizar aluno
            const view_aluno = document.querySelectorAll('.abrir-modal-view-aluno');
            const main_view_aluno = document.querySelectorAll('.main-modal-view-aluno');

            
            for(let i=0;i<view_aluno.length;i++){
                view_aluno[i].addEventListener('click', ()=>{
                    main_view_aluno[i].style.visibility = "visible";
                    main_view_aluno[i].style.opacity = 1;
                })
            }   
            
            //modal arquivar aluno
            const arquivar_aluno = document.querySelectorAll('.u_arquivar_aluno');
            const arquivar_aluno_main = document.querySelectorAll('.u_arquivar_aluno_main');
            
            for(let i=0;i<arquivar_aluno.length;i++){
                arquivar_aluno[i].addEventListener('click', ()=>{
                    arquivar_aluno_main[i].style.visibility = "visible";
                    arquivar_aluno_main[i].style.opacity = 1;
                })
            }   
            
            //modal abrir aluno
            const abrir_aluno = document.querySelectorAll('.u_abrir_aluno');
            const abrir_aluno_main = document.querySelectorAll('.u_abrir_aluno_main');
            
            for(let i=0;i<abrir_aluno.length;i++){
                abrir_aluno[i].addEventListener('click', ()=>{
                    abrir_aluno_main[i].style.visibility = "visible";
                    abrir_aluno_main[i].style.opacity = 1;
                })
            }  

    //MODAL ANALISTA
            //modal visualizar analista
            const view_analista = document.querySelectorAll('.abrir-modal-view-analista');
            const main_view_analista = document.querySelectorAll('.main-modal-view-analista');

            
            for(let i=0;i<view_analista.length;i++){
                view_analista[i].addEventListener('click', ()=>{
                    main_view_analista[i].style.visibility = "visible";
                    main_view_analista[i].style.opacity = 1;
                })
            }   
            
            //modal arquivar analista
            const arquivar_analista = document.querySelectorAll('.u_arquivar_analista');
            const arquivar_analista_main = document.querySelectorAll('.u_arquivar_analista_main');
            
            for(let i=0;i<arquivar_analista.length;i++){
                arquivar_analista[i].addEventListener('click', ()=>{
                    arquivar_analista_main[i].style.visibility = "visible";
                    arquivar_analista_main[i].style.opacity = 1;
                })
            }   
            
            //modal abrir analista
            const abrir_analista = document.querySelectorAll('.u_abrir_analista');
            const abrir_analista_main = document.querySelectorAll('.u_abrir_analista_main');
            
            for(let i=0;i<abrir_analista.length;i++){
                abrir_analista[i].addEventListener('click', ()=>{
                    abrir_analista_main[i].style.visibility = "visible";
                    abrir_analista_main[i].style.opacity = 1;
                })
            }  

    //MODAL EMPRESA
            //modal visualizar empresa
            const view_empresa = document.querySelectorAll('.abrir-modal-view-empresa');
            const main_view_empresa = document.querySelectorAll('.main-modal-view-empresa');

            
            for(let i=0;i<view_empresa.length;i++){
                view_empresa[i].addEventListener('click', ()=>{
                    main_view_empresa[i].style.visibility = "visible";
                    main_view_empresa[i].style.opacity = 1;
                })
            }   
            
            //modal arquivar empresa
            const arquivar_empresa = document.querySelectorAll('.u_arquivar_empresa');
            const arquivar_empresa_main = document.querySelectorAll('.u_arquivar_empresa_main');
            
            for(let i=0;i<arquivar_empresa.length;i++){
                arquivar_empresa[i].addEventListener('click', ()=>{
                    arquivar_empresa_main[i].style.visibility = "visible";
                    arquivar_empresa_main[i].style.opacity = 1;
                })
            }   
            
            //modal abrir empresa
            const abrir_empresa = document.querySelectorAll('.u_abrir_empresa');
            const abrir_empresa_main = document.querySelectorAll('.u_abrir_empresa_main');
            
            for(let i=0;i<abrir_empresa.length;i++){
                abrir_empresa[i].addEventListener('click', ()=>{
                    abrir_empresa_main[i].style.visibility = "visible";
                    abrir_empresa_main[i].style.opacity = 1;
                })
            }  
}