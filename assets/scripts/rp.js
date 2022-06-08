//clicando e adicionando registro
function gerarRegistro(id){
    let btGerar = document.getElementById("bt-gerar")
    let textArea = document.getElementById("mask-area")
    let titleSelect = document.querySelector(".selectpicker")

    
    
    btGerar.addEventListener("click", ()=>{
        console.log(titleSelect.value);
        textArea.value = titleSelect.value
    })
}

gerarRegistro()