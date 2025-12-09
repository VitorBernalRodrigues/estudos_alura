// 1.Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.

// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.



const idade = 18

if (idade >= 18) {
    console.log('maior de 18, possui permissão')
} else {
    console.log('maior de 18, não possui permissão')
}

// 2 Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

// Menor que 15: "Frio"
// De 15 a 25: "Agradável"
// Acima de 25: "Quente"
// Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

const clima = 17

if(clima <= 15) {
    console.log('Frio')
} else if(clima > 15 && clima <= 25) {
    console.log('Agradável')
} else {
    console.log('Quente')
}

// 3. Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:

// Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".
// Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.

const faixaEtaria = 20

if(faixaEtaria < 12) {
    console.log('Infantil')
} else if(faixaEtaria >= 12 && faixaEtaria < 18) {
    console.log('Juvenil')
} else {
    console.log('Adulto')
}

// 4. Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

// Crie um programa que, dado o dia da semana em formato numérico:

// 0: Domingo
// 1: Segunda-feira
// 2: Terça-feira
// 3: Quarta-feira
// 4: Quinta-feira
// 5: Sexta-feira
// 6: Sábado
// Verifique se a loja está aberta e qual o horário de funcionamento.

// Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
// Nos outros dias, a loja estará aberta no horário normal.

const dia = 4

if(dia > 0 && dia <= 5) {
    console.log('Horário normal das 9h às 18h')
} else if(dia < 0 || dia > 6) {
    console.log('dia inexistente')
} else {
    console.log('Horário especial das 10h às 14h')
} 



// 5. Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."

// Crie um programa utilizando o operador ternário que realize essa verificação e exiba a mensagem correspondente.

const usuario = 'admin'

const validacaoLogin = (usuario === 'admin' ) 
 ? 'Login bem-sucedido!'
 : 'Usuário inválido.';


// 6 Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.

// O suco pode ser feito somente com "laranja" ou "abacaxi".
// Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.
// Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.

const fruta = "maçã"

if(fruta !== 'laranja' || fruta !== 'abacaxi') {
    console.log('Fruta incompatível para a receita.')
} else {
    console.log(`Fruta compatível para a receita.`)
}

// 7 Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".
// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.

const status1 = "aprovado";
 
switch (status1) {
  case "pendente":
    console.log("Pagamento pendente.")
    break;
  case "aprovado":
    console.log("Pagamento aprovado.")
    break;
  case "recusado":
    console.log("Pagamento recusado.")
    break
  default:
    console.log("Status inválido.")
    break;
}

// 8 Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.
// Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.


const pontos = 60
const vidas = 1
 
if (pontos > 50 && vidas > 0) {
  console.log("Próximo nível liberado!")
} else {
  console.log("Não pode avançar para o próximo nível.")
}


// 9 Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

// "Crítica": se a bateria estiver abaixo de 20%
// "Moderada": se estiver entre 20% e 80%
// "Cheia": se estiver acima de 80%
// Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.

const bateria = 10;
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);