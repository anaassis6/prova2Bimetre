/*Atividade 4 (10 pontos)
 Encontre os 5 erros
 - Se inserir erros -2 pontos por erro
 - indique as linhas que estão com problemas no código

Aplicação abaixo recebe 10 números, armazena em um vetor 
e ordene esses 10 números crescente utilizando for
*/

console.clear();
const teclado = require (`prompt-sync`)();//erro 1: esta linha contém um erro pois o código estava "let = require (`Prompt-sync`)();" e deveria estar "const teclado = require (`prompt-sync`)();"
let numeros : number [] = new Array();//erro 2: esta linha contém um erro pois o código estava "let numeros = new Array();" e deveria estar "let numeros : number [] = new Array();"

for (let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));//erro 3: esta linha contem um erro pois o código estava "numeros[x] = parseInt(`Digite o número do índice ${x} do Array: `);" e deveria estar "numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));" 
}

for (let z =0; z <= 9; z++){
    for (let y = z + 1; y <= 9; y++){//erro 4: o erro está em (let y = z-1; y <= 9; y--) o certo seria (let y = z + 1; y <= 9; y++){
        if (numeros[y] < numeros[z]){//erro 6: o erro está na comparação, estava (numeros[z] > numeros[z]) e o certo seria (numero[y] < numero[z])
            let temporario = numeros[z];
            numeros[z] = numeros[y];//erro 5: diz "numeros[z] = numeros[z];" e o correto seria: "numeros[z] = numeros[y];"
            numeros[y] = temporario;
        }
    }
}

console.log(`O Array em ordem crescente ${numeros}`);