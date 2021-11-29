class Start {
    constructor(){
       
    }

    display(){
        button.x=displayWidth/2;
     
        backButton.visible=false;
        ocean.visible=false;
        ocean2.visible=false;
        player.visible=false;
        howToButton.visible=true;

        textSize(120);
        fill("white")
        stroke("black")
        text("Sea Survivor",displayWidth/2-300,displayHeight/2-200);
        textSize(40);
        fill("white")
        stroke("black")
        text("How To Play",displayWidth/2-110,displayHeight/2+210);
        
          
        if(mousePressedOver(button)){
        gamestate="play";
        button.debug=true;
        }

        if(mousePressedOver(howToButton)){
              gamestate="howTo";
          }
     
    }
}