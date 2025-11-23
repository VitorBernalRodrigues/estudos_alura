const num1 = 2;
const num2 = 4;
const operacao = 'divisão';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação') {
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');
}

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 2000;

if (salario >= 11000) {
    console.log('3% de bônus')
} else if(salario < 11000 && salario >= 7000) {
    console.log('5% de bônus')
} else if(salario < 7000 && salario >= 4000) {
    console.log('7% de bônus')
} else {
    console.log('9% de bônus')
}






// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2024

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(ano, 'ano bicesto')
} else {
    console.log('não é bicesto', ano)
}



// condicional ternario e switch

const nome = "Vitor"
const nota = 8
const faltas = 3

const recebeuBonus = (nota >= 8) && (faltas <= 2) 
 ? `${nome} recebeu bônus`
 : `${nome} não recebeu bônus`



const user = 'premium'

switch(user) {
    case 'free':
        console.log('acesso limitado')
        break
    case 'premium':
        console.log('acesso total ao app')
        break
    case 'super user':
        console.log('acesso total + bônus')
    default:
    console.log('tipo de user desconhecido')
    break
}
