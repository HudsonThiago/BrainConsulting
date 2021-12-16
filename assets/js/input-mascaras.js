window.addEventListener("load", main)

function main(){
    let cpf = document.querySelectorAll('.cpf');
    
    for(let i=0;i<cpf.length;i++){
        cpf[i].addEventListener('keydown', ()=>{
            if(cpf[i].value.length==3 || cpf[i].value.length==7){
                cpf[i].value += "."
            } else if(cpf[i].value.length==11){
                cpf[i].value += "-"
            }
        })
    }    
}