/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que 
verificar se o número é par antes de armazenar 
no array), no final mostre o Array.
Nome: Ana Luiza de Assis, Arthur Henrique Pereira Martins, João Gabriel Sabino de Araújo e Yuri Dinato 
*/
const teclado = require(`prompt-sync`)();

let array: number[] = new Array(5);
for (let x = 0; x <= 5; x++) {
    let n1: number = parseFloat(teclado(`Digite um número par para prosseguir: `));
    if (n1 % 2 == 0){
        array[x]= n1;
    }
    else if(n1 % 2 != 0){
        x--;
    }
}
console.log(array);
