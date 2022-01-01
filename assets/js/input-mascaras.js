window.addEventListener("load", main)

function main(){
    //cpf do aluno 
    $("#cpf_aluno").mask("000.000.000-00")

    //cnpj da empresa
    $("#cnpj_empresa").mask("00.000.000/0000-00")

    //cpf do analista 
    $("#cpf_analista").mask("000.000.000-00")
    
}