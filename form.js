class Form{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");   
        title.position(130,0);
        var input = createInput("Enter Name Here");
        input.position(130,160);
        var button = createButton("Play");
        button.position(250,200);
        var greeting = createElement("h3")

        // define an anonymous function 
        button.mousePressed( function(){
            button.hide();
            input.hide();
            var name = input.value();

            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            
            greeting.html("Hello "+name);
            greeting.position(130,160);
        })  
    }
}