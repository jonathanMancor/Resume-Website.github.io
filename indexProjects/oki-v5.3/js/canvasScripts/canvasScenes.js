

const pqMapLayout = [
  13,12,12,12,12,12,12,13,
  13,18,21,21,21,21,24,13,
  13,19,22,22,22,22,25,13,
  13,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,13,
  13,6,4,4,4,4,4,13,
  13,8,4,4,4,4,4,13,
  13,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,13,
  12,12,12,12,12,12,12,12,
];

const ccMapLayout = [
  13,12,12,12,12,12,12,12,12,12,12,13,
  13,18,21,21,21,21,21,21,21,21,24,13,
  13,19,22,22,22,22,22,22,22,22,25,13,
  13,4,4,4,4,2,8,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,6,4,4,4,4,4,4,4,4,.1,13,
  13,8,4,4,4,4,4,4,4,4,2,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,.1,6,4,4,4,4,13,
  12,12,12,12,12,12,12,12,12,12,12,12,
];


function setSprite(obj,x,y,fX,fY){
  //set x and y before drawing on canvas
  if(obj !== player){
    obj.x = x * tileSize;
    obj.y = y * tileSize;
  }else if(obj !== player){
    obj.x = 0;
    obj.y = 0;
  }

  if(fX !== 'n'){
    obj.frameX = fX ;
  }if(fY !== 'n'){
    obj.frameY = fY ;
  }

              //img source/ img souce crop width and height                                              /img source orientation on canvas
  ctx.drawImage(obj.img,    obj.width * obj.frameX, obj.height * obj.frameY, obj.width, obj.height,      obj.x, obj.y, obj.width, obj.height);
}


///////////////////////////////////////////////////////// TileMaps /////////////////////////////////////////////////////////




function tileCases(layout,parameter){
  for( var y = 0; y < parameter.height; y++){
    for( var x = 0; x < parameter.width; x++){
      switch(layout[(y * parameter.width) + x ]){

        case 0:
          break;
        case 1:
        ctx.drawImage(tileMapImage, tileSize * 0, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 2:
        ctx.drawImage(tileMapImage, tileSize * 0, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 3:
        ctx.drawImage(tileMapImage, tileSize * 1, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 4:
        ctx.drawImage(tileMapImage, tileSize * 1, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 5:
        ctx.drawImage(tileMapImage, tileSize * 1, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 6:
        ctx.drawImage(tileMapImage, tileSize * 2, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 7:
        ctx.drawImage(tileMapImage, tileSize * 2, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 8:
        ctx.drawImage(tileMapImage, tileSize * 2, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 9:
        ctx.drawImage(tileMapImage, tileSize * 3, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 10:
        ctx.drawImage(tileMapImage, tileSize * 3, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 11:
        ctx.drawImage(tileMapImage, tileSize * 3, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 12:
        ctx.drawImage(tileMapImage, tileSize * 4, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 13:
        ctx.drawImage(tileMapImage, tileSize * 4, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 14:
        ctx.drawImage(tileMapImage, tileSize * 4, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 15:
        ctx.drawImage(tileMapImage, tileSize * 5, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 16:
        ctx.drawImage(tileMapImage, tileSize * 5, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 17:
        ctx.drawImage(tileMapImage, tileSize * 5, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 18:
        ctx.drawImage(tileMapImage, tileSize * 6, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 19:
        ctx.drawImage(tileMapImage, tileSize * 6, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 20:
        ctx.drawImage(tileMapImage, tileSize * 6, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 21:
        ctx.drawImage(tileMapImage, tileSize * 7, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 22:
        ctx.drawImage(tileMapImage, tileSize * 7, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 23:
        ctx.drawImage(tileMapImage, tileSize * 7, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 24:
        ctx.drawImage(tileMapImage, tileSize * 8, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 25:
        ctx.drawImage(tileMapImage, tileSize * 8, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 26:
        ctx.drawImage(tileMapImage, tileSize * 8, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 27:
        ctx.drawImage(tileMapImage, tileSize * 9, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 28:
        ctx.drawImage(tileMapImage, tileSize * 9, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 29:
        ctx.drawImage(tileMapImage, tileSize * 9, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 30:
        ctx.drawImage(tileMapImage, tileSize * 10, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 31:
        ctx.drawImage(tileMapImage, tileSize * 10, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 32:
        ctx.drawImage(tileMapImage, tileSize * 10, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 33:
        ctx.drawImage(tileMapImage, tileSize * 11, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 34:
        ctx.drawImage(tileMapImage, tileSize * 11, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 35:
        ctx.drawImage(tileMapImage, tileSize * 11, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 36:
        ctx.drawImage(tileMapImage, tileSize * 12, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 37:
        ctx.drawImage(tileMapImage, tileSize * 12, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 38:
        ctx.drawImage(tileMapImage, tileSize * 12, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
       case 39:
       ctx.drawImage(tileMapImage, tileSize * 13, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
       case 40:
        ctx.drawImage(tileMapImage, tileSize * 13, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
       case 41:
        ctx.drawImage(tileMapImage, tileSize * 13, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
       case 42:
        ctx.drawImage(tileMapImage, tileSize * 14, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 43:
        ctx.drawImage(tileMapImage, tileSize * 14, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 44:
        ctx.drawImage(tileMapImage, tileSize * 14, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 45:
        ctx.drawImage(tileMapImage, tileSize * 15, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 46:
        ctx.drawImage(tileMapImage, tileSize * 15, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 47:
        ctx.drawImage(tileMapImage, tileSize * 15, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
            break;
        case 48:
        ctx.drawImage(tileMapImage, tileSize * 16, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 49:
        ctx.drawImage(tileMapImage, tileSize * 16, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 50:
        ctx.drawImage(tileMapImage, tileSize * 16, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
            break;
        case 51:
        ctx.drawImage(tileMapImage, tileSize * 17, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 52:
        ctx.drawImage(tileMapImage, tileSize * 17, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 53:
        ctx.drawImage(tileMapImage, tileSize * 17, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
            break;
        case 54:
        ctx.drawImage(tileMapImage, tileSize * 18, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 55:
        ctx.drawImage(tileMapImage, tileSize * 18, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 56:
        ctx.drawImage(tileMapImage, tileSize * 18, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
            break;
        case 57:
        ctx.drawImage(tileMapImage, tileSize * 19, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 58:
        ctx.drawImage(tileMapImage, tileSize * 19, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 59:
        ctx.drawImage(tileMapImage, tileSize * 19, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
            break;
        case 60:
        ctx.drawImage(tileMapImage, tileSize * 20, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 61:
        ctx.drawImage(tileMapImage, tileSize * 20, tileSize * 1, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
          break;
        case 62:
        ctx.drawImage(tileMapImage, tileSize * 20, tileSize * 2, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
            break;

        default:
          ctx.drawImage(tileMapImage, tileSize * 0, tileSize * 0, tileSize, tileSize, parameter.x + (tileSize * x), parameter.y + (tileSize * y), tileSize, tileSize);
      }
    }
  }
}
