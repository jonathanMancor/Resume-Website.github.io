// Sets a key up and down value to track WASD key presses
window.addEventListener("keydown", function(eventKey) {
  keys[eventKey.keyCode] = true;
});

window.addEventListener("keyup", function(eventKey) {
  delete keys[eventKey.keyCode];
  player.moving = false;
});

const keys = [];





``
const playerCanvas = document.getElementById('canvas1');
const ctx = playerCanvas.getContext('2d');
ctx.font = 'Ubuntu, sans-serif;';


const tileSize = 32;
//var sceneParamVar = 'none';
var mainMenu = 'initial';
var freezeMovement = false;
var terminalActive = false;
var terminalState = false;
var windowMode = 'canvasMode';




var viewport = {
	x: 0,
  y: 0,
  width: 800,
  height: 512
}

const playerSprite = new Image();
playerSprite.src = "img/sprites/behemundtSpriteSheet.png";

const therodorGrafSprite = new Image();
therodorGrafSprite.src = "img/sprites/warmundtSpriteSheet.png";

const ramdtEberlichtSprite = new Image();
ramdtEberlichtSprite.src = "img/sprites/behemundtSpriteSheet.png";

const gothfriedVonFurstenbergSprite = new Image();
gothfriedVonFurstenbergSprite.src = "img/sprites/demundtSpriteSheet.png";







const warmundtSprite = new Image();
warmundtSprite.src = "img/sprites/warmundtSpriteSheet.png";

const behemundtSprite = new Image();
behemundtSprite.src = "img/sprites/behemundtSpriteSheet.png";

const demundtSprite = new Image();
demundtSprite.src = "img/sprites/demundtSpriteSheet.png";







const tileMapImage = new Image();
tileMapImage.src = "img/16x16BunkerTileMap.png";

const objectSpriteImage = new Image();
objectSpriteImage.src = "img/16x16BunkerObjectTileMap.png";



const backgroundTile = new Image();
backgroundTile.src = "img/bgTiles/bunkerBgTile.png";

const emptyImg = new Image();
emptyImg.src = "img/emptyImg.png";


const player = {
  img: playerSprite,
  x: (viewport.width / 2 ) - (tileSize / 2),
  y: (viewport.height / 2 ) - (tileSize / 2),
  width: 1 * tileSize,
  height: 2 * tileSize,
  frameX: 0,
  frameY: 0,
  speed: 4,
  moving: false
}



///////scenes
// const pqMapParameter = {
//   x: (viewport.width / 2 ) - (tileSize / 2),
//   y: (viewport.width / 2 ) - (tileSize / 2),
//
//   mapW: 8,
//   mapH: 12,
//   ceil: 0.5,
//   frameX: 0,
//   frameY: 0
// }



// NPC variables are set after map parameters
//because the position x,y of npc is relative to map x,y


class Character {
  constructor(img,x,y,width,height,frameX,frameY){
    this.img = img;
    this.x = x * tileSize;
    this.y = y * tileSize;
    this.width = width * tileSize;
    this.height = height * tileSize;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 4;
    this.moving = false;
  }
};
class SceneObject {
  constructor(img,x,y,width,height,frameX,frameY,spawnX,spawnY){
    this.img = img;
    this.x = x * tileSize;
    this.y = y * tileSize;
    this.width = width * tileSize;
    this.height = height * tileSize;
    this.frameX = frameX;
    this.frameY = frameY;
    this.spawnX = spawnX;
    this.spawnY = spawnY;
    //collideDetect(player,b)
  }
};
class MapParameter {
  constructor(x,y,width,height,frameX,frameY,ceil){
    this.x = (viewport.width/2) -(width*tileSize)/2;
    this.y = (viewport.height/2) -(height*tileSize)/2;
    this.width = width;
    this.height = height;
    this.frameX = 0;
    this.frameY = 0;
    this.ceil = ceil;
  }
};
//var player = new Character(therodorGrafSprite,(viewport.width / 2 ) - (tileSize / 2),(viewport.height / 2 ) - (tileSize / 2),1,2);
//All are set to their default position
var therodorGraf = new Character(therodorGrafSprite,12,5,1,2,0,2);
var ramdtEberlicht = new Character(ramdtEberlichtSprite,10,6,1,2,0,1);
var gothfriedVonFurstenberg = new Character(gothfriedVonFurstenbergSprite,13,6,1,2,0,1);

var standardGuard = new Character(warmundtSprite,13,6,1,2,0,1);

var terminalObj = new SceneObject(objectSpriteImage,0,0,1,2,0,0,-5,-4);
var playerBed = new SceneObject(objectSpriteImage,14.5,8,1,2,1,0,-5,-4);
var terrarium = new SceneObject(objectSpriteImage,0,0,2,3,5.5,0,-5,-4);

var doorLeft = new SceneObject(objectSpriteImage,9.5,8,1,2,-1,0,-5,-4);
//var emptyObj = new SceneObject(emptyImg,0,0,0,0,0,0,0,0);



var pqMapParameter = new MapParameter(0,0,8,12,0,0,0.5);
var ccMapParameter = new MapParameter(0,0,12,12,0,0,0.5);


//indexes what page gets shown on load page
var sceneData = {
  parameter: pqMapParameter,
  /* LIST: name
    -privateQuarters
    -commandCenter
    -highCouncilRoom
  */

  //set the player spawn point on page load
  layout: pqMapLayout,
  bg: backgroundTile.src,
  x: 0,
  y: 0,

}



// FINDS SCENE OUSIDE OF LOOP==========================================

// scene orientation
//this occurs before the image is drawn and on image change

//filters through all scene names
// sets sceneData x and y to position scenes
//orientScene() places the scene has previously stated
//ramdtEberlicht
function findOrientScene() {
  if (sceneData.parameter == pqMapParameter){

    backgroundTile.src = "img/bgTiles/bunkerBgTile.png";
    setPlayerSpawn(12,8);

  }else if (sceneData.parameter == ccMapParameter){
    setPlayerSpawn(16.4,8);
    sceneData.layout = ccMapLayout;

    backgroundTile.src = "img/bgTiles/bunkerBgTile.png";
    //scene.bg = backgroundTile;
  }
  orientScene(sceneData.parameter);
  $('#canvas1').css('background-image', 'url(' + sceneData.bg + ')');
}

function orientToSceneSize(sceneParamVar) {
  //----------------SET X, Y --------------------
  //NPC
  therodorGraf.x += sceneParamVar.x + (sceneData.x +1) * tileSize;
  therodorGraf.y += sceneParamVar.y + (sceneData.y +1 + sceneParamVar.ceil) * tileSize;

  //OBJECTS
  terminalObj.x += sceneParamVar.x + (sceneData.x +1) * tileSize;
  terminalObj.y += sceneParamVar.y + (sceneData.y +1) * tileSize;

  //DOORS
  doorLeft.x += sceneParamVar.x + (sceneData.x +1) * tileSize;
  doorLeft.y += sceneParamVar.y + (sceneData.y +1) * tileSize;
}


var speechBoxMarginT = parseFloat($('.speechBox').css('margin-top'));
function orientScene(currentScene) {
  currentScene.x += sceneData.x * tileSize;
  currentScene.y += sceneData.y * tileSize;
  $('#camera').css('width', viewport.width);
  $('#camera').css('height', viewport.height);
  $('#camera > div').css('width', viewport.width);
  $('#camera > .console').css('height',   200);
  $('#camera > div:nth-child(-n+2)').css('height', viewport.height);




  if(terminalState == false){
  $('#camera > .terminalCntr').css('margin-top', -1 * viewport.height);
  }else{
    $('#camera > .terminalCntr').css('margin-top', 0);
    //accessTerminal();
  }



  $('#mainMenu').css('width', viewport.width);
  //$('#mainMenu > .actionTab').css('height', viewport.height);

// initially runs on page load but will also be triggered when changing rooms
}findOrientScene();








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Animation Function /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mapAlpha = 1;
var elevDirection = 'none';
/////////============framerate control function
// allows me to set constant fps
var currentSecond = 0; frameCount = 0; frameLastSecond = 0;
var lastFrameDrawn = 0;
animate();


// animation loop rendering all the images
function animate(){
  var currenFrameTime = Date.now();
  var sec = Math.floor(Date.now()/1000);


  ctx.clearRect( 0,0, playerCanvas.width, playerCanvas.height);



  if(sec!=currentSecond){
    currentSecond = sec;
    frameLastSecond = frameCount;
    frameCount = 1;
  }else{
    frameCount++;
  }
  // images get loaded one on top of the other meaning the first img that is rendered will be sit underneath the rest
  //the scene gets loaded first as it it the bottom most player




  // FINDS SCENE INSIDE OF LOOP==========================================
  tileCases(sceneData.layout,sceneData.parameter);
  if(sceneData.parameter == pqMapParameter){
    setSprite(terminalObj,14.5,4,'n','n');
    setSprite(playerBed,14.5,8,'n','n');
    setSprite(doorLeft,9.5,8,'n','n');
    setSprite(terrarium,11.5,3,'n','n');

    //sets theoretical z axis of objects
    setSprite(player,0,0,'n','n');
  }else if (sceneData.parameter == ccMapParameter) {
    if(player.y > 0 ){}
    setSprite(terminalObj,16.5,4,'n','n');
    setSprite(therodorGraf,9.5,7,0,3);
    setSprite(gothfriedVonFurstenberg,14.5,6,0,0);
    setSprite(ramdtEberlicht,10.5,7,0,3);
    setSprite(standardGuard,10.5,4,'n','n');
    setSprite(standardGuard,13.5,4,'n','n');


    setSprite(ramdtEberlicht,7.5,11,0,2);

    setSprite(player,0,0,'n','n');
  }
  movePlayer();
  handleConsoleAccess();
  setMapBorders(sceneData.parameter);
  mainMenuBtnFind();


  lastFrameTime = currenFrameTime;

  //displays framerate
  ctx.font = '14px Courier New'
  ctx.fillStyle = 'white';
  ctx.fillText("FPS= " + frameLastSecond,10,20);

    requestAnimationFrame(animate);


}




function zIndex(a,b) {
  if(a.y > b.y){
    setSprite(b);
    setSprite(a);
  }else{
    setSprite(a);
    setSprite(b);
  }
}







function setPlayerSpawn(x,y) {
  player.x = (x * tileSize);
  player.y = (y * tileSize);
}

function movePlayer() {
  if (windowMode == 'canvasMode') {
    player.speed = 4;
    //Moves player
    if(keys[87] ){
        moveUp();
        player.moving = true;
    }
    if(keys[65] ){
        moveLeft();
        player.moving = true;
    }
    if(keys[83] ){
        moveDown();
        player.moving = true;
    }
    if(keys[68] ){
        moveRight();
        player.moving = true;
    }
    handlePlayerAnim();
  }else {
      player.speed = 0;
      player.moving = false;
   }

}










////////////////////////////////////////////////////////////////
//This function gives the WASD btns in the UI btn press animation
function movementKeyAnimation(m,n) {
  $('#playerMoveBtnMenu > span:nth-child('+ m +') > button:nth-child('+ n +')').css('margin-top','10px');
}

function movementKeyReset() {
  $('#playerMoveBtnMenu > span:nth-child(-n+2) > button').css('margin-top','auto');
}


//these functions moves all canvases around the player
//this simulates the player movement
function moveUp() {
  player.frameY = 1;
  player.y-= player.speed
}
function moveLeft() {
  player.frameY = 3;
  player.x-= player.speed
}
function moveDown() {
  player.frameY = 0;
  player.y+= player.speed
}
function moveRight() {
  player.frameY = 2;
  player.x+= player.speed
}


//These funtions animate the player movement.
function handlePlayerAnim() {
    if(player.frameX < 15 && player.moving == true) player.frameX++
    else player.frameX = 0;
  }







// Sets the boerder of the room based on the mapParameter heigh - 1*tileSize all around and - ceiling height to create the illusion of a backwall
  function setMapBorders(parameter) {
    if(mapBorder(player,parameter)) forceStop();
    if(parameter == pqMapParameter)pqCollides();
    if(parameter == ccMapParameter)ccCollides();
  }
  function pqCollides() {
    if(doorCollideDetect(player,doorLeft))  mainMenu = 'enterCc';

    else if (collideDetect(player,terminalObj)) forceStop();
    else if(tripDetect(player,terminalObj))  mainMenu = 'terminal';

    else{
      mainMenu = 'initial';
    }
  }

  function ccCollides() {
    if(collideDetect(player,therodorGraf))  forceStop();
    else if(tripDetect(player,therodorGraf))  mainMenu = 'therodorGraf';

    else if(doorCollideDetect(player,doorLeft))  mainMenu = 'enterCc';

    else if (collideDetect(player,terminalObj)) forceStop();
    else if(tripDetect(player,terminalObj))  mainMenu = 'terminal';

    else{
      mainMenu = 'initial';
    }
  }
// give in two opject parameters: checks if they are not overlapping
//when they overlap it returns the output to trigger the event
  function collideDetect(a,b) {
      return !( a.x > b.x + b.width - (tileSize / 4)     ||      //right
                a.x + a.width - (tileSize / 4) < b.x     ||      //left
                a.y > b.y - (tileSize * 1.2) + b.height  ||      //bottom
                a.y + a.height - (tileSize * 1.5) < b.y  );      //top
  }
  function doorCollideDetect(a,b) {
      return !( a.x > b.x + b.width      ||      //right
                a.x + a.width  < b.x     ||      //left
                a.y > b.y  + b.height  ||      //bottom
                a.y + a.height  < b.y  );      //top
  }

  //checks if a is within vicinity of b
  function tripDetect(a,b) {
      return !( a.x > b.x + b.width + (tileSize / 2)   ||
                a.x + a.width + (tileSize / 2) < b.x   ||
                a.y > b.y + b.height + (tileSize / 2)  ||
                a.y + a.height + (tileSize / 2) < b.y  );
  }

  function mapBorder(a,b) {
      return  a.x > (b.x + b.width * tileSize) - (2*tileSize)  ||
              a.x + a.width < b.x + (2*tileSize)              ||
              a.y > (b.y + b.height * tileSize) - (3*tileSize)  ||
              a.y + a.height < b.y + ((3+b.ceil) *tileSize);
  }







  //These functions prevent the player moving unwanted space.
  //This is done by moving the player in the opposite direction
  //while displaying the player immobile in the real direction
  function forceStop() {
    if(keys[87]){
      moveDown();
      //canvasMoveDown();
      player.frameX = 0;
      player.frameY = 1;
    }
    if(keys[65]){
      moveRight();
      //canvasMoveRight();
      player.frameX = 0;
      player.frameY = 3;
    }
    if(keys[83]){
      moveUp();
      //canvasMoveUp();
      player.frameX = 0;
      player.frameY = 0;
    }
    if(keys[68]){
      moveLeft();
      //canvasMoveLeft();
      player.frameX = 0;
      player.frameY = 2;
    }
  }


  function forceCanvasStop() {
    if(keys[87]){
      canvasMoveDown();
      player.frameX = 0;
      player.frameY = 1;
    }
    if(keys[65]){
      canvasMoveLeft();
      player.frameX = 0;
      player.frameY = 3;
    }
    if(keys[83]){
      canvasMoveUp();
      player.frameX = 0;
      player.frameY = 0;
    }
    if(keys[68]){
      canvasMoveRight();
      player.frameX = 0;
      player.frameY = 2;
    }
  }








// controls what buttons are displayed and actions based on what object is being triggered
var mainMenuType = 'none';
function mainMenuBtnFind() {
  resetMainMenu();

  freezeMovement = false;

  //display --- SPEAK
  if (mainMenu == 'therodorGraf'){
    mainMenuBtnDisp(1, 'Speak','','','','Therodor Graf');
    //click --- SPEAK
    $('#mainMenu > .actionTab > button:nth-child(1)').click(function () {
      mainMenuType = 'speakMenu';
    });
  }else if (mainMenu == 'terminal') {
    mainMenuBtnDisp(1, 'Access','','','','Terminal');
    //click --- TERMINAL
    $('#mainMenu > .actionTab > button:nth-child(1)').click(function () {
      mainMenuType = 'terminalMenu';
      openTerminalCntr();
    });
  }else if (mainMenu == 'enterCc') {
    mainMenuBtnDisp(1, 'Enter','','','','Command Center');
    //click --- TERMINAL
    $('#mainMenu > .actionTab > button:nth-child(1)').click(function () {
      sceneData.parameter = ccMapParameter;
      findOrientScene();
    });
  }



//display --- SPEAK MENU TYPE
  if (mainMenuType == 'speakMenu') {
    freezeMovement = true;
    player.moving = false;
    openSpeechBox();
    mainMenuBtnDisp(4, 'Talk','Actions','Data','Back','');
    //click --- TALK
    $('#mainMenu > .actionTab > button:nth-child(1)').click(function () {
      mainMenuType = 'talkMenu';
    });
    //click --- ACTIONS
    $('#mainMenu > .actionTab > button:nth-child(2)').click(function () {
      mainMenuType = 'actionsMenu';
    });
    //click --- DATA
    $('#mainMenu > .actionTab > button:nth-child(3)').click(function () {

    });
    //click --- BACK
    $('#mainMenu > .actionTab > button:nth-child(4)').click(function () {
      mainMenuType = 'none';
      closeSpeechBox()
    });



//display --- TALK MENU TYPE
  }else if (mainMenuType == 'talkMenu') {
      freezeMovement = true;
      mainMenuBtnDisp(4, 'Ask','Tell','Propostion','Back','');
      //click --- TALK
      $('#mainMenu > .actionTab > button:nth-child(2)').click(function () {
        mainMenuType = '';
      });
      //click --- ACTIONS
      $('#mainMenu > .actionTab > button:nth-child(3)').click(function () {
        mainMenuType = '';
      });
      //click --- BACK
      $('#mainMenu > .actionTab > button:nth-child(4)').click(function () {
        mainMenuType = 'speakMenu';
      });



//display --- TERMINAL MENU TYPE
}else if (mainMenuType == 'terminalMenu') {
        freezeMovement = true;
        mainMenuBtnDisp(4, 'Bunker','Map','CMD','Close','');
        //click --- TALK
        $('#mainMenu > .actionTab > button:nth-child(1)').click(function () {
          mainMenuType = '';
        });
        //click --- ACTIONS
        $('#mainMenu > .actionTab > button:nth-child(2)').click(function () {
          mainMenuType = '';
        });
        //click --- BACK
        $('#mainMenu > .actionTab > button:nth-child(4)').click(function () {
          mainMenuType = 'terminal';
          closeTerminalCntr();
        });





//display --- ACTION MENU TYPE
  }else if (mainMenuType == 'actionsMenu') {
        freezeMovement = true;
        mainMenuBtnDisp(5, 'Declare Enemy','Duel','Plot','Missions','Back');
        //click --- TALK
        $('#mainMenu > .actionTab > button:nth-child(2)').click(function () {
          mainMenuType = '';
        });
        //click --- ACTIONS
        $('#mainMenu > .actionTab > button:nth-child(3)').click(function () {
          mainMenuType = '';
        });
        //click --- DATA
        $('#mainMenu > .actionTab > button:nth-child(4)').click(function () {

        });
        //click --- BACK
        $('#mainMenu > .actionTab > button:nth-child(5)').click(function () {
          mainMenuType = 'speakMenu';
        });
    }
}



//sets canvasBtnText
function mainMenuBtnDisp(totalBtn,    btn1Txt,btn2Txt,btn3Txt,btn4Txt,    room) {
  $('#mainMenu > .actionTab > button:nth-child(-n+' + totalBtn + ')').css('display','flex')
  $('#mainMenu > .actionTab > button:nth-child(1)').text(btn1Txt)
  $('#mainMenu > .actionTab > button:nth-child(2)').text(btn2Txt)
  $('#mainMenu > .actionTab > button:nth-child(3)').text(btn3Txt)
  $('#mainMenu > .actionTab > button:nth-child(4)').text(btn4Txt)

  if( room == '') {$('#mainMenu > div.actionTab > h3').css('display','none')}
  else{ $('#mainMenu > div.actionTab > h3').css('display','flex') }
  $('#mainMenu > div.actionTab > h3').text(room);
}

//reset canvasBtnText
function resetMainMenu() {
  $('#mainMenu > .actionTab :is(button:nth-child(-n+5))').off('click');
  $('#mainMenu > .actionTab > button').css('display','none')
  $('#mainMenu > .actionTab > h3').css('display','none')

}






//console controls

function handleConsoleAccess() {
  if(keys[187]){
    fadeConsole(true);
    consoleMode(':u');
    windowMode = 'consoleMode';
  }if(keys[189]){
    fadeConsole(false);
    windowMode = 'canvasMode';
  }
}





function fadeConsole(state) {
  if(state == true){
    $('.console').fadeIn();
  }else{
    $('.console').fadeOut();
  }
}
function sharpConsole(state) {
  if(state == true){
    $('.console').css('display','flex');
  }else{
    $('.console').css('display','none');
  }
}
sharpConsole(false);






























//terminal controls
var terminalCntrIndex = 512;
function openTerminalCntr() {
  terminalActive = true;
  if(terminalCntrIndex > 0 && terminalActive == true){
    setTimeout(function(){
      terminalCntrIndex -= 3.5;
      openTerminalCntr();
    }, 0.5);

  }else if(terminalCntrIndex < 0){
    terminalCntrIndex = 0;
  }
  $('.terminalCntr').css('margin-top', -1 * terminalCntrIndex + 'px')
  setTimeout(function(){  terminalState = true;  }, 1000);
}
function closeTerminalCntr() {
  terminalActive = false;
  if(terminalCntrIndex < 512 && terminalActive == false){
    setTimeout(function(){
      terminalCntrIndex +=3.7;
      closeTerminalCntr();
    }, 5);
    }else if (terminalCntrIndex < 512){
      terminalCntrIndex = 512;
    }
$('.terminalCntr').css('margin-top', -1 * terminalCntrIndex + 'px')
setTimeout(function(){  terminalState = false;  }, 1000);
}










//speechBox controls
var speechBoxIndex = 0;
var speechActive = false;
function openSpeechBox() {
  speechActive = true;
  if(speechBoxIndex < 150 && speechActive == true){
    setTimeout(function(){
      speechBoxIndex++;
      openSpeechBox();
    }, 20);

  }else if(speechBoxIndex > 150){
    speechBoxIndex = 150;
  }
  $('.speechBox').css('margin-top', -1 * speechBoxIndex + 'px')
}
function closeSpeechBox() {
  speechActive = false;
  if(speechBoxIndex > 0 && speechActive == false){
    setTimeout(function(){
      speechBoxIndex--;
      closeSpeechBox();
    }, 1);

  }else{
    return ;
  }
  $('.speechBox').css('margin-top', -1 * speechBoxIndex + 'px')
}





// when changing rooms

function changeRoom() {
  localStorage.currentScene = sceneData.parameter;
  location.reload();
}
