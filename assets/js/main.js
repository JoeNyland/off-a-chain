var dictionary = [
  { weather:"windy", verb:"blow" },
  { weather:"cold", verb:"freeze" },
  { weather:"breezy", verb:"blow" },
  { weather:"sunny", verb:"shine" },
  { weather:"wet", verb:"wash" },
  { weather:"snowy", verb:"freeze" },
  { weather:"frosty", verb:"freeze" },
  { weather:"icy", verb:"freeze" },
  { weather:"hot", verb:"melt" },
  { weather:"foggy", verb:"fog" },
  { weather:"calm", verb:"bore" },
  { weather:"mild", verb:"melt" },
  { weather:"stormy", verb:"frighten" },
  { weather:"cloudy", verb:"sneak" },
  { weather:"dull", verb:"sneak" }
];

var addTweetButton = function(twttr,msg) {
  var link = document.createElement('a');
  link.setAttribute('href', 'https://twitter.com/share');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('id', 'twitterbutton');
  link.setAttribute("data-text", "" + msg + "");
  link.setAttribute("data-size", "large");
  link.setAttribute("data-hashtags", "OffAChain");
  var wrapper = document.getElementById('quote-wrapper');
  wrapper.appendChild(link);
  twttr.widgets.load(wrapper);
};

var buildQuoteMsg = function(entry) {
  return "It's so "+entry.weather+" today, you could "+entry.verb+" a dog off a chain! -- No one, ever";
};

var generateQuote = function() {
  return $(dictionary).sort(function(){ return 0.5 - Math.random()}).first()[0];
};

var msg = buildQuoteMsg(generateQuote());
document.getElementById('quote').innerHTML = msg;
$('.jumbotron.off-a-chain').show();
twttr.ready(
  function (twttr) {
    addTweetButton(twttr,msg);
  }
);
