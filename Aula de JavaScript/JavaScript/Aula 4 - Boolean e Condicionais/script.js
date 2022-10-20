//Números

var idade = 18;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e3; //2000

console.log(idade, gols, pi, exp);








//OPERADORES ARITMÉTICOS

var soma = 100 + 50; // 150
var subtracao = 100 -50; // 50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16

var modulo = 14 % 5;
// 4 é o resto que sobra, ou seja, dividir 10/5 = 2. Já o 4 não é divisível. Então 4, é o resultado.

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);









//OPERADORES ARITIMÉTICOS (STRING) - Números entre''.

var soma = '100' + 50; //Resultado: 10050
/*O 100 se tornou string por estar entre '' e por ser a soma, Lembrando que soma + em 'Strings', serve para concatenar.*/

var subtracao = '100' - 30; //Resultado: 70
/*Nesse caso, o console força a subtrração, pois não existe a subtração de string.*/

var multiplicacao = '100' * '2'; //200
/*Também, o console força a multiplicação, pois não existe a multiplicação de string.*/

console.log(soma, subtracao, multiplicacao);








//NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var peso_por_dois = peso / 2 //Nan (Not a Number), pois 'kg' é uma string.

console.log(peso_por_dois);








//A ORDEM IMPORTA
//Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total1, total2, total3, total4)

//OPERADORES ARITIMETICOS UNARIOS, SÓ PRECISA DE UM NÚMERO
var incremento = 5;
console.log (incremento++); //5
console.log (incremento); //6

var incremento2 = 5 ;
console.log (++incremento2); // 6
console.log (incremento2); // 6







//OPERADORES ARITMETICOS UNARIOS
//O + e - tenta transformar o valor (string) em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

console.log(+frase + 5); // NaN
//String não é possivel converter em número, por isso o NaN

console.log(+frase - 5); // NaN
//String com texto, não é possivel converter em número, por isso o NaN


/* ******************* */

var idade = '18';
+idade; // 18 (número)
-idade; // -18 (número)

console.log(+idade + 5); // 23
//Mesmo com 18 em string '', o operador consegue executar a soma, por ser valor numérico.

console.log (+idade - 5); // 13
//Mesmo com 18 em strig '', o operador consegue executar a subtração, por ser valor numérico.

var possui_faculdade = true;
console.log (+possui_faculdade) // 1