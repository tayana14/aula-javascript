// https://api.jquery.com/category/events/
//https://jquery.com/
//.click(), acuona uma função apois o usario clicar no target com evento click
//$ ou jquery -     cLASES AMBUTIDAS DO Javascript dentro da biblioteca Jquery

/*$('a').click(function(){ //function() em uma função anõnima
$('a').text('Clicou');//Trocar o Texto no link (para nao da conflito puxe a.classe)
});*/


 /*$('a').on('click', function(){//function() em uma função anônima
    $('.abrir-modal').text('Clicou'); //trocar o texto no link com a Classe ".abrir-modal"
});*/

// use THIS para se referir ao objeto do evento 

/*$('a').on('click', function(){//function()em uma função 
$(this).text('Clicou');
});*/


//mouseenter - Primeira etapa do hover 

$('p').mouseenter('mouseenter', function(){ //function() em uma função anonima
    $(this).text('Ola! Seja Bem-Vindo!'); //no caso, a referencia de troca de sera em qualquer (a) ancora
});

//mouseenter e mouseleave ( Segunda etapa do hover)


/*$('p').mouseleave('mouseleave', function(){ //function() em uma função anonima
    $(this).text('Curso para iniciante e pessoas que pretendem se atualizar. Do design ao código, utilizando HTML5, CSS3, jQuery e com um design responsivo.'); //no caso, a referencia de troca de sera em qualquer (a) ancora
});*/

