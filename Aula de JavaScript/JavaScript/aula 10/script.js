
// ADDEVENTLISTENER
//Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento
const img = document.querySelector('img');
 //elemento.AddEventListener(event, callback, options)
 img.addEventListener('click', function() {
    console.log('Clicou');
 })


//event prevetdefault() - previna o pasrao do evento 
// previne o comportamento padrao do evento  no broweser. Nocaso de um kun externo, poir exemplo, ira previnir que o link seja ativado
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event) {
    event.preventDefault(); //ativar o metodo preventdefault
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

//this
// a palavra chave de this pe uma  


const linkExterno2 = document.querySelector('a[href^="http"]');
function clickNoLinkExterno(event) {
    event.preventDefault(); //ativar o metodo preventdefault
    console.log(this);
}

linkExterno2.addEventListener('click', clickNoLinkExterno);

//diferentes eventos 
/* existem diversos eventos como click scroll resize keydow keyup mouseenter me mais. eventos pode ser adicionados a diferentes elemtnos, como o window e document também */

const h1 = document.querySelector('h1');
function callback(event) {
    console.log(event.type, event);//iremos passar o tipo e depois volto
}

h1.addEventListener('click', callback); //clicar no H1
//h1.addEventListener('mouseenter', callback);; //-- só passar o cursor do mouse
//window.addEventListener('scroll', callback); //--scroll do Mouse na pagina
//window..addEventListener('resize', callback); //diminuir o tamanho da tela
//window.addEdventListener( 'keydown', callback); //acionar qualquer tecla


//KEYBOARD - document.body - event add
//você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do kayboard

function handleKeyboard(event) {
    event.kay == ('a');
    document.body.classList.add('azul'); //cria uma classe com background-color 
}
window.addEventListener('keydown', handleKeyboard);
/*.azul{
    background-color:blue; //isso é no css
} */

