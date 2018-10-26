$(document).ready(function(){
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/ESL_SC2', function(data){
    $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/freecodecamp', function(data2){
      $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/test_channel', function(data3){
        jQuery(eslimg).prependTo("#esl");
        $("#esl").append(JSON.stringify(data['status']));
        jQuery(fccimg).prependTo("#freecodecamp");
        $("#freecodecamp").append(JSON.stringify(data2['status']));
        jQuery(testimg).prependTo("#test");
        $("#test").append(JSON.stringify(data3['status']));
      });
    });
  });
});