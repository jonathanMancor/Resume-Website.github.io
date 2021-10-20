//colors===========================================================
const palette = {
  pinkHex: '#ee2d7b',
  pinkRgb : '238,45,123,',

  greenHex: '#53d39b',

  yellowHex: '#fbb041',

  purpleHex: '#A459FF',
}

const fade ={
  //speed
  s: 1000,
  n: 300,
  nf: 250,
  f: 200,
  //totals
  s_t: 4000,
  n_t: 1200,
  nf_t: 1000,
  f_t: 800,
}









function setHomeBtns() {
  $('#fourColMenu .cntr1_4:nth-child(1)').click(function () {
    loadPage('#fourColMenu','#aboutPage',fade.nf_t)
  });

  $('#fourColMenu .cntr1_4:nth-child(2)').click(function () {
    loadPage('#fourColMenu','#workPage',fade.nf_t)
  });

  $('#fourColMenu .cntr1_4:nth-child(3)').click(function () {
    loadPage('#fourColMenu','#okiPage',fade.nf_t)
  });

  $('#fourColMenu .cntr1_4:nth-child(4)').click(function () {
    loadPage('#fourColMenu','#contactPage',fade.nf_t)
  });
}











function loadPage(a,b,timeOut) {

  $('#fourColMenu .cntr1_4').off('click');
  $('#fourColMenu .cntr1_4 button').off('click');
    if (a == '#fourColMenu') homePageClose();
    else if (a == '#aboutPage') aboutPageClose();
    else if (a == '#workPage') workPageClose();
    else if (a == '#okiPage') okiPageClose();
    else if (a == '#contactPage') contactPageClose();



  setTimeout(function(){
    if (b == '#fourColMenu') homePageOpen();
    else if (b == '#aboutPage') aboutPageOpen();
    else if (b == '#workPage') workPageOpen();
    else if (b == '#okiPage') okiPageOpen();
    else if (b == '#contactPage') contactPageOpen();
    $('section:not('+b+')').css('display','none')
    setHomeBtns();
  }, timeOut);


  $('body > header > div:nth-child(4) > button').click(function () {
    loadPage(b,'#fourColMenu',fade.f_t)
  });

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
    t += fade.f;
    $('#fourColMenu .cntr1_4:nth-child('+ i +') img').fadeOut(t);
    $('#fourColMenu .cntr1_4:nth-child('+ i +') button').fadeOut(t);
    $('#fourColMenu .cntr1_4:nth-child('+ i +') ul').fadeOut(t);
  }
}

function aboutPageClose() {
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += fade.f;
    $('#aboutPage .cntr1_4:nth-child('+ i +') p').fadeOut(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') hr').fadeOut(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h2').fadeOut(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h4').fadeOut(t);
  }
}

function workPageClose() {
  let t = 0;
   for (var i = 0; i < 5; i++) {
     t += fade.f;
     $('#workPage .cntr1_4:nth-child('+ i +') h2').fadeOut(t);
     $('#workPage .cntr1_4:nth-child('+ i +') img').fadeOut(t);
   }
}



function okiPageClose() {
  let t = 0;
   for (var i = 0; i < 5; i++) {
     t += fade.f;
     $('#okiPage .cntr1_4:nth-child('+ i +') h2').fadeOut(t);
   }
}


function contactPageClose() {
  let t = 0;
   for (var i = 0; i < 5; i++) {
     t += fade.f;
     $('#contactPage .cntr1_4:nth-child('+ i +') h2').fadeOut(t);
   }
}





//=================================PAGE OPEN FUNCTIONS=================================||
function homePageOpen() {
  $('#fourColMenu').css('display','flex')
  $('#fourColMenu .cntr1_4:nth-child(-n+4) img,button').css('display','none')
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += fade.f;
    $('#fourColMenu .cntr1_4:nth-child('+ i +') img').fadeIn(t);
    $('#fourColMenu .cntr1_4:nth-child('+ i +') button').fadeIn(t);
  }$('header > div:nth-child(4) > button').css('display','block')
}

function aboutPageOpen() {
  $('#aboutPage').css('display','flex')
  $('#aboutPage .cntr1_4 p,h2,h4,hr').css('display','none')
  let t = 0;
  for (var i = 0; i < 5; i++) {
    t += fade.f;
    $('#aboutPage .cntr1_4:nth-child('+ i +') p').fadeIn(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') hr').fadeIn(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h2').fadeIn(t);
    $('#aboutPage .cntr1_4:nth-child('+ i +') h4').fadeIn(t);
  }$('header > div:nth-child(4) > button').css('display','block')
}


function workPageOpen() {
  $('#workPage').css('display','flex')
  $('#workPage .cntr1_4 h2,img').css('display','none')
  let t = 0;
   for (var i = 0; i < 5; i++) {
     t += fade.f;
     $('#workPage .cntr1_4:nth-child('+ i +') h2').fadeIn(t);
     $('#workPage .cntr1_4:nth-child('+ i +') img').fadeIn(t);
   }$('header > div:nth-child(4) > button').css('display','block')
}


function okiPageOpen() {
  $('#okiPage').css('display','flex')
  $('#okiPage .cntr1_4 h2').css('display','none')
  let t = 0;
   for (var i = 0; i < 5; i++) {
     t += fade.f;
     $('#okiPage .cntr1_4:nth-child('+ i +') h2').fadeIn(t);
   }$('header > div:nth-child(4) > button').css('display','block')
}


function contactPageOpen() {
  $('#contactPage').css('display','flex')
  $('#contactPage .cntr1_4 h2').css('display','none')
  let t = 0;
   for (var i = 0; i < 5; i++) {
     t += fade.f;
     $('#contactPage .cntr1_4:nth-child('+ i +') h2').fadeIn(t);
   }$('header > div:nth-child(4) > button').css('display','block')
}
