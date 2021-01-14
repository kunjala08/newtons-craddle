class ball{
    constructor(x,y,r){
    var options={
       // isStatic:true,
        restitution:0.2,
        friction:0,
        density:2,
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