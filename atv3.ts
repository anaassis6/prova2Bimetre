/* Atividade 3 (10 pontos)
 Encontre 5 erros na aplicação, se por acaso  o aluno colocar mais erros, 
 perde 2 pontos na nota  por erro.

 - Além de entregar por escrito o código,
 escreva o número da linha que apresenta o problema.

 Aplicação abaixo é uma calculadora que faz uso de função.
 Nome: Ana Luiza de Assis, Arthur Henrique Pereira Martins, João Gabriel Sabino de Araújo e Yuri Dinato 
*/

function entrada (): number{ 
    const teclado = require(`prompt-sync`)();
    let n : number = parseFloat(teclado(`Digite um número: `));//erro 1: esta linha contem um erro pois o código estava "let n : number = teclado(`Digite número: `);" e deveria ser "let n : number = parseFloat(teclado(`Digite número: `));"
    return n;//erro 2: esta linha contem um erro pois o código estava "return 2;" e deveria ser "return n;"
}

function soma(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} + ${b} = ${a+b}`);
    menu();
}

function subtracao(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} - ${b} = ${a-b}`);
    menu();
}

function multiplicacao(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} x ${b} = ${a*b}`);
    menu();
}

function divisao(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} / ${b} = ${a/b}`);
    menu();
}

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);  
}

function opcao (escolha: string): void{
    switch (escolha){
        case `+` : soma(); break;
        case `-` : subtracao(); break;
        case `*` : multiplicacao(); break;
        case `/` : divisao(); break;
        case `@` : sair(); break;
        default: break;
    }
}
  
function menu (): void{
    const teclado = require(`prompt-sync`)(); // erro 3: a linha estava sem () depois do promt-syn e por isso o erro.
    teclado(`Aperte ENTER para continuar ...`);
    console.clear();
    
    console.log(`-------CALCULADORA--------`);
    console.log(`----Selecione operação----`);
    console.log();
    console.log(`Digite a operação desejada`);
    console.log(`  +    -    *    / `);
    console.log(`Digite @ para sair`)
    console.log();
    let escolha: string  = teclado(`Digite a opção --> `);//erro 4: esta linha contem um erro pois o código estava "let escolha: string  = parseInt(teclado(`Digite a opção --> `));" e deveria estar "let escolha: string  = teclado(`Digite a opção --> `);"

    opcao(escolha);
}
menu(); // erro 5: O código não estava executando pois a função pricipal (menu) não estava sendo chamada
