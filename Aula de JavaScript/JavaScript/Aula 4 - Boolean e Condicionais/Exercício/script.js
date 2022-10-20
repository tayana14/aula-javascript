// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

//Crie duas expressões que retornem NaN

//Somar a string '200' com o número 50 e retornar 250

// Incremente o número 5 e retorne o seu valor incrementado

//Como dividir o peso por 2, corrigindo o case abaixo??

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var peso_por_dois = peso / 2; // NaN (Not a Number)

//Guia de Operadores
//htpp//developer.mozilla.org/pt-br/docs/web/JavaScript/Guide/Expressions_and_Operators




//EXERCICIOS FEITOS!!!!!


var total = 10 + 5 * 2 / 2 + 20;
console.log (total) //Resultado 35

var coisa = 'Isso é uma coisa'
+coisa; // NaN
-coisa; // NaN

console.log(+coisa + 5);
console.log(-coisa + 5);

//String não é possivel converter em número, por isso o NaN


var numero = '200';
+numero;

console.log(+numero + 50);

//Retorna 250

var incrementado = 5;

console.log (++incrementado);

//5 incrementado

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade;  //80kg
var peso_por_dois = `${numero/2}` + unidade; //NaN

/* numero / 2 + unidade; tambem funciona, var numero = '80' /2 ;  */

console.log (peso_por_dois);
