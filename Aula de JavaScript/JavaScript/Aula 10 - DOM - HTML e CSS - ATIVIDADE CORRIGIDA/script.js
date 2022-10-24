//ADDVENTLISTENER
//Adiciona uma função ao elemento, esta chamada de callback, que sera ativada assim que certp evento ocorrer neste elemento.

const img = document.querySelector('img');

//elemnto.addEventListener(envent, callback, options)
img.addEventListener('click', function() {
    console.log('Clicou');
})




//EVENT.PREVENTDEFAULT() - Previna o padrão do evento
//previne o comportamento padrão do evento no browser. no cado de um link externo, por exemplo, ira previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
    event.preventDefault();     //Ativar o método preventDefault
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);


//THIS
/*a PALAVRA CHEV THIS É UMA PALAVRA especial de javaScript, que pode fazer referencia a diferentes objetivos dependendo  do contexto. no caso de eventos, ela fará refencia ao elemento em que addEventListener foi adicionado*/

const linkExterno2 = document.querySelector('a[href^="http"]');

function clickNoLinkExterno(event) {
    event.preventDefault();     //Ativar o método preventDefault
    console.log(this);
}

linkExterno2.addEventListener('click', clickNoLinkExterno);


//Diferentes eventos 
/*Existem diversos eventos como click, scrocll, resize, keydow, keyup, mouseenter e mais. Eventos podem ser adicionadas a diferentes elementos, como window(pagina toda) e document também.*/

const h1 = document.querySelector('h1');
function callback(event) {
    console.log(event.type, event); //Iremos passar o tipo e depois o evento

}

h1.addEventListener('click', callback); //Clicar no h1

//h1.addEventListener ('mouseenter', callback); //Só passar o cursor do mouse

//window.addEventListener('scroll', callback); //scroll do mouse na pagina

//window.addEventlistener('resize', callback); //Diminuir o tamanho da tela

//window.addEventListener('keydown', callback); Acionar qualquer tecla 




////Keyboard - document.body - event add
//Você pode adicionar atalhos para facilitar a nevegação no seu site, atraves de eventos keyboard

//TOUG

/*function handleKeyboard(event) {
    event.key === ('a');
    document.body.classList.add('azul');

}

window.addEventListener('keydown', handleKeyboard);*/

/*css
.azul{
    background-color:blue;
} toUpperCase()
*/


function handleClickT(event) { //aumenta o texto todo do site apertando o T --- PRECISA CRIAR A CLASSE NO CSS// coloquei no html, pq ja gavia um na body
    console.log(event.key);
    if(event.key === 't'){

    document.documentElement.classList.toggle('textomaior');

    }
}
window.addEventListener('keydown', handleClickT);





/*function handleKeyboard(event) {
   if(event.key === 'a')
    document.body.classList.toggle('azul'); //só para deixar azul apertando a tecla A

}

window.addEventListener('keydown', handleKeyboard);*/

function handleKeyboard(event) {  //ele muda de azul volta para o branco,(se senao) vermelhor volta para branco
    if(event.key === 'a')
     document.body.classList.toggle('azul'); 
     else if(event.key === 'v')
     document.body.classList.toggle('vermelho'); //cria uma classe com background color

 
 }
 window.addEventListener('keydown', handleKeyboard);
 

 // Selecione todos os elementos do site começando a partir do body.
 const todosElementos = document.querySelectorAll('body *');
    console.log(todosElementos);





