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

