
const downKeys = new Set();

let x = 0;
const hallway1 = $('#hallway1');

$('#characterCntr').css('background-image', 'url(images/skaterBoy/gif/assets/walk/walkman-01.png)');





$(document).keydown(function(){
  downKeys.add(event.key);

});
$(document).keyup(function(){
  downKeys.delete(event.key);

});

function update(){
  function isDown(key) {
    return downKeys.has(key);
  }

  const shiftBtn = isDown('Shift') ? 5 : 1;




  if (downKeys.has('ArrowLeft')) {
    walkAnimLeft();

    x += shiftBtn;
    $('#hallway1').css('left', (x * 5) + 'px');
    if(x > 0){
      x = 0;
      $('#characterCntr').css('background-image', 'url(images/skaterBoy/gif/assets/walk/walkman-01.png)');
    }
  }






  else if (downKeys.has('ArrowRight')) {
    walkAnimRight();
    x -= shiftBtn;
    $('#hallway1').css('left', (x * 5) + 'px');
  }










  else {
    $('#characterCntr').css('background-image', 'url(images/skaterBoy/gif/assets/walk/walkman-01.png)');
  }
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);



var animPort = ["walkman-01.png", "walkman-02.png", "walkman-03.png", "walkman-04.png", "walkman-05.png"];



function walkAnimRight() {
  $('#characterCntr').css('background-image', 'url(images/skaterBoy/gif/WalkmanWalkRight.gif)');
}

function walkAnimLeft() {
  $('#characterCntr').css('background-image', 'url(images/skaterBoy/gif/WalkmanWalkLeft.gif)');
}







//button controls
