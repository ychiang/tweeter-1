/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      var $tweet = createTweetElement(tweet);
      $('.single-tweet').append($tweet);
  });
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

  renderTweets(data);

  })