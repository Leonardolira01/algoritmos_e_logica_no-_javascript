// O que será abordado nesse desafio:

// - Variáveis;
// - Operações matemáticas;
// - Operadores comparativos;
// - Condicional.


// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

// Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
// O resultado final desse desafio deve ser algo em torno de:

let firstNumber = prompt ('Digite o primeiro número')
let secondNumber = prompt ('Digite o segundo número')

firstNumber = Number (firstNumber)
secondNumber = Number (secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert ('Soma: ' + sum)
alert ('Subtração: ' + sub)
alert ('multiplicação: ' + mult)
alert ('divisão: ' + div)
alert ('Resto da Divisão: ' + restDiv)

function verificaSeEPar(primeiroParametro, segundoParametro) {
  
    let somaNumeros = primeiroParametro + segundoParametro
    if (somaNumeros % 2 == 0) {
      return alert ('A soma dos 2 números é par')
      
    } else {
      return alert ('A soma dos 2 números é impar')
    }
  
}
verificaSeEPar(firstNumber, secondNumber)



if (firstNumber == secondNumber ) {
  alert('Os dois números inseridos são iguais')

} else { 
  alert('Os dois números inseridos são diferentes')
}