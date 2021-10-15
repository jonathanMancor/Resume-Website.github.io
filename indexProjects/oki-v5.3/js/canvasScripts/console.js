var cmdInput = ':menu';
function consoleMode(page) {
  $('.console main').css('display', 'none')
  cmdInput = page;
  if (cmdInput == ':menu'){
    consoleMenu();
  }else if (cmdInput == ':u'){
    consoleUser();
  }
}





//console menu------------------------------------------------
var consoleMenuIndex = 0;
function consoleMenu() {
  $('.console .menu').css('display', 'flex')
  findConsoleMenu();

  $('.console > .menu > nav > button:nth-child(3) > h3').click(function () {
    consoleMenuIndex++;
    findConsoleMenu();
  });
  $('.console > .menu > nav > button:nth-child(1) > h3').click(function () {
    consoleMenuIndex--;
    findConsoleMenu();
  });
}

function findConsoleMenu() {
  $('.console ul').css('display','none');
  if(consoleMenuIndex == 0){
    //$('.console > main > nav > h2').text('Menu');
    $('.console .consoleMenu').css('display','block');
  }else if(consoleMenuIndex == 1 || consoleMenuIndex == -1){
    //$('.console > main > nav > h3').text('Options');
    $('.console .consoleOptions').css('display','block');
  }else if(consoleMenuIndex > 1){
    consoleMenuIndex = 0;
    findConsoleMenu();
  }else if(consoleMenuIndex < -1){
    consoleMenuIndex = 0;
    findConsoleMenu();
  }

}









//console User------------------------------------------------
function consoleUser() {
  $('.console .consoleUser').css('display', 'flex')
}
