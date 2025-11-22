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