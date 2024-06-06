/* Atividade 1 (30 pontos)

Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR,
   o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número
é par ou impar

*/
var teclado = require("prompt-sync")();
function media(n01, n02, n03, n04, n05) {
    return (n01 + n02 + n03 + n04 + n05) / 5;
}
function verifica(a) {
    var paridade = "";
    if (a % 2 == 0) {
        paridade = "P";
    }
    else {
        paridade = "I";
    }
    return paridade;
}
function principal() {
    var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero: "));
    var n4 = parseInt(teclado("Digite o quarto n\u00FAmero: "));
    var n5 = parseInt(teclado("Digite o quinto n\u00FAmero: "));
    var mid = media(n1, n2, n3, n4, n5);
    var verific = verifica(mid);
    console.log("A m\u00E9dia dos n\u00FAmero \u00E9 ".concat(mid, " e ele \u00E9 ").concat(verific, " "));
}
principal();
