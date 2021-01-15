class ball{
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8,
    }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
    }
display(){

   var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill(rgb(100,20,100));
    ellipseMode(RADIUS);
    ellipse(0,0,this.r);
    pop();
}

}