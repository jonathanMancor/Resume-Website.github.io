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

  if (a == '#aboutPage') aboutPageOpen();
  else if (a == '#fourColMenu') homePageOpen();

 $('section:not('+a+')').css('display','none')
}loadPage('#fourColMenu');


//=================================HOVER FUNCTIONS=================================||


function homeMenuHover() {
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
}homeMenuHover();




//=================================PAGE CLOSE FUNCTIONS=================================||
function homeMenuPageChange(a) {
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
    $('header > div:nth-child(4) > button').fadeIn()
  }, 800);
}


$('#fourColMenu .cntr1_4:nth-child(1) button').click(function () {
  homeMenuPageChange('#aboutPage');
});



//=================================PAGE OPEN FUNCTIONS=================================||
function homePageOpen() {
  $('#fourColMenu').css('display','flex')
  $('#fourColMenu .cntr1_4 img,button').css('display','none')
  $('#fourColMenu > .cntr1_4:nth-child(1) img,button').fadeIn();
  setTimeout(function(){
    $('#fourColMenu > .cntr1_4:nth-child(2) img,button').fadeIn();
  }, 200);setTimeout(function(){
    $('#fourColMenu .cntr1_4:nth-child(3) img,button').fadeIn();
  }, 400);setTimeout(function(){
    $('#fourColMenu .cntr1_4:nth-child(4) img,button').fadeIn();
  }, 600);setTimeout(function(){
    $('header > div:nth-child(4) > button').fadeIn()
  }, 800);
}

function aboutPageOpen() {
  $('#aboutPage').css('display','flex')
  $('#aboutPage .cntr1_4 p,h4,hr').css('display','none')
  $('#aboutPage .cntr1_4:nth-child(1) p,h4,hr').fadeIn();
  setTimeout(function(){
    $('#aboutPage .cntr1_4:nth-child(2) p,h4,hr').fadeIn();
  }, 200);setTimeout(function(){
    $('#aboutPage .cntr1_4:nth-child(3) p,h4,hr').fadeIn();
  }, 400);setTimeout(function(){
    $('#aboutPage .cntr1_4:nth-child(4) p,h4,hr').fadeIn();
  }, 600);setTimeout(function(){
    $('header > div:nth-child(4) > button').fadeIn()
  }, 800);
}
