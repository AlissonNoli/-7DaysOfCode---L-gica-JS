/*desafio dia 2 - Variáveis
desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.*/

const nome = prompt("Digite o seu nome:");
const idade = prompt("Digite a sua idade:");
const skill = prompt("Digite a sua linguagem predileta:");
const msg = `Seu nome é ${nome}, você tem ${idade} e você gosta de ${skill}`

const estudar = prompt(`Você gosta de estudar ${skill}? 
Responda com O número 1 para SIM ou 2 para NÃO`);

alert(msg)

    if (estudar == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.")
    }   
    else { 
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }

alert('Obrigado!');



