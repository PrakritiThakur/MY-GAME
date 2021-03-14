class Form{
    constructor(){

        this.title = createElement('h1');
        this.story = createElement('h2');
        this.nextButton = createButton('NEXT');
        this.instructions = createElement('h3');
        
        
    }
    display(){

        this.title.position(displayWidth/2 - 100 ,0);
        this.title.html("RESCUE MISSION");
        this.story.position(300,displayHeight/2.75);
        this.story.html("The king of Saraipur has entrapped the innocent people  <br /> "+
         "of the nearby village.The news reached the ruler of the kingdom <br />"+
         "  of which the village is a part of. He has entrusted you with <br />" +
          "the mission of freeing the innocent civilians from the predator.");
        this.nextButton.position(displayWidth/2,displayHeight/1.75 );
        //introSound.play();
        
        this.nextButton.mousePressed(()=>{

            this.story.hide();
            this.nextButton.hide();
            this.instructions.position(500,displayHeight/2.75);
            textSize(40);
            this.instructions.html("1. Press right arrow to move right. <br /> "+ 
                                   "2. Press left arrow to move left.<br /> "+
                                   "3. Press up arrow to jump.<br /> "+
                                   "4. Press down arrow to bend down.<br /> ");
            
            var playButton = createButton('PLAY');
            playButton.position(displayWidth/2,displayHeight/1.75);
            playButton.mousePressed(()=>{
                //introSound.stop();
                background(newBack_Img);
                this.title.hide();
                gameState = 1;
                console.log(gameState);
                this.instructions.hide();
                playButton.hide();
                player = createSprite(70,70,20,20);
                

            })
    })
  }

  
}