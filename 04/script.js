/*
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota 
*/

let student = prompt("Qual o nome do aluno(a)?")

let nota1 = prompt("Qual a nota da primeira prova?")
let nota2 = prompt("Qual a nota da segunda prova?")
let nota3 = prompt("Qual a nota da terceira prova?")

let average = (Number (nota1) + Number (nota2) + Number (nota3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert ("PARABÉNS " + student + " você passou! Com a média de: " + average)
} 

else if (average < 3){
  alert (student + " você esta reprovado. Sua média é de: " + average)
}

else {
  alert ("Se prepare para a prova de recuperação, " + student + " sua média foi: " + average)
   
}