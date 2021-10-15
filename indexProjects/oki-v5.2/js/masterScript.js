//colors===========================================================
const palette = {
  pinkHex: '#ee2d7b',
  pinkRgb : '238,45,123,',

  greenHex: '#53d39b',

  yellowHex: '#fbb041',

  purpleHex: '#A459FF'
}



var gameData = {
  faction: 'Marasman  Empire',
  capital: '',
  ruler: 'Amon Marasmiel II'
}


var resources = {

  //funcional
  water: 100,
  food: 100,

  population: 10000,
  manPower: 0,

  garrison: 0,
  research: 0,
}




var empireFactionGameData = ['empire', 'bunker-001', 'Jorchlom Nalvdztol',   100,100,10000,0,0,0];


const marasmanEmpire = {
  name: 'Marasman Empire',
  ruler: 'Amon Marasmiel II',
  capital: 'Paleshore'
}







/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////--------- Items ------/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////--------- Dyes & Themes ------/////////////////////////////////////
const terminalWhite = {
  name: 'white',
  img: 'terminalWhite',

}


//////////////////////////////--------- Helmets ------/////////////////////////////////////
const smallHealthIntravein = {
  name: 'fist',
  desc: '',
  img: 'smallHealthIntravein',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}

const smallCoreExtender = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'smallCoreExtender',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}

const demonSkinBoots = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'demonSkinBoots',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}

const warrantOfficerMedal = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'warrantOfficerMedal',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}




//////////////////////////////--------- Helmets ------/////////////////////////////////////
const steelHelmA1 = {
  name: 'fist',
  desc: '',
  img: 'steelHelmA1',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}

const greatHelmA1 = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'greatHelmA1',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}

const officerCapA1 = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'officerCapA1',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,
}


//////////////////////////////--------- Armor ------/////////////////////////////////////
const warmundtA1 = {
  name: 'fist',
  desc: '',
  img: 'warmundtA1',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 2,
  dexterity: 0,
  perception: 2,

  vigor: 4,
  agility: 0,
  speed: 0,
}

const behemundtA1 = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'behemundtA1',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 2,
  dexterity: 0,
  perception: 2,

  vigor: 4,
  agility: 0,
  speed: 0,
}

const demundtA1 = {
  name: 'BEHEMUND-ST588',
  desc: '',
  img: 'demundtA1',

  health: 0,
  stamina: 0,
  rot: 0,

  strength: 2,
  dexterity: 0,
  perception: 2,

  vigor: 4,
  agility: 0,
  speed: 0,
}



//////////////////////////////--------- Weapons ------/////////////////////////////////////
const fist = {
  name: 'fist',
  desc: '',
  img: '',


  stamina: 0.5,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,

  move1: "Arching Swan",
  move2: "Silent Monkey",
  move3: "Vigurous Stand",
}

const mk1RifleKit = {
  name: 'mk1-rifle',
  desc: '',
  img: 'mk1RifleKit',

  stamina: 1,
  rot: 0,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 0,
  speed: 0,

  move1: "Line fire",
  move2: "Guard",
  move3: "Slash"
}


const straightCleaverTechnoblade = {
  name: 'straightCleaverTechnoblade',
  desc: '',
  img: 'straightCleaverTechnoblade',

  stamina: 1,
  rot: 0,

  strength: 4,
  dexterity: 0,
  perception: 2,

  vigor: 1,
  agility: -1,
  speed: 0,

  move1: "Lock'n load",
  move2: "Lock'n load",
  move3: "Lock'n load",
}




const c93AndSaber1 = {
  name: "Borchardt C-93 pistol & officier's technoblade",
  desc: '',
  img: 'c93AndSaber1',

  stamina: 1,
  rot: 0,

  strength: 3,
  dexterity: 0,
  perception: 2,

  vigor: 3,
  agility: -3,
  speed: -3,

  move1: "Lock'n load",
  move2: "Guard",
  move3: "Slash"
}



////////////////////////////////////////////////////////////////////////////Player Stats/////////////////////////////////////////////////////
////////////////////////////////PLAYER STATS ARRAYS//////////////////////////////////////////////
var playerStats = [0, 'playerName', 'playerKeyCode',      0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0,     0, 0, 0, 0,   1234];
var playerActiveStats = [0,0,0,    0,0,0,    0,0,0];
var moves = ['move0','move1','move2','move3'];









////////////////////////////////CLASS STAT ARRAYS//////////////////////////////////////////////






var playerStats = {
  name: '',
  keyCode: 'code',

  level: 0,
  class: 'class',
  classDesc: "",
  img: 'none',
  experience: 0,
  spores: 0,


  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,



  hp: 0,
  sp: 0,
  rp: 0,
  att: 0,
  dex: 0,
  acc: 0,
  def: 0,
  ddg: 0,
  spd: 0,

  wpn: 'none',
  gear: 'none',
  helmet: 'none',
  armor: 'none',
  dye: 'terminalWhite',
  theme: 'terminalWhite',

  move0: 'none',
  move1: 'none',
  move2: 'none',
  move3: 'none',
}
var wpnVar = 0;
var gearVar = 0;
var helmetVar = 0;
var armorVar = 0;


//var warmundtClassArray = [7,9,2,  0,4,2,0,3,0,   1001, 'Sword Song'];
//var behemundtClassArray = [9,9,0,  3,0,4,2,0,0,   1002, 'T.U.R.M.'];
//var demundtClassArray = [5,9,4,  0,0,0,4,2,3,   1001, 'Piercing Eyes'];


const classDescriptions = {
  warmundt: "This Pillar of Marasman Empire represents the Storm within the hearts of the Marasians. The Warmundt are the Elite Imperial soldiers and are tasked to execute the Chancellor's will with brutal force on the battlefield.",
  behemundt: "This Pillar of Marasman Empire represents the Right of the Marasmians. It is our right to Sovereignty over our domain, our right to rule over all that reside with in and our right to Marasmian Unity. The Behemundt Are tasked with defending the Bunker as well as frontline defence.",
  demundt: "This Pillar of Marasman Empire represents the Hands of the Marasmian Government. The Demundt are tasked with providing tactical and logistical support and expertice on the battlefield as well as acting as secret police within the Marasian Domain."
}






var warmundtClassStats = {
  class: 'Warmundt',
  classDesc: classDescriptions.warmundt,

  img: 'warmundtClass',

  health: 8,
  stamina: 7,
  rot: 0,

  strength: 5,
  dexterity: 3,
  perception: 2,

  vigor: 3,
  agility: 2,
  speed: 1,

  //wpn: fist,
  wpn: 'mk1RifleKit',
  gear: 'smallHealthIntravein',
  helmet: 'steelHelmA1',
  armor: 'warmundtA1',
  dye: 'terminalWhite',
  theme: 'terminalWhite',

  move0: 'War rage',
}

var behemundtClassStats = {
  class: 'Behemundt',
  classDesc: classDescriptions.behemundt,

  img: 'behemundtClass',

  health: 10,
  stamina: 6,
  rot: 0,

  strength: 7,
  dexterity: 0,
  perception: 2,

  vigor: 4,
  agility: 2,
  speed: 0,

//wpn: fist,
  wpn: 'straightCleaverTechnoblade',
  gear: 'smallCoreExtender',
  helmet: 'greatHelmA1',
  armor: 'behemundtA1',
  dye: 'terminalWhite',
  theme: 'terminalWhite',

  move0: 'T.U.R.M.',
}

var demundtClassStats = {
  class: 'Demundt',
  classDesc: classDescriptions.demundt,

  img: 'demundtClass',

  health: 6,
  stamina: 9,
  rot: 0,

  strength: 2,
  dexterity: 5,
  perception: 3,

  vigor: 0,
  agility: 3,
  speed: 3,



//wpn: fist,
  wpn: 'c93AndSaber1',
  gear: 'warrantOfficerMedal',
  helmet: 'officerCapA1',
  armor: 'demundtA1',
  dye: 'terminalWhite',
  theme: 'terminalWhite',

  move0: 'Telecom',
}


/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////--------- NPC ------/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////--------- Marasmiel Empire ------/////////////////////////////////////
var maxsonVonMarasmiel2 = {
  name: 'Maxson von Marasmiel II',
  fullname: 'Maxson von Marasmiel II',

  rank: 'royalty',
  position: 'throne',
  title: 'Kaiser',

  class: 'Zarhamundt',
  classDesc: classDescriptions.zarhamundt,
  img: 'maxsonVonMarasmiel2',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  wpn: 'none',

  move0: 'Nachtigale',
}




var therodorGraf = {
  name: 'Therodor Graf',
  fullname: 'Therodor Graf',

  rank: 'highCommand',
  position: 'warmundPillar',
  title: 'Grand Marshal',


  class: 'Warmundt',
  classDesc: classDescriptions.warmundt,
  img: 'therodorGraf',
  margin: '7px -43px 0px',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  wpn: 'none',

  move0: 'Nachtigale',
}

var ramdtStreitenbock = {
  name: 'Rambt StreitenBock',
  fullname: 'Rambt StreitenBock',

  rank: 'highCommand',
  position: 'behemundtPillar',
  title: 'Grand Marshal',


  class: 'Warmundt',
  classDesc: classDescriptions.warmundt,
  img: 'ramdtStreitenbock',
  margin: '7px -72px 0px',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  wpn: 'none',

  move0: 'Nachtigale',
}


var gothfriedVonFurstenberg = {
  name: 'Gothfried Fürstenberg',
  fullname: 'Gothfried von Fürstenberg',

  rank: 'highCommand',
  position: 'demundtPillar',
  title: 'General Major',


  class: 'demundt',
  classDesc: classDescriptions.warmundt,
  img: 'gothfriedVonFurstenberg',
  margin: '7px -66px 0px',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  wpn: 'none',

  move0: 'Nachtigale',
}



//////////////////////////////// function ///////////////////////////




















function setGameData(a,b){
  a.faction = b[0];
  a.bunkerName = b[1];
  a.factionleader = b[2];
}










function setClassStats(c) {
  playerStats.class = c.class;
  playerStats.classDesc = c.classDesc;
  playerStats.img = c.img;


  playerStats.health = c.health;
  playerStats.stamina = c.stamina;
  playerStats.rot = c.rot;

  playerStats.strength = c.strength;
  playerStats.dexterity = c.dexterity;
  playerStats.perception = c.perception;

  playerStats.vigor = c.vigor;
  playerStats.agility = c.agility;
  playerStats.speed = c.speed;

  playerStats.wpn = c.wpn;
  playerStats.gear = c.gear;
  playerStats.helmet = c.helmet;
  playerStats.armor = c.armor;
  playerStats.dye = c.dye;
  playerStats.theme = c.theme;

  playerStats.move0 = c.move0;

}




function playerStatDefine() {
  playerStats.hp = (playerStats.health * 3.2);//health
  playerStats.sp = (playerStats.stamina * 3.2);//stamina
  playerStats.rp = (playerStats.rot * 1);//rot

  playerStats.att = (playerStats.strength * 1.5);//attack
  playerStats.dex = (playerStats.dexterity * 1.5);//critical %
  playerStats.acc = (playerStats.perception * 1.5);//accuracy

  playerStats.def = (playerStats.vigor * 1.5);//defence
  playerStats.ddg = (playerStats.agility * 1.5);//dodge
  playerStats.spd = (playerStats.speed * 1.5);//speed
}








////////////////////////////////SAVE / LOAD / CLEAR//////////////////////////////////////////////
function saveVar(){
  localStorage.playerName  = playerStats.name;
  localStorage.playerKeyCode = playerStats.keyCode;
  localStorage.playerImg = playerStats.img;


  localStorage.playerLevelValue = playerStats.level;
  localStorage.playerClass = playerStats.class;
  localStorage.playerClassDesc = playerStats.classDesc;
  localStorage.playerExp = playerStats.experience;
  localStorage.playerSpores = playerStats.spores;

  localStorage.healthStatValue = playerStats.health;
  localStorage.staminaStatValue = playerStats.stamina;
  localStorage.rotStatValue = playerStats.rot;

  localStorage.strengthStatValue = playerStats.strength;
  localStorage.dexterityStatValue = playerStats.dexterity;
  localStorage.perceptionStatValue = playerStats.perception;

  localStorage.vigorStatValue = playerStats.vigor;
  localStorage.agilityStatValue = playerStats.agility;
  localStorage.luckStatValue = playerStats.speed;

  localStorage.wpn = playerStats.wpn;
  localStorage.gear = playerStats.gear;
  localStorage.helmet = playerStats.helmet;
  localStorage.armor = playerStats.armor;
  localStorage.dye = playerStats.dye;
  localStorage.theme = playerStats.theme;

  localStorage.move0 = playerStats.move0;

}

function clearVar(){

  localStorage.playerName  = 'name';
  localStorage.playerKeyCode = 'code';
  localStorage.playerImg ='none';


  localStorage.playerLevelValue = 0;
  localStorage.playerClass = 'class';
  localStorage.playerClassDesc = "";
  localStorage.playerExp = 0;
  localStorage.playerSpores = 0;

  localStorage.healthStatValue = 0;
  localStorage.staminaStatValue = 0;
  localStorage.rotStatValue = 0;

  localStorage.strengthStatValue = 0;
  localStorage.dexterityStatValue = 0;
  localStorage.perceptionStatValue = 0;

  localStorage.vigorStatValue = 0;
  localStorage.agilityStatValue = 0;
  localStorage.luckStatValue = 0;

  localStorage.wpn = 'fist';
  localStorage.gear = 'none';
  localStorage.helmet = 'none';
  localStorage.armor = 'none';
  localStorage.dye = 'terminalWhite';
  localStorage.theme = "terminalWhite";

  localStorage.move0 = 'none';
  localStorage.move1 = 'none';
  localStorage.move2 = 'none';
  localStorage.move3 = 'none';

  localStorage.playerEquippedWpn = 1234;

}


function loadVar() {


  playerStats.name = localStorage.playerName;
  playerStats.keyCode = localStorage.playerKeyCode;
  playerStats.img = localStorage.playerImg;

  playerStats.level = localStorage.playerLevelValue;
  playerStats.class = localStorage.playerClass;
  playerStats.classDesc = localStorage.playerClassDesc;
  playerStats.experience = localStorage.playerExp;
  playerStats.spores = localStorage.playerSpores;

  playerStats.health = localStorage.healthStatValue;
  playerStats.stamina = localStorage.staminaStatValue;
  playerStats.rot = localStorage.rotStatValue;

  playerStats.strength = localStorage.strengthStatValue;
  playerStats.dexterity = localStorage.dexterityStatValue;
  playerStats.perception = localStorage.perceptionStatValue;

  playerStats.vigor = localStorage.vigorStatValue;
  playerStats.agility = localStorage.agilityStatValue;
  playerStats.speed = localStorage.luckStatValue;


  playerStats.wpn = localStorage.wpn;
  playerStats.gear = localStorage.gear;
  playerStats.helmet = localStorage.helmet;
  playerStats.armor = localStorage.armor;
  playerStats.dye = localStorage.dye;
  playerStats.theme = localStorage.theme;

  playerStats.move0 = localStorage.move0;

}




function sporePointAllocation() {
  playerStats.spores--;
  $("#sporeStatValue").val(playerStats.spores);
}

function toggleStatAllocationBtn() {
  if(playerStats.spores == 0){
    $('#statDisplay > tbody > tr > td > button').css('display','none');
  }else {
      $('#statDisplay > tbody > tr > td > button').css('display','block');
  }
}




  function setPlayerWpn(a) {
    if (a.wpn == 'mk1RifleKit') {
      wpnVar = mk1RifleKit;
    }else if (a.wpn == 'straightCleaverTechnoblade') {
      wpnVar = straightCleaverTechnoblade;
    }else if (a.wpn == 'c93AndSaber1') {
      wpnVar = c93AndSaber1;
    }
    playerStats.move1 = wpnVar.move1;
    playerStats.move2 = wpnVar.move2;
    playerStats.move3 = wpnVar.move3;
}

  function setPlayerGear(a) {
    if (a.gear == 'smallHealthIntravein') {
      gearVar = smallHealthIntravein;
    }else if (a.gear == 'smallCoreExtender') {
      gearVar = smallCoreExtender;
    }else if (a.gear == 'demonSkinBoots') {
      gearVar = demonSkinBoots;
    }else if (a.gear == 'warrantOfficerMedal') {
      gearVar = warrantOfficerMedal;
    }
  }

function setPlayerHelmet(a) {
    if (a.helmet == 'steelHelmA1') {
      helmetVar = steelHelmA1;
    }else if (a.helmet == 'greatHelmA1') {
      helmetVar = greatHelmA1;
    }else if (a.helmet == 'officerCapA1') {
      helmetVar = officerCapA1;
    }
  }

function setPlayerArmor(a) {
    if (a.armor == 'warmundtA1') {
      armorVar = warmundtA1;
    }else if (a.armor == 'behemundtA1') {
      armorVar = behemundtA1;
    }else if (a.armor == 'demundtA1') {
      armorVar = demundtA1;
    }
    coalateStats(playerStats);
  }


function setPlayerDye(a) {
    if (a.dye == 'terminalWhite') {
      dyeVar = terminalWhite;
    }
  }
  function setPlayerTheme(a) {
      if (a.theme == 'terminalWhite') {
        themeVar = terminalWhite;
      }
    }

  var coalatedStats = [];
  function coalateStats(user){
    coalatedStats[0] = Math.floor(user.health);
    coalatedStats[1] = Math.floor(user.stamina);
    coalatedStats[2] = Math.floor(user.rot) + (wpnVar.rot);

    coalatedStats[3] = Math.floor(user.strength) + (wpnVar.strength);
    coalatedStats[4] = Math.floor(user.dexterity) + (wpnVar.dexterity);
    coalatedStats[5] = Math.floor(user.perception) + (wpnVar.perception);

     coalatedStats[6] = Math.floor(user.vigor) + (wpnVar.vigor);
     coalatedStats[7] = Math.floor(user.agility) + (wpnVar.agility);
     coalatedStats[8] = Math.floor(user.speed) + (wpnVar.speed);
  }



  function setPlayerStats() {

    playerStatDefine();
    //coalateWpnEquipmentStats(playerStats,playerStats.wpn);
    setPlayerWpn(playerStats);
    setPlayerGear(playerStats);
    setPlayerHelmet(playerStats);
    setPlayerArmor(playerStats);
    setPlayerDye(playerStats);
    setPlayerTheme(playerStats);

    $('#playerLevelValue').val( playerStats.level);
    $('#charNameLoad > input').val( playerStats.name);
    $('#classNameDisplay').text( playerStats.class);
    $('#classDesc > h1').text(playerStats.class);
    $('#classDesc > p').text(playerStats.classDesc);
    $('#playerCharImg').attr('src','img/classes/' + playerStats.img + '.png');
    $('#playerMetaData > tbody > tr > td:nth-child(3)').val(playerStats.spores);

    $('#healthStatValue').val(coalatedStats[0]);
    $('#staminaStatValue').val(coalatedStats[1]);
    $('#rotStatValue').val(coalatedStats[2]);

    $('#strengthStatValue').val(coalatedStats[3]);
    $('#dexterityStatValue').val(coalatedStats[4]);
    $('#perceptionStatValue').val(coalatedStats[5]);

    $('#vigorStatValue').val(coalatedStats[6]);
    $('#agilityStatValue').val(coalatedStats[7]);
    $('#luckStatValue').val(coalatedStats[8]);

    $('#sporeStatValue').val( player.spores);




    $("#hpStatValue").val(Math.round(playerStats.hp));
    $("#spStatValue").val(Math.round(playerStats.sp));
    $("#rpStatValue").val(Math.round(playerStats.rp));

    $("#attStatValue").val(Math.round(playerStats.att));
    $("#crtStatValue").val(Math.round(playerStats.dex));
    $("#accStatValue").val(Math.round(playerStats.acc));

    $("#defStatValue").val(Math.round(playerStats.def));
    $("#ddgStatValue").val(Math.round(playerStats.ddg));
    $("#spdStatValue").val(Math.round(playerStats.spd));

    $('#move0').text(playerStats.move0);
    $('#move1').text(playerStats.move1);
    $('#move2').text(playerStats.move2);
    $('#move3').text(playerStats.move3);


    $('#equipmentDisplay > figure:nth-child(1) > img').attr('src','img/icons/equipSlots/wpn/' + wpnVar.img + '.png');
    $('#equipmentDisplay > figure:nth-child(4) > img').attr('src','img/icons/equipSlots/gear/' + gearVar.img + '.png');
    $('#equipmentDisplay > figure:nth-child(2) > img').attr('src','img/icons/equipSlots/helmets/' + helmetVar.img + '.png');
    $('#equipmentDisplay > figure:nth-child(5) > img').attr('src','img/icons/equipSlots/armor/' + armorVar.img + '.png');
    $('#equipmentDisplay > figure:nth-child(3) > img').attr('src','img/icons/equipSlots/themes/' + dyeVar.img + '.png');
    $('#equipmentDisplay > figure:nth-child(6) > img').attr('src','img/icons/equipSlots/themes/' + themeVar.img + '.png');


  }








  function setmoves(){

    $('#move1').text(playerStats.move1);
    $('#move2').text(playerStats.move2);
    $('#move3').text(playerStats.move3);
  }


  ////////////////////////////////STAT SHEET POINT ALLOCATION BUTTONS//////////////////////////////////////////////
  function plusHealth() {
    playerStats.level++;
    playerStats.health++;
    $("#healthStatValue").val(playerStats.health);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusStamina() {
    playerStats.level++;
    playerStats.stamina++;
    $("#staminaStatValue").val(playerStats.stamina);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusRot() {
    playerStats.level++;
    playerStats.rot++;
    $("#rotStatValue").val(playerStats.rot);
    sporePointAllocation();
    playerStatDefine();
  }



  function plusStrength() {
    playerStats.level++;
    playerStats.strength++;
    $("#strengthStatValue").val(playerStats.strength);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusDexterity() {
    playerStats.level++;
    playerStats.dexterity++;
    $("#dexterityStatValue").val(playerStats.dexterity);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusPerception() {
    playerStats.level++;
    playerStats.perception++;
    $("#perceptionStatValue").val(playerStats.perception);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusVigor() {
    playerStats.level++;
    playerStats.vigor++;
    $("#perceptionStatValue").val(playerStats.vigor);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusAgility() {
    playerStats.level++;
    playerStats.agility++;
    $("#agilityStatValue").val(playerStats.agility);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusLuck() {
    playerStats.level++;
    playerStats.speed++;
    $("#luckStatValue").val(playerStats.speed);
    sporePointAllocation();
    playerStatDefine();
  }



/////stat tabs////
var playerStatMenuTabIndex = 1;
function openStatsTab(tab){
  $('#charNameCreate').css('display','none');
  $('#playerNameDisplay').css('display','none');
  $('#playerDesc  > div.playerStatMenuTabs > button').css('height',  '100%' );
  $('#playerDesc > div.playerStatMenuTabs > button:nth-child(' + tab + ')').css('height',  '104%' );
  $('#playerDesc  > #statOutput').css('display','none');
  $('#playerDesc  > #playerMoveSetCntr').css('display','none');
  $('#playerDesc  > #equipmentDisplay').css('display','none');
  if(tab == 1){
    if(terminalPage == 'charCreate'){
      $('#charNameCreate').css('display','flex');
      $('#playerNameDisplay').css('display','none');
    }else{
      $('#charNameCreate').css('display','none');
      $('#playerNameDisplay').css('display','flex');
    }
    $('#playerDesc  > #statOutput').css('display','flex');
  }else if(tab == 2){
    if(terminalPage == 'charCreate'){
      $('#charNameCreate').css('display','flex');
      $('#playerNameDisplay').css('display','none');
    }else{
      $('#charNameCreate').css('display','none');
      $('#playerNameDisplay').css('display','flex');
    }
    $('#playerDesc  > #playerMoveSetCntr').css('display','flex');
  }else if(tab == 3){
    if(terminalPage == 'charCreate'){
      $('#charNameCreate').css('display','flex');
      $('#playerNameDisplay').css('display','none');
    }else{
      $('#charNameCreate').css('display','none');
      $('#playerNameDisplay').css('display','flex');
    }
    $('#playerDesc  > #equipmentDisplay').css('display','flex');
  }
}

$('#playerDesc  > div.playerStatMenuTabs > button:nth-child(1)').click(function () {
  playerStatMenuTabIndex = 1;
  openStatsTab(playerStatMenuTabIndex);
});

$('#playerDesc  > div.playerStatMenuTabs > button:nth-child(2)').click(function () {
  playerStatMenuTabIndex = 2;
  openStatsTab(playerStatMenuTabIndex);
});

$('#playerDesc  > div.playerStatMenuTabs > button:nth-child(3)').click(function () {
  playerStatMenuTabIndex = 3;
  openStatsTab(playerStatMenuTabIndex);
});

























////////////////////////////////////////////////////////////////////////////ARMY/////////////////////////////////////////////////////

var garrison = {
  value: 0
}


////////////Unit pool types//////////////////
var infPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var riflePool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var motCavPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var armCavPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var tankPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var emptyPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var infPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var riflePoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var motCavPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var armCavPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var tankPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var emptyPoolArray = [0,0,0,0,0,0,0,0,0,0,0];

////////////Unit types//////////////////

var lightInf = {
  value: 0,

  hp: 3,
  sp: 10,
  rp: 3,

  att: 40,
  dex: 2,
  acc: 40,

  def: 30,
  ddg: 14,
  spd: 3
}

var heavyInf = {
  value: 0,

  hp: 5,
  sp: 5,
  rp: 3,

  att: 70,
  dex: 0,
  acc: 20,

  def: 60,
  ddg: 10,
  spd: 3
}

var riflemen = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var motCav = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var armCav = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var tank = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var empty = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 05,
  ddg: 0,
  spd: 0
}














$(document).ready(function() {
  setResourceStats();
  setGameData(gameData,empireFactionGameData);
  setStage();
 });






























function onloadExtrArmyStatParameters(){
  garrison.value = resources.garrison;
  $('#garrisonValue').val(Math.floor(garrison.value));
}


function setResourceStats() {
  resources.manPower = resources.population / 10;
  resources.garrison = resources.manPower / 10;
  resources.research = Math.floor(resources.manPower / 20);
}


function setStage(){
  var currentRoom = 'empty';
  currentRoom = 'homePage';
  //terminalPage


  if(currentRoom == 'homePage'){
    accessTerminal('home');
    loadVar();
  }
}



function characterCreation() {
  displayInitialStatDesc();
  toggleStatAllocationBtn();
  chooseClassBtns();
  setPlayerStats();
  openStatsTab(1);
}


function characterLoad() {
  displayInitialStatDesc();
  loadVar();
  setPlayerStats();
  toggleStatAllocationBtn();
  openStatsTab(1);
}




//class gallery=============================================================================
var classValue = 0;
function chooseClassBtns() {
  setClassStats(warmundtClassStats);
  setPlayerStats();


    $('#nextClass').click(function () {
      classValue++;
      if (classValue == 3){
        classValue = 0;
      }
      findClass();
    });

    $('#prevClass').click(function () {
      classValue--;
      if (classValue == -3){
        classValue = 0;
      }
      findClass();
    });
}


function findClass(){
  if(classValue == 0){
    setClassStats(warmundtClassStats);
    //setPlayerStats();

  }
  if(classValue == 1){
    setClassStats(behemundtClassStats);
    //setPlayerStats();
  }
  if(classValue == 2){
    setClassStats(demundtClassStats);
    //setPlayerStats();
  }
  if(classValue == -1){
    setClassStats(demundtClassStats);
    //setPlayerStats();
  }
  if(classValue == -2){
    setClassStats(behemundtClassStats);

  }
  setPlayerStats();
  saveVar();
}


function setPlayerName(){
  var playerName = document.querySelector("#playerNameInput").value;
  playerStats.name = playerName;

}






















///////////////////////////////////////government//////////////////////////////

var marasianGovernmentPositions = {
  //royalty
  kaiser : 'vacant',
  //hight command
  generalFeldmarschal: 'vacant',
  generalMajor: 'vacant',
  generalSchutzmarschal: 'vacant',


  brigadierGeneral: 0,
}


////////////////////////////government function//////////////////////////
function loadGovernment() {
  fillHighCommand(maxsonVonMarasmiel2,therodorGraf,ramdtStreitenbock,gothfriedVonFurstenberg);
}
loadGovernment();


//finds what class for all ncp in portraits
//centering all portraits


function fillHighCommand(a,b,c,d) {
  //decides what npc is placed in what position
  let x = marasianGovernmentPositions;
  x.kaiser = a;
  x.generalFeldmarschal = b;
  x.generalMajor = c;
  x.generalSchutzmarschal = d;
  //after placing npc, all the stats are called up for each respective npc
  $('#kaiser img').attr('src','img/government/marasmanEmpire/portraits/' + a.img + '.png');
  $('#bunkerGovernment > main > article:nth-child(2) > figcaption > h2').text(a.title);
  $('#bunkerGovernment > main > article:nth-child(2) > figcaption > p').text(a.name);

  $('#bunkerGovernment > main > article:nth-child(3) > .pillar:nth-child(1) > .frame > figure > img').attr('src','img/government/marasmanEmpire/portraits/' + b.img + '.png');
  $('#bunkerGovernment > main > article:nth-child(3) > .pillar:nth-child(1) > .frame > figure > img').css('margin', b.margin)
  $('#generalFeldmarschal > figcaption > p:nth-child(2)').text(b.name);

  $('#bunkerGovernment > main > article:nth-child(3) > .pillar:nth-child(2) > .frame > figure > img').attr('src','img/government/marasmanEmpire/portraits/' + c.img + '.png');
  $('#bunkerGovernment > main > article:nth-child(3) > .pillar:nth-child(2) > .frame > figure > img').css('margin', c.margin)
  $('#generalSchutzmarschal > figcaption > p:nth-child(2)').text(c.name);

  $('#bunkerGovernment > main > article:nth-child(3) > .pillar:nth-child(3) > .frame > figure > img').attr('src','img/government/marasmanEmpire/portraits/' + d.img + '.png');
  $('#bunkerGovernment > main > article:nth-child(3) > .pillar:nth-child(3) > .frame > figure > img').css('margin', d.margin)
  $('#generalMajor > figcaption > p:nth-child(2)').text(d.name);

}























////////////////////////////////STAT DESCRIPTIONS//////////////////////////////////////////////

function displayInitialStatDesc() {
  $("#statDesc > figure > img").attr("src", "img/icons/stats/hpStat.png");
  $("#statDesc > .statDescription > h1").text("Health");
  $("#statDesc > .statDescription > p").text("Health governs the user's  Health-Points (HP). One Health level is equivalent to 5 HP. If the user's HP is reduced to 0, the user dies and returns back to the bunker.");

  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('HP :');
  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+5');
  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
  $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');


  $("#statDesc > .fungusDescription > h2").text("Amanita Muscaria");
  $("#statDesc > .fungusDescription > p").text("The amanita muscaria, commonly referred to as fly amanita, is a particulary common yet dangerous toadstool found in temperate regions. It reproduces by releasing it's basidiospore into the atmosphere that get transported through air currents.");

  $("#statWindow1").mouseover(function(){
    displayInitialStatDesc();
  });



  $("#statWindow2").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/spStat.png");
    $("#statDesc > .statDescription > h1").text("Stamina");
    $("#statDesc > .statDescription > p").text("Stamina governs the user's Stamina-Points (SP). One Stamina level is equivalent to 5 SP. Each attack costs you some SP. If the user's SP is reduced to 0, the user can no longer perform in combat until SP is restored.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('SP :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Amanita phalloides");
    $("#statDesc > .fungusDescription > p").text("The amanita phalloides, colloquially called death cap, is, like its cousin the amanita muscaria, a poisonous basidiomycota fungus belonging to the amanita genus. It one of the most lethal of all known mushrooms, which is aided by its resemblance to edible mushrooms. It's convex cap is generally green, but white variats have been found as well. Its white and scaly stem connects its cap to its swollen, sac-like base. ");
  });

  $("#statWindow3").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/rpStat.png");
    $("#statDesc > .statDescription > h1").text("Rot");
    $("#statDesc > .statDescription > p").text("Rot governs the user's Rot-Points (RP). For each Rot level, the user recieves 1% increase to offencive skills aswell as 1% decrease to defenive skills. Some spore based attacks cost RP instead of SP to perform. If the user's RP reaches 200, they die and return to the bunker.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ATT | CRT | SPD :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+0.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'inline');


    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(1)').text('DEF | DDG | ACC :');
    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text('-0.5');
    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(2)').css('color' , '#EA5C9D');

    $("#statDesc > .fungusDescription > h2").text("Cortinarius violaceus");
    $("#statDesc > .fungusDescription > p").text("The amanita muscaria, commonly referred to as fly amanita, is a particulary common yet dangerous toadstool found in temperate regions. The basidiomycosis enduced by ingestion of this higher fungus. ");
  });












  $("#statWindow4").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/attStat.png");
    $("#statDesc > .statDescription > h1").text("Strength");
    $("#statDesc > .statDescription > p").text("Strength governs the user's Attack-Damage (ATT). This trait is coveted by those who weild large melee weapons and wearing heavy mechanized armour.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ATT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Hygrocybe miniata");
    $("#statDesc > .fungusDescription > p").text("The hygroctbe miniata, commonly known as vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow5").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/dexStat.png");
    $("#statDesc > .statDescription > h1").text("Dexterity");
    $("#statDesc > .statDescription > p").text("Dexterity governs the user's Attack-Damage (ATT) & Accuracy (ACC).");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Mycena Chlorophos");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow6").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/accStat.png");
    $("#statDesc > .statDescription > h1").text("Perception");
    $("#statDesc > .statDescription > p").text("This is still an empty stat");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ACC | CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2 | + 0.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Entoloma Hochstetteri");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });


  $("#statWindow7").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/defStat.png");
    $("#statDesc > .statDescription > h1").text("Vigor");
    $("#statDesc > .statDescription > p").text("Perception governs the user's Accuracy (ACC) & Critical (CRT).");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('DEF :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Omphalotus Illudens");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow8").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/ddgStat.png");
    $("#statDesc > .statDescription > h1").text("Agility");
    $("#statDesc > .statDescription > p").text("Agility governs the user's Speed (SPD). In combat, the player with the highest SPD level recieves the FIRST-STRIKE bonus, which grants the first turn with +1 to ATT, CRT & ACC for that turn.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('DDG | SPD :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2 | +1.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Mycena Pura");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow9").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/spdStat.png");
    $("#statDesc > .statDescription > h1").text("Luck");
    $("#statDesc > .statDescription > p").text("Luck governs your Accuracy (ACC) & Dodge (DDG). In addition, each point in Luck grants you 1% chance to recieveing the FIRST-STRIKE bonus against enemies with higher speed than you.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ACC | DDG | CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+0.3 | +0.3 | +0.3');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Tricholomopsis Decora");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

}
