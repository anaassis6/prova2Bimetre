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
Nome: Ana Luiza de Assis, Arthur Henrique Pereira Martins, João Gabriel Sabino de Araújo e Yuri Dinato 
*/
const teclado = require(`prompt-sync`)();


function media(n01: number, n02: number, n03: number, n04: number, n05: number): number {
    return (n01 + n02 + n03 + n04 + n05) / 5;
}

function verifica(a: number): string {
    let paridade: string = ``;
    if (a % 2 == 0) {
        paridade = `P`;
    }
    else {
        paridade = `I`;
    }
    return paridade;
}


function principal() {
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));
    let n3: number = parseInt(teclado(`Digite o terceiro número: `));
    let n4: number = parseInt(teclado(`Digite o quarto número: `));
    let n5: number = parseInt(teclado(`Digite o quinto número: `));

    let mid = media(n1, n2, n3, n4, n5);
    let verific = verifica(mid);

    console.log(`A média dos número é ${mid} e ele é ${verific} `);
}

principal();
