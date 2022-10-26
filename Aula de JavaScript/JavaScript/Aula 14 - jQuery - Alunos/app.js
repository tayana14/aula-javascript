//.addClass() - ADICIONAR UMA OU MAIS CLASSE AO ELEMENTO 
/*$('a.abrir-modal').click(function(){ //Seleciona a classe BRIR-MODAL, colocando a função de clique
    $('.modal').addClass('active');//classe active, insirida no CSS
});*/

//.addClass() - Adiciona uma ou mais classe ao elemento

/*$('a.abrir-modal').click(function(){ //seleciona a classe abrir-modal, colocando a função de clique.
    $('.modal').addClass('ative gray'); //Classe avtive e gray, inserida no css.

});*/

//.toggleClass() a classe ao elemnto caso ela não exista ou remove, caso exista.

$('a.abrir-modal').click(function(){ //seleciona a classe abrir-modal, colocando a função de clique
    $('.modal').toggleClass('active');// classe active inserida no css
});


