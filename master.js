$(document).ready(function(){

  function createInventory() {

  }

// loop che crea nell'html i box che andranno a comporre la griglia
  for (var i = 0; i < 43; i++) {
    var boxItem = '<div class="items-box"></div>';
    $('.items-grid').append(boxItem);
  }

  // Qui vado a prendere il valore del lato di ogni singolo box che sarà un sesto della grandezza del box contenitore grid
  var boxSize = $('.items-grid').width() / 6;

  // qui vado a settare al box il valore preso precedentemente. Setto sia l'altezza che la base del quadrato
  $('.items-box').css('width', boxSize + 'px');
  $('.items-box').css('height', boxSize + 'px');

});
