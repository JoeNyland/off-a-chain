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

var showJumbotron = function(){
  $('.jumbotron.off-a-chain').show();
};

var entry = $(dictionary).sort(function(){ return 0.5 - Math.random()}).first()[0];
$('#weather-adjective').html(entry.weather,showJumbotron());
$('#dog-verb').html(entry.verb,showJumbotron());
