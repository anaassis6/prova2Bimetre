/* Atividade 2 - (40 pontos)
Crie um programa que tenha 4 funções:

1º Função recebe 3 números e retorna o número maior (10 pontos)

2º Função recebe 3 números e retorna o número menor (10 pontos)

3º Função recebe o valor maior e o valor menor e retorna
a média desses números (10 pontos)

4º Função (principal) deve: (10 pontos)
- receber os três valores digitados
- receber o retorno do valor maior
- receber o retorno do valor menor
- receber a média do valor maior e menor
- exibir o número maior, o número menor e a média

*/
var teclado = require("prompt-sync")();
function maior(n1, n2, n3) {
    var maior = 0;
    if (n1 > n2 && n1 > n3) {
        maior = n1;
    }
    else if (n2 > n1 && n2 > n3) {
        maior = n2;
    }
    else if (n3 > n1 && n3 > n2) {
        maior = n3;
    }
    return maior;
}
function menor(n1, n2, n3) {
    var menor = 0;
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    }
    else if (n2 < n1 && n2 < n3) {
        menor = n2;
    }
    else if (n3 < n1 && n3 < n2) {
        menor = n3;
    }
    return menor;
}
function mediaAtv2(maior, menor) {
    var media = (maior + menor) / 2;
    return media;
}
function principal() {
    var n1 = parseInt(teclado("Dgite o primeiro valor: "));
    var n2 = parseInt(teclado("Dgite o segundo valor: "));
    var n3 = parseInt(teclado("Dgite o terceiro valor: "));
    var n4 = maior(n1, n2, n3);
    var n5 = menor(n1, n2, n3);
    var n6 = mediaAtv2(n4, n5);
    console.log("O maior n\u00FAmero \u00E9 ".concat(n4, ", o menor n\u00FAmero \u00E9 ").concat(n5, " e a m\u00E9dia ").concat(n6));
}
principal();
