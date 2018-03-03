/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  function renderTweets(tweets) {
    $('#tweets-container').empty();
    $('#textarea').val('');
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.single-tweet').prepend(newTweet);
    };
  }
  function createTweetElement(tweetObj) {
    var username = tweetObj.user.name;
    var handle = tweetObj.user.handle;
    var smAvatar = tweetObj.user.avatars.small;
    var midAvatar = tweetObj.user.avatars.regular;
    var lgAvatar = tweetObj.user.avatars.large;
    var content = tweetObj.content.text;
    var dateFromNow = moment(tweetObj.created_at).fromNow();

    var $article = $('<article>').addClass('article');
    var $header = $('<header>');
    var $logo = $(`<img class="logo" src="${smAvatar}" alt="propfile picture">`);
    var $h2 = $('<h2>').addClass('user').text(username);
    var $h5 = $('<h5>').addClass('handle').text(handle);
    var $content = $('<div>').addClass('content').text(content);
    var $footer = $('<footer>').addClass('footer');
    var $dateStamp = $('<div>').addClass('date').text(dateFromNow);
    var $icon = $('<div>').addClass('icon');
    var $flag = $('<i>').addClass('flag').text('🏳️‍🌈');
    var $share = $('<i>').addClass('share').text('💫');
    var $like = $('<i>').addClass('like').text('💓');
    
    $icon.append($flag, $share, $like);
    $header.append($logo, $h2, $h5);
    $footer.append($dateStamp, $icon);
    $article.append($header, $content, $footer);
    
  return $article;
  };

  $('.compose').click(function () {
    $('section.new-tweet').slideToggle('slow', function () {
      $('#textarea').focus();
    });
  });

  const loadTweet = function () {
    $.get('/tweets').done((tweet) => {
    renderTweets(tweet);
    });
  }
  
  $('#tweets').submit(function(event) {
    event.preventDefault();
    var formVal = $('#textarea').val();
    let maxLength = 140;
    var preventNaughtyUser = formVal.trim();
    if (preventNaughtyUser.length === 0) { 
      alert('No Content');
    } else if (preventNaughtyUser.length > maxLength) {
        alert('Message Too Long');
      } else {
          var newTweet = {text: formVal};
          $.post('/tweets', newTweet).done((newTweet)=>{
            loadTweet();  
          });
        }
  })
  loadTweet();
})