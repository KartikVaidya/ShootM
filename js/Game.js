class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

      bg =createSprite(width/2,height/2)
  bg.addImage("bgImg",bgImg)
  bg.scale =4;
   
 shootBut =createSprite()
shootBut.addImage("shoot",shootButImg)
shootBut.scale =0.3

edgeT =createSprite(width/2,-height*2.1,width*5,10)
edgeB =createSprite(width/2,height+1400,width*5,10)
edgeL =createSprite(-width*2,height/2,10,height*5)
edgeR =createSprite(width*3,height/2,10,height*5)

edgeT.visible =false
edgeB.visible =false
edgeL.visible =false
edgeR.visible =false

  Plyr =createSprite(400, 200, 50, 50);
Plyr.addImage("adam",Adam)
Plyr.addImage("Chrono",Chrono)
Plyr.addImage("Jota",Jota)
Plyr.addImage("Kartik",Kartik)

Plyr.scale =0.7

Plyr2 =createSprite(-1580, -1030, 50, 50);
Plyr2.addImage("adam",Adam)
Plyr2.scale =0.7

Plyr3 =createSprite(2608,-571.0999999999999, 50, 50);
Plyr3.addImage("adam",Adam)
Plyr3.scale =0.7

Plyr4 =createSprite(1570, 1100, 50, 50);
Plyr4.addImage("adam",Adam)
Plyr4.scale =0.7

players =[Plyr,Plyr2,Plyr3,Plyr4]

life =createSprite(width/2 +300,height/2 -400)
life.addImage("lifeImg",lifeImg)
life.scale =0.1
    }

 }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(255,255,255);  
      drawSprites();
    
      if(keyDown(UP_ARROW)){
        players[index-1].y =players[index-1].y -10
      }
      if(keyDown(DOWN_ARROW)){
        players[index-1].y =players[index-1].y +10
       }
     
       if(keyDown(LEFT_ARROW)){
        players[index-1].x =players[index-1].x -10
       }
     
       if(keyDown(RIGHT_ARROW)){
        players[index-1].x =players[index-1].x +10
       }
     
    if(mousePressedOver(shootBut)&& count===0){
    
      bulletR =createSprite(players[index-1].x +80,players[index-1].y+48);
      count++
      bulletL =createSprite();
      bulletR.visible =true
      bulletL.visible =false
      bulletR.addImage("bulletRImg",bulletRImg)
      bulletL.addImage("bulletLImg",bulletLImg)
      bulletR.scale =0.1
      bulletR.velocityX =50
    bulletR.lifetime =60
    }
    if(mouseWentUp("leftButton")){
    count=0;
    }
    
    
    shootBut.x =Plyr.x +500
    shootBut.y =Plyr.y +200
    
    players[index-1].collide(edgeT)
    players[index-1].collide(edgeB)
      players[index-1].collide(edgeL)
      players[index-1].collide(edgeR)
    
      life.x =players[index-1].x +500
      life.y =players[index-1].y -200
    fill("white");
    rect(camera.position.x+200,camera.position.y-200,150,20);
    fill("red");
    rect(camera.position.x+200,camera.position.y-200,150,20);
     
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;
       // console.log(index, player.index)
       
       
        if (index === player.index){
         

          
          
          camera.position.x =players[index-1].x;
          camera.position.y = players[index-1].y;
        }
       
        }

    }
  }

  end(){
    console.log("Game Ended");
  }
}
