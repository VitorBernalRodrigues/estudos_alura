// Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

// Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?

const numeroFinal = 5


for(let i = 1; i <= numeroFinal; i++) {
    console.log(i)
}

// Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.

// Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.

for(let i = 10; i >= 0; i--) {
    console.log(i)
    if (i === 0) {
        console.log('lançar!!!!')
    }
}


// Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.

const ultimoNumero = 10



for (let i = 1; i <= ultimoNumero; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

senhaCadastro = 'seguranç@2025'

for(let i = 0; i < senhaCadastro.length; i++) {
    console.log(senhaCadastro[i])
}