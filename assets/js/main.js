var dictionary = [
  { weather:"windy", verb:"blow" },
  { weather:"cold", verb:"freeze" }
];

var showJumbotron = function(){
  $('.jumbotron.off-a-chain').show();
};

var entry = $(dictionary).sort(function(){ return 0.5 - Math.random()}).first()[0];
$('#weather-adjective').html(entry.weather,showJumbotron());
$('#dog-verb').html(entry.verb,showJumbotron());
