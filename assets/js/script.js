// Este código foi escrito por Lucas de Oliveira (oliveira.dev.br)
//selecionando elementos da página com os IDs ou classes correspondentes
let form = document.getElementById('formulario');
let botao = document.getElementById('enviar');
let local = document.querySelector('.inicio');
let erro = document.querySelector('.erro');
let sucesso = document.querySelector('.sucesso');
let nota = document.querySelector('.nota');

// Quando o formulário é enviado (sumbit), esta função é chamada
form.addEventListener('submit', (e) => {
e.preventDefault(); // Previne o envio padrão do formulário
const formData = new FormData(form); // Cria um objeto FormData com os dados do formulário
let resultado = formData.get('valor'); // Obtém o valor do campo com o nome "valor" do formulário
if (resultado == null) { // Se o resultado for nulo, exibe a mensagem de erro
erro.classList.toggle("none"); // Torna a div com classe "erro" visível
local.classList.toggle("none"); // Torna a div com classe "inicio" invisível
if (erro.classList.contains('animacao')){ // Se a div de erro já estiver animada
erro.classList.remove('animacao'); // Remove a classe "animacao" para poder reiniciar a animação
erro.classList.toggle('animacao'); // Adiciona novamente a classe "animacao" para reiniciar a animação
}else{
erro.classList.add('animacao'); // Adiciona a classe "animacao" para animar a div de erro
}
} else { // Se o resultado não for nulo, exibe a mensagem de sucesso
local.classList.toggle("none"); // Torna a div com classe "inicio" invisível
sucesso.classList.toggle("none"); // Torna a div com classe "sucesso" visível
if (sucesso.classList.contains('animacao')){ // Se a div de sucesso já estiver animada
sucesso.classList.remove('animacao'); // Remove a classe "animacao" para poder reiniciar a animação
sucesso.classList.toggle('animacao'); // Adiciona novamente a classe "animacao" para reiniciar a animação
}else{
sucesso.classList.add('animacao'); // Adiciona a classe "animacao" para animar a div de sucesso
}
nota.innerHTML = resultado; // Insere o resultado na div com classe "nota"
}
});

// Esta função é chamada quando o botão "voltar" é clicado na mensagem de erro
function voltar(){
erro.classList.toggle("none"); // Torna a div com classe "erro" invisível
local.classList.toggle("none"); // Torna a div com classe "inicio" visível novamente
}


