class Drops{
    constructor(x,y){
        var options={
            friction:0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        
        fill("purple");
        
        ellipseMode (RADIUS);
        ellipse (pos.x, pos.y,5,5 );

    }

    update(){
        if(this.body.position.y>800){
            Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}