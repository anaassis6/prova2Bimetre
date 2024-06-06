/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que
verificar se o número é par antes de armazenar
no array), no final mostre o Array.
Nome: Ana Luiza de Assis, Arthur Henrique Pereira Martins, João Gabriel Sabino de Araújo e Yuri Dinato 
*/
var teclado = require("prompt-sync")();
var array = new Array(5);
for (var x = 0; x <= 5; x++) {
    var n1 = parseFloat(teclado("Digite um n\u00FAmero par para prosseguir: "));
    if (n1 % 2 == 0) {
        array[x] = n1;
    }
    else if (n1 % 2 != 0) {
        x--;
    }
}
console.log(array);
