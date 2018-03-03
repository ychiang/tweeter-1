$(function() {
  const tweetMaxLength = 140;
  $('#textarea').on('input', function() {
    var textLength = $(this).val().length;
    var length = tweetMaxLength - textLength;
    var counter = $(this).parent().find('.counter');
    var errorClass = 'error';
    if (length < 0) {
      counter.addClass(errorClass);
    } else {
      counter.removeClass(errorClass);
    }
    counter.text(length);
  });
});


