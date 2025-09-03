//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista = []

function adicionarAmigo(){
    let mostrarAmigos = document.querySelector('#listaAmigos');
    let amigo = document.querySelector('#amigo').value;
    let input = document.querySelector('#amigo');
    
    if(amigo == ''){
        alert('Digite um nome')
    }else{
        mostrarAmigos.innerHTML += `${amigo}<br>`
        input.value = ''
        lista.push(amigo)
    }
}

function sortearAmigo(){
    let resultado = document.querySelector('#resultado');

    let sorteioNumero = Math.floor(Math.random() * lista.length);

    resultado.innerHTML = `O amigo secreto sorteado é: ${lista[sorteioNumero]}`
    
}


