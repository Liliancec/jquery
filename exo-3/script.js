console.log('----------');
console.log('Exercice 3');
console.log('----------');

// Faites toutes vos manipulations de DOM ici
$('h1').text('lilian , homme aux milles et une femmes');
$('#tagline').text('salut je suis lilian le petit etre de lumiere');
$('.nav:first-child').remove();
$('.glyphicon-log-in').removeClass('glyphicon-log-in').addClass("bi bi-arrow-90deg-right");
$('footer').html('<strong>**Copyright 2021** </strong>');
$('#work1 p').text("mon projet");
$('#work1 img').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWKjpdFD8CP3SypnQPkdhgTA4xEUF1WN_bA&usqp=CAU');
var newProject = $('<div>');
var newProjectText = $('<p>').text('voici mon projet hyper cool');
var newProjectImg = $('<img>').attr('src','https://cdn.shopify.com/s/files/1/0039/8668/6063/files/Little_goku_large.png?v=1560804059').width('250px');
var newText = $(".jumbotron").append(newProject).append(newProjectText).append(newProjectImg); 
$('footer ').addClass('intro')


// Et pas dans votre fichier HTML ! 