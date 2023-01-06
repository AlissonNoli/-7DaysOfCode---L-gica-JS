//Desafio dia 1 - Operações Booleanas

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


  /*Usamos == para comparar apenas valores, sem nos importar se são valores do mesmo tipo. Aqui, comparamos se o número 3 é igual à string 3:
  3 == '3' (true)
  
  Usamos === para comparar se os valores e os tipos são iguais.
  Comparar número e string
  3 === '3' (false)
  
  Comparar número e número
  3 === 3 (true)
  
  Comprar string e string
  '3' === '3' (true)*/
 

  

  
 
