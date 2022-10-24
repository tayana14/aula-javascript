//outerHTML E INNERTEXT
/* Propriedades que retornam uma string contendon o html ou texo 
é possivel atribuir um novo valor para as mesmas element.
innerText= 'novo texto' */

const h1 = document.querySelector('h1');
console.log(h1.outerHTML); //- TODO HTML DO ELEMENTO
console.log(h1.innerText); // TEXTO,SEM TAGS

//MANIPULANDO ELEMENTOS
//


const animais = document.querySelector('.animais'); //aonde voce quer colocar 
const titulo = contato.querySelector('.titulo'); //aqui é o que vc quer movimentar
    animais.appendChild(titulo); //move o ultimo filho (h1 - contato) para dentro da classe animais

    //remove
const faq = document.querySelector('.faq');
const titulo2 = faq.querySelector('.titulo');
faq.removeChild(titulo2);