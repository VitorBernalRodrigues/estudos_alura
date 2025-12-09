import { soma, subtracao, multiplicar, divisao } from './operacoesMatematicas'
import { createInterface } from 'readline'

const leitor = createInterface({
    input: process.stdin,
    output: process.stout
})
    
leitor.question("Digite o primeiro número:\n", (num1) => {
    leitor.question('digite a operaçãp:\n+: soma\n-: subtração\n*: multiplicação\n/: divisão\n>', (operacao) => {
         leitor.question('Digite o segundo número:\n>', (num2) => {
            
            const numero1 = Number(num1)
            const numero2 = Number(num2)

            let resultado = null

            if(operacao == '+') {
                resultado = soma(numero1 + numero2)
            } else if(operacao == '-') {
                resultado = subtracao(numero1, numero2) 
            } else {
                console.log('operacao inválida!!')
            }

         })
    })
       
})