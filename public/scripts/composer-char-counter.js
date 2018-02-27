document.addEventListener('DOMContentLoaded', function(event) {

$('#textarea').on('keyup', function() {
  var textLength = $(this).val().length;
  var length = 140 - textLength;
  $('.counter').text(length);
});


















}); 