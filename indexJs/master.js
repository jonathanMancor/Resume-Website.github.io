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










$('#fourColMenu .cntr1_4:nth-child(1)').click(function () {
  loadPage('#fourColMenu','#aboutPage',1200)
});

$('body > header > div:nth-child(4) > button').click(function () {
  loadPage('#aboutPage','#fourColMenu',1200)
});







function loadPage(a,b,timeOut) {
    if (a == '#fourColMenu') homePageClose();
    else if (a == '#aboutPage') aboutPageClose();


  setTimeout(function(){
    if (b == '#fourColMenu') homePageOpen();
    else if (b == '#aboutPage') aboutPageOpen();
    $('section:not('+b+')').css('display','none')
  }, timeOut);
}loadPage(0,'#fourColMenu',0)






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
function homePageClose() {
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += 300;
    $('#fourColMenu .cntr1_4:nth-child('+ i +') img').fadeOut(t);
    $('#fourColMenu .cntr1_4:nth-child('+ i +') button').fadeOut(t);
    $('#fourColMenu .cntr1_4:nth-child('+ i +') ul').fadeOut(t);
  }
}

function aboutPageClose() {
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += 300;
    $('#aboutPage .cntr1_4:nth-child('+ i +') p').fadeOut(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') hr').fadeOut(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h2').fadeOut(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h4').fadeOut(t);
  }
}






//=================================PAGE OPEN FUNCTIONS=================================||
function homePageOpen() {
  $('#fourColMenu').css('display','flex')
  $('#fourColMenu .cntr1_4:nth-child(-n+4) img,button').css('display','none')
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += 300;
    $('#fourColMenu .cntr1_4:nth-child('+ i +') img').fadeIn(t);
    $('#fourColMenu .cntr1_4:nth-child('+ i +') button').fadeIn(t);
  }$('header > div:nth-child(4) > button').fadeIn()
}

function aboutPageOpen() {
  $('#aboutPage').css('display','flex')
  $('#aboutPage .cntr1_4 p,h2,h4,hr').css('display','none')
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += 300;
    $('#aboutPage .cntr1_4:nth-child('+ i +') p').fadeIn(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') hr').fadeIn(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h2').fadeIn(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h4').fadeIn(t);
  }$('header > div:nth-child(4) > button').fadeIn()
}
