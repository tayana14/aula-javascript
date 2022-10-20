//array - const 

//ARRAY - É UM GRUPO DE VALORES GERALMENTE RELACIONADOS. SERVEM PARA GUARDAMOS DIFERENTES VALORES EM UMA UNICA VARIAVEL

var videoGames = ['Switch', 'PS4', 'Xbox'];
console.log(videoGames[2]);

//acesse um elemnto da arry utilizando [numero]

//metoos e propriedades e uma array (pop e length)

var videoGmes = ['Switch', 'PS4', 'Xbox'];
console.log(videoGames.length); //3 ele conta quantos intes
console.log(videoGames.pop()); //ele retorna e depois ele remove 
console.log(videoGames.pop());// pop é um comando duplo, primeiro ele exibe e dps ele remove 

//for lop
//fazem algo reoetidamente até que uma condição seja atingida.
//o for loop possui 3 partes, inicio, condição e incremento

//inicio - var numero = 0
// condição - numero <10
//incremento - numero ++

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

// retorna de 0 a 9 no console

//while lop

var i = 0;
while (i < 10) {
    console.log(1);
    i++;
}


//const e let no lugar de var para declarar variaveis.
//const -constante
// let - Alugar, deixar 
//var -  variavel

if(true) {
    const carro = 'fusca';
    console.log(carro); //agora passamos o console dentro do bloco {}
}
console.log(carro);


if(true) {
    var carro = 'fusca';
    console.log(carro); //agora passamos o console dentro do bloco {}
}
console.log(carro);


//