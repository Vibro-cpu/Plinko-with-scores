class Particle{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{isStatic: false});
        World.add(world, this.body);

        this.color = color(random(0,255),random(0,255),random(0,255))
    }

    display(){

        push ()

        fill(this.color)

        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,10)

        pop ()

    }
}