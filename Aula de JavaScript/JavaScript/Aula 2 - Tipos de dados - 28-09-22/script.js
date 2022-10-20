/*

Tipos de dados

var nome = "Karine"; // string
var idade = 21; // number 
var possuiFaculdade = true; // bolean
var time; // Undefind
var comida = null; // null
var simbolo = symbol() // symbol
var novoObjeto = {} //Object
*/

var nome = "karine"; // String
console.log(typeof nome);
// Retorna string

var idade = 21; // Number
console.log(typeof idade);
// Retorna Number

var possuiFaculdade = false; // Bolean
console.log(typeof possuiFaculdade);
// Retorna Bolean

var time; // Underfined - não foi atribuido valor a variável
console.log(typeof time);
// Retorna Underfined

var comida = null; // Null
console.log(typeof comida);
// Retorna Null

var simbolo = Symbol(); // Symbol
console.log(typeof simbolo);
// Retorna Symbol

//Somando as variaveis com string
var nome = 'David';
var sobrenome = 'Rafael';
var nomeCompleto = nome + sobrenome;

console.log (nomeCompleto)

//Somando as variaveis com string
var nome = 'Patryck '; //Com espaço no final
var sobrenome = 'Campos';
var nomeCompleto = nome + sobrenome;

console.log (nomeCompleto)

//Somando as variaveis com string
var nome = 'Joelho';
var sobrenome = 'Souza';
var nomeCompleto = nome + ' ' + sobrenome; //Bloco vazio, para espaço

console.log (nomeCompleto)

//Somando Template String
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log (frase)

//Utilizando Template String
var gols = 1000;
var frase2 = `Romario fez ${gols*2} gols`;
console.log (frase2)