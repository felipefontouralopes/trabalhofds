let motivacao = document.querySelector("#motivacao");

mensagem.addEventListener("click", motivar);

function motivar(){
    motivacao.innerHTML = "Embora todo início seja árduo, o valor de não desistir supera qualquer medo de cair. A consequência de não parar no meio do caminho é a conquista dos sonhos que transformam vidas.";
    motivacao.style.backgroundColor= "brown";
    motivacao.style.marginTop = "10px";
    motivacao.style.padding = "10px";
}