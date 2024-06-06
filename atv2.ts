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
Nome: Ana Luiza de Assis, Arthur Henrique Pereira Martins, João Gabriel Sabino de Araújo e Yuri Dinato 
*/
const teclado = require (`prompt-sync`)();
function maior (n1: number, n2: number, n3: number): number{
    let maior = 0;
    if (n1 > n2 && n1 > n3){
        maior = n1;
        }
    else if (n2 > n1 && n2 > n3){
        maior = n2;
        }
    else if (n3 > n1 && n3 > n2){
        maior = n3;
        }
    return maior;    
}
function menor (n1: number, n2: number, n3: number): number{
    let menor = 0;
    if (n1 < n2 && n1 < n3){
        menor = n1;
        }
    else if (n2 < n1 && n2 < n3){
        menor = n2;
        }
    else if (n3 < n1 && n3 < n2){
        menor = n3;
        }
    return menor;    
}
function mediaAtv2 (maior: number, menor: number): number{
    let media: number= (maior + menor) / 2;
    return media; 
}
function principal (): void{
    let n1: number = parseInt(teclado(`Dgite o primeiro valor: `));
    let n2: number = parseInt(teclado(`Dgite o segundo valor: `));
    let n3: number = parseInt(teclado(`Dgite o terceiro valor: `));
    let n4: number = maior(n1, n2, n3);
    let n5: number = menor(n1, n2, n3);
    let n6: number = mediaAtv2(n4, n5);
    console.log (`O maior número é ${n4}, o menor número é ${n5} e a média ${n6}`) 
}
principal();
