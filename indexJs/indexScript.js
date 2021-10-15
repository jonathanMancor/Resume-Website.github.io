var okiDoor = document.getElementById('okiDoor').src;
var mancorDoor = document.getElementById('mancorDoor').src;







//open oki preface
$('#okiDoor').click(function () {
  $('#blackScreen').css('display', 'block');

  $('#blackScreen').fadeTo( 500, 1.0 );
  $('#doorDisplay').css('display', 'none');
  $('#okiPreface').css('display', 'flex');
  $('body').css('color', 'white');
});


//oki door animations
$('#okiDoor').mouseover(function () {
  $('#okiDoor > img').attr('src', 'indexImg/okiDoorFrames/okiDoorOpen.gif');
  if ( okiDoor = 'indexImg/okiDoorFrames/okiDoorOpen.gif' ) {
    return
  }
});
$('#okiDoor').mouseout(function () {
  $('#okiDoor > img').attr('src', 'indexImg/okiDoorFrames/okiDoorClose.gif');
  if ( okiDoor = 'indexImg/okiDoorFrames/okiDoorClose.gif' ) {
    return
  }
});

//play oki yes
$('#playYes').click(function () {
  location.assign("indexProjects/oki-v6/index.html");
});

//play oki no
$('#playNo').click(function () {
  $('#blackScreen').fadeTo( 500, 0 );

  $('#okiPreface').css('display', 'none');
  $('body').css('color', 'black');
  setTimeout(function(){
    $('#doorDisplay').css('display', 'flex');
  }, 200);
});























//mancor door animations
$('#mancorDoor').mouseover(function () {
  $('#mancorDoor > img').attr('src', 'indexImg/mancorDoorFrames/mancorDoorOpen.gif');
  if ( mancorDoor = 'indexImg/mancorDoorFrames/mancorDoorOpen.gif' ) {
    return
  }
});
$('#mancorDoor').mouseout(function () {
  $('#mancorDoor > img').attr('src', 'indexImg/mancorDoorFrames/mancorDoorClose.gif');
  if ( mancorDoor = 'indexImg/mancorDoorFrames/mancorDoorClose.gif' ) {
    return
  }
});

$('#mancorDoor').click(function () {
  location.assign("indexProjects/portfolio-2021/indexPortfolio.html");
});
