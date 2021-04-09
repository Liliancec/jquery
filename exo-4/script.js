console.log("exercice 4");

$(document).ready(function(){
    $('.btn-danger').on('click',function(){
        let alerte = $('<p>');
        let mail = $('.form-control').val();
        alerte.text('Merci '+mail+ ' nous vous tiendrons informé des différentes offres');
        $('.form-inline').append(alerte);
        var valeur = $('.form-control').val();
        console.log(valeur);
    })

    $('#myNavbar ul:first-child li:last-child').on('dblclick',function(){
        $('#myNavbar ul:first-child li:last-child').hide()
        
    });
    let compteur =0;

    $('.img-responsive').on('click',function(){
        $('#cart ').css('color', 'red');
        compteur = compteur + 1
        $('#cart').html("<span class='glyphicon glyphicon-shopping-cart'></span> Cart("+compteur+")");
    })

    $('.panel').hover(function(){
        console.log("l'utilisateur regarde" + $(this)[0].lastElementChild.textContent);
 
    })

    $('.form-control').on('click', function(){
        console.log("l'utilisateur suce");
       
    })

});