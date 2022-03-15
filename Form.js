class Form{

    constructor(){
        this.playButton = createButton("Play"); 
       this.input = createInput("").attribute("placeholder", "Enter Name Here");
       this.message =  createElement("h2");
    }
    setElementsPosition(){
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
    setElementsStyle(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.message.class("greeting");
    }
    hide(){
    this.playButton.hide();
    this.input.hide();
    this.greeting.hide();
    }
    handleButtonPressed(){
        if(this.playButton.mousePressed){
            this.playButton.hide();
            this.input.hide();
            var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
            
        }
    }
     display(){
     this.setElementsPosition();
     this.setElementsStyle()
     this.handleButtonPressed();
     }

    }