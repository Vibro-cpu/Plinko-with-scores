class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(240,800,480,10,{isStatic: true});
        World.add(world, this.body);
    }

    display(){

        push ()

        fill("white")

        rectMode(CENTER)
        rect(240,800,480,10)

        pop ()
    }
}