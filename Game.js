class Game{

constructor(){
    this.angle=0
}
getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    //add more and change values later
    background=createSprite(400,400)
    background.addImage(background_image);
    //walls(check where it starts and make invisible)
    topWall=createSprite(0,0,400,20)
    bottomWall=createSprite(0,400,400,20)
    rightWall=createSprite(400,0,20,400)
    leftWall=createSprite(0,0,20,400)

    //striker and red coin
    striker = createSprite(200,30,15,15);
    striker.addImage(striker_image);
    striker.scale= 0.1
    redCoin=createSprite(200,200,10,10)
    redCoin.addImage(redCoin_image)
    redCoin.scale=0.6
    // the turnmarker(make invisible)
    turnMarker=createSprite(200,30,10,10)
    //(invisible)

    //inner bar and outer bar(controls power)

    //black and white coins
  }
handleElements(){
form.hide();
// might add more
}
play(){
  this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getWinConditions();
    if (allPlayers !== undefined) {
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
      }
      // adding points
      
 
  //win conditions
  if (player.playerPoints=25) {
    gameState = 2;
    Player.updateWinConditions();
    player.update();
  }

   
   //friction
    if(striker.velocityY>0){
     this.negFrictionY()
    }
    if(striker.velocityY<0){
      this.posFrictionY()
     }
     if(striker.velocityX<0){
      this.posFrictionX()
     }
     if(striker.velocityY>0){
      this.negFrictionX()
     }
     //space to release(do later)(release function)
    if(keyCode == 32){
      this.release()
      this.moveStrikerEachTurn()
    }
     //when striker stops
     if(striker.velocityX===0&&striker.velocityY===0){
       striker.y=turnMarker.y
     }
     //control conditions
if(player.positionY===turnMarker.y){
  this.handlePlayerControls()
  this.release()
}
//adjusting bar
if(turnMarker.y===30){
 //outer bar
outerBar.y = turnMarker.y - 10;
 //inner bar
 outerBar.y = turnMarker.y - 10;
}
if(turnMarker.y===370){
//outer bar
outerBar.y = turnMarker.y + 10;
//inner bar
innerBar.y = turnMarker.y + 10;
}



   drawSprites();
  }
}
handlePlayerControls(){
//rotation and changing angles(make angle number later)
if (keyIsDown(RIGHT_ARROW)) {
 angle += 4
 striker.rotate(angle)
}

if (keyIsDown(LEFT_ARROW)) {
  angle -= 4
  striker.rotate(angle)
}
//adjusting x position of striker
striker=World.mouseX
//adjusting power of the striker through the length of bar(outer bar height is 20)
if (keyIsDown(UP_ARROW)&&innerbar.height<20) {
  innerBar.height += 1;
}

if (keyIsDown(DOWN_ARROW)&&innerbar.height>0) {
  innerBar.height -= 1;
}
}
moveStrikerEachTurn(){
//move striker between players every turn
if(turnMarker.y=30){
turnMarker.y=370
}else{
turnMarker.y=30
}
}
release(){
if(innerBar.height=0){
  striker.velocityY=1
  striker.velocityX=0.1||-0.1
} 
if(innerBar.height=1){
  striker.velocityY=2
  striker.velocityX=0.2||-0.2
} 
if(innerBar.height=2){
  striker.velocityY=3
  striker.velocityX=0.3||-0.3
} 
if(innerBar.height=3){
  striker.velocityY=4
  striker.velocityX=0.4||-0.4
} 
if(innerBar.height=4){
  striker.velocityY=5
  striker.velocityX=0.5||-0.5
} 
if(innerBar.height=5){
  striker.velocityY=6
  striker.velocityX=0.6||-0.6
} 
if(innerBar.height=6){
  striker.velocityY=7
  striker.velocityX=0.7||-0.7
} 
if(innerBar.height=7){
  striker.velocityY=8
  striker.velocityX=0.8||-0.8
} 
if(innerBar.height=8){
  striker.velocityY=9
  striker.velocityX=0.9||-0.9
} 
if(innerBar.height=9){
  striker.velocityY=10
  striker.velocityX=1||-1
} 
if(innerBar.height=10){
  striker.velocityY=11
  striker.velocityX=1.1||-1.1
} 
if(innerBar.height=11){
  striker.velocityY=12
  striker.velocityX=1.2||-1.2
} 
if(innerBar.height=12){
  striker.velocityY=13
  striker.velocityX=1.3||-1.3
} 
if(innerBar.height=13){
  striker.velocityY=14
  striker.velocityX=1.4||-1.4
} 
if(innerBar.height=14){
  striker.velocityY=15
  striker.velocityX=1.5||-1.5
} 
if(innerBar.height=15){
  striker.velocityY=16
  striker.velocityX=1.6||-1.6
} 
if(innerBar.height=16){
  striker.velocityY=17
  striker.velocityX=1.7||-1.7
} 
if(innerBar.height=17){
  striker.velocityY=18
  striker.velocityX=1.8||-1.8
} 
if(innerBar.height=18){
  striker.velocityY=19
  striker.velocityX=1.9||-1.9

} 
if(innerBar.height=19){
  striker.velocityY=20
  striker.velocityX=2||-2
} 
if(innerBar.height=20){
  striker.velocityY=21
  striker.velocityX=3||-3
} 


}

coinFall(){
// has coin fall in hole 
}
collectCoin(){
  //delete coin
}
getCoinsOnBoard(){
  //refer to player class
}
giveBlackpoints(){
//refering to player class 

}
giveWhitePoints(){
//refering to player class
}
displayScore(){

}

reset(){
//resets coins after round is done
}
negFrictionY(){
striker.velocityY+=0.1
}
posFrictionY(){
  striker.velocityY-=0.1
  }
  negFrictionX(){
    striker.velocityX-=0.1
  }
  posFrictionX(){
    striker.velocityX+=0.1
  }



restart(){
  //restarts the entire game

}
}