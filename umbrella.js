class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.image = loadImage("images/walking_1.png");
    }

    display(){
       var pos = this.body.position;
        image(this.image,pos.x,pos.y,200,200);
    }
}