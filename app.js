let listaDeNumerosSorteados = [];
let limiteNumero =10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsivevoice.speak(texto,' Brazilian Portuguese Female ',{rate:1.2});   
    
    }

    function exibirMensagemInicial() { 
        exibirTextoNaTela('h1', 'Jogo do número secreto'); 
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
    }
    exibirMensagemInicial();


function  verificarChute(){
let chute = document.querySelector("input").value; 

if (chute == numeroSecreto){
    exibirTextoNaTela('h1','acertou!');
    let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Voce descobrio o numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    if (chute > numeroSecreto){
        exibirTextoNaTela ('p',"O numero secreto é menor");
    }else{
        exibirTextoNaTela ('p', "O numero secreto é maior");
    } //tentativas + tentativas é igual tentativas++
    tentativas++
    limparCampo();
}
}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.lennght;
    
    if (quantidadeDeElementosNaLista == limiteNumero){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
