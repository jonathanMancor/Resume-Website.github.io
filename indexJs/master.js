//colors===========================================================
const palette = {
  pinkHex: '#ee2d7b',
  pinkRgb : '238,45,123,',

  greenHex: '#53d39b',

  yellowHex: '#fbb041',

  purpleHex: '#A459FF',
}

const fadeControl ={
  //speed
  slow: '1000',
  normal: '600',
  normal: '200',
}

function loadPage(a) {
  $(a).css('display','flex')
  $('section:not('+a+')').css('display','none')
}loadPage('#fourColMenu');





function fourColMenuHover() {
  $('#fourColMenu .cntr1_4 ul').css('display','none')


  $('#fourColMenu .cntr1_4:nth-child(1)').hover(
    function() {
    $('#fourColMenu .cntr1_4:nth-child(1) ul').fadeIn();
  }, function() {
    $('#fourColMenu .cntr1_4:nth-child(1) ul').fadeOut();
  });


  $('#fourColMenu .cntr1_4:nth-child(2)').hover(
    function() {
    $('#fourColMenu .cntr1_4:nth-child(2) ul').fadeIn();
  }, function() {
    $('#fourColMenu .cntr1_4:nth-child(2) ul').fadeOut();
  });


  $('#fourColMenu .cntr1_4:nth-child(3)').hover(
    function() {
    $('#fourColMenu .cntr1_4:nth-child(3) ul').fadeIn();
  }, function() {
    $('#fourColMenu .cntr1_4:nth-child(3) ul').fadeOut();
  });

  $('#fourColMenu .cntr1_4:nth-child(4)').hover(
    function() {
    $('#fourColMenu .cntr1_4:nth-child(4) ul').fadeIn();
  }, function() {
    $('#fourColMenu .cntr1_4:nth-child(4) ul').fadeOut();
  });
}fourColMenuHover();





function fourColMenuPageChange(a) {
  $('#fourColMenu .cntr1_4:nth-child(1) img,button,ul').fadeOut();
  setTimeout(function(){
    $('#fourColMenu .cntr1_4:nth-child(2) img,button,ul').fadeOut();
  }, 200);setTimeout(function(){
    $('#fourColMenu .cntr1_4:nth-child(3) img,button,ul').fadeOut();
  }, 400);setTimeout(function(){
    $('#fourColMenu .cntr1_4:nth-child(4) img,button,ul').fadeOut();
  }, 600);setTimeout(function(){
    $('#fourColMenu').css('display','none')
    loadPage(a);
  }, 800);
}


$('#fourColMenu .cntr1_4:nth-child(1) button').click(function () {
  fourColMenuPageChange('#aboutPage');
});
