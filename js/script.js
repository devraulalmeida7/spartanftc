const botaoEnviar = document.querySelector("#enviar");
const mensagemDeConfirmacao = document.querySelector("#confirm")
const formulario = document.querySelector("#contato");
const logo = document.querySelector("#logo");
const menu = document.querySelector("#menu");


// Sistema para voltar para página inicial


logo.addEventListener("click", ()=> {
    window.location.replace("");
})

    // logo.addEventListener("click", ()=> {
    //     if(menu.style.display === "flex"){
    //         menu.style.display = "none";
    //     }
    //     else{
    //         menu.style.display = "flex";
    //     }
    // })



function confirmarEnvio() {
    mensagemDeConfirmacao.classList.add("true");
    console.log("Deu bom")
    ocultarMensagem();
    
}

//Função utilizada para ocultar a mensagem após 5s
function ocultarMensagem(){
    if(mensagemDeConfirmacao.classList == "confirmacao true"){
        setTimeout(function(){
            mensagemDeConfirmacao.classList.remove("true");
        },5000)
    }
}


// Quando o formulário for enviado será exibido
// uma mensagem de confirmação.
formulario.addEventListener('submit', e => {
    e.preventDefault();
    confirmarEnvio();
    
})
