$(document).ready(function(){
  // Select existing element(s)
  var $app = $('#app');
  $app.html('');

  // Create new Elements
  var $title = $('<h1>Twiddler</h1>');
  var $feed = $('<div id="feed"></div>');
  var $updateFeed = $('<button id="update-feed">Update Feed</button>');
  var $content = $('<div id="content"></div>');
  var $leftContent = $('<div id="left-content"></div>');
  var $centerContent = $('<div id="center-content"></div>');
  // -- New Tweet Form
  var $newTweetContainer = $('<div class="new-tweet-container"></div>')
  var $newTweetForm = $('<form id="new-tweet-form"></form>');
  var $userLabel = $('<label for="username">Username</label>');
  var $userInput = $('<input type="text" name="username" id="username" required>');
  var $msgLabel = $('<label for="message">Message</label>');
  var $msgInput = $('<input type="text" name="message" id="message" placeholder="What\'s Happening?" required>');
  var $newTweetBtn = $('<button id="submit-tweet">Twid</button>')
  // -- Friends List
  var $friendsListContainer = $('<div class="fl-container"></div>')
  var $friendsListTitle = $('<h2 class="friends-list-title">Friends</h2>');
  var $friendsList = $('<ul id="friends-list"></ul>');
  var $friends = $(Object.keys(streams.users));
  $friends.each(function(i, element) {
    $friendsList.append('<li class="friend">@' + element + '</li>')
  });


  // Event Handler / Helper Functions
  var addTweet = function(newTweet) {
    var username = newTweet.user;
    console.log(`Username: ${username}`);
    var users = streams.users;
    if (users.hasOwnProperty(username)) {
      streams.users[username].push(newTweet);
    } else {
      users[username] = [newTweet];
    }
    streams.home.push(newTweet);
  };

  var renderFeed = function(user) {
    var tweet = user !== undefined ? streams.users[user] : streams.home;
    var arrLastIdx = tweet.length - 1;

    for (var i = arrLastIdx; i >= 0; i--) {
      var $tweet = $('<article class="tweet"></article>');
      var $tweetUserInfo = $('<div class="tweet-user-info"></div>');
      var $profilePhoto = $('<img class="profile-photo">');
      var $username = $('<span class="username"></span>')
      var $timestamp = $('<span class="timestamp"></span>');
      var timeagoTimestamp = jQuery.timeago(tweet[i].created_at);
      var $message = $('<span class="message"></span>');
      var $tweetMsg= $('<div class="tweet-msg"></div>');
      var $imgComment = $('<i class="icon comment far fa-comment"></i>');
      var $imgRetweet = $('<i class="icon retweet fas fa-retweet"></i>');
      var $imgLike = $('<i class="icon like far fa-heart"></i>');
      var $imgShare = $('<i class="icon share fas fa-share-alt"></i>');
      var $tweetIcons= $('<div class="tweet-icons"></div>');

      $profilePhoto.attr("src", tweet[i].profilePhotoURL);
      $username.text('@' + tweet[i].user);
      $timestamp.text(timeagoTimestamp);
      $message.text(tweet[i].message);
      $(".icon").attr("src", "./assets/icons/placeholder.png");

      $username.on("click", handleUsernameClick);

      // append to DOM
      $tweetUserInfo.append($profilePhoto, $username, $timestamp);
      $tweetMsg.append($message);
      $tweetIcons.append($imgComment, $imgRetweet, $imgLike, $imgShare);
      $tweet.append($tweetUserInfo, $tweetMsg, $tweetIcons);
      $tweet.appendTo($feed);
    }
  };

  var updateFeed = function(event) {
    if ($updateFeed.text() === 'Back') {
      $updateFeed.text('Update Feed');
    };
    $feed.empty();
    $(".tweet").remove();
    renderFeed();
  }

  var handleUsernameClick = function(event) {
    var user = event.target.innerText.slice(1); // remove leading @
    $feed.empty();
    $(".tweet").remove();
    renderFeed(user);
    $updateFeed.text('Back');
  }

  var publishTweet = function(event) {
    event.preventDefault();
    var tweet = {};
    var data = $newTweetForm.serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
  }, Object.create(null));
    tweet.user = data.username;
    tweet.message = data.message;
    tweet.created_at = new Date();
    tweet.profilePhotoURL = './assets/img/visitor.png';
    addTweet(tweet);
    updateFeed();
    $newTweetForm.trigger("reset");
    document.body.scrollTop = document.documentElement.scrollTop = 0; // jump to top
  };

  // Event Listeners
  $updateFeed.on("click", updateFeed);
  $newTweetForm.on("submit", publishTweet);

  // Append Elements to the DOM
  $title.appendTo($app);

  $newTweetForm.append($userLabel, $userInput, $msgLabel, $msgInput, $newTweetBtn);
  $newTweetContainer.append($newTweetForm);

  $friendsListContainer.append($friendsListTitle, $friendsList);
  $leftContent.append($friendsListContainer);
  $leftContent.appendTo($content);

  $centerContent.append($newTweetContainer)
  $centerContent.append($updateFeed, $feed);
  $centerContent.appendTo($content);
  $content.appendTo($app);

  var $friend = $(".friend");
  $friend.on("click", function(event) {
    event.stopPropagation();
    handleUsernameClick(event);
  });

  // Pre-populate home feed
  renderFeed();

  window.isItBeautifulYet = true;
});