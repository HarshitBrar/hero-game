class Villain{
    constructor(x,y,r){
        var options = {
            density : 1,
            friction : 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("Monster-01.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white");
        //ellipse(0,0,this.r,this.r);
        image(this.image,-50,-50,100,100);
        pop()
    }
}