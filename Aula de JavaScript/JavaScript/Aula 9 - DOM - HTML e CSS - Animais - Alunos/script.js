//ID

const animais = document.getElementById('animais'); //seleciona elemnto vom id
console.log(animais)

//class e tag
//getElementsByClassNome e getElementsByTagname selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada
//seleciona pela classe, retorna um htmlcolection 
//id sem 's' e com class coloca 's'

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

//seleciona a primeira classe ----- gridSection[0] const gridSection = document.getElementsByClassName ('grid-section');
//retorna o primeiro elemento
//console.log(gridSection[0]);
const contato = document.getElementsByClassName('grid-section contato');
console.log(contato);
//retorna os elementos que tiverem as duas classses "grid-section contato''

//seleciona todas as UL'S, retorna uma HTMLcollection
const ul = document.getElementsByTagName('ul');
console.log(ul); //selecione pelas UL'S, retorna uma HTMLCOLECTION

//SELETOR geral único - querySelector
//QuerySelector retorna o primeiro elemento que combinar com o seu seletorcss.

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);
//seleciona a primeira Ul

const ultimoItem = document.querySelector('.animais-lista li:last-child');
console.log(ultimoItem) //seleciona o ultimo elemento da lista 

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno); //seleciona o primeiro link

//seletor geral lista - querySelectorALL
//querySelectorAll retorna todos os elementos compativeis com o selector css em uma NodeList

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg) //Seleciona todas (ALL) as imagens com a classe .Animais

const titulos = document.querySelectorAll('.titulo');
console.log(titulos)

//htmlcollection vs nodelist
//html collection (mais metodos e atualização em tempo real)
//que o nodelist.
// a diferença esta nos metodos e priorodades de ambas. Alem disso, a nodelist retornaria com queryselectorAll é estatica 

const gridSectionHtml =  document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section'); //testar a adição de uma nova class
console.log(gridSectionHtml);
console.log(gridSectionNode);







