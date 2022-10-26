//função .animate()- pode animar de uma propriedades css para o valor que vc definir

/*$('.modal').animate({
    height:250
});*/

//função .animate() - pode animar mais de uma propriedade css para o valor que vc definir 

/*$('.modal').animate({
    height:250,
    width:200.
});*/

//função .animate() - podemos tambem animar acionando outra função 

$('a.abrir-modal').click(function(){
    $('.modal').animate({
        height:500,
        width:200,
    })
});

//ajuste de velocidade de animação 
