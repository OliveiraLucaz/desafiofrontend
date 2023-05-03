let form = document.getElementById('formulario');
let botao = document.getElementById('enviar');
let local = document.querySelector('.inicio');
let erro = document.querySelector('.erro');
let sucesso = document.querySelector('.sucesso');
let nota = document.querySelector('.nota');
// console.log(erro);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let resultado = formData.get('valor');
    if (resultado == null) {
        erro.classList.toggle("none");
        local.classList.toggle("none");
        if (erro.classList.contains('animacao')){
            erro.classList.remove('animacao');
            erro.classList.toggle('animacao');
        }else{
            erro.classList.add('animacao');
        }
        
        
        
    } else {
        
        local.classList.toggle("none");
        sucesso.classList.toggle("none");
        if (sucesso.classList.contains('animacao')){
            sucesso.classList.remove('animacao');
            sucesso.classList.toggle('animacao');
        }else{
            sucesso.classList.add('animacao');
        }
        nota.innerHTML = resultado;
    }
});

function voltar(){
    
    erro.classList.toggle("none");
    local.classList.toggle("none");
}


