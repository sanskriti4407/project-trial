class Paper{
    constructor(x, y, radius) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
           isStatic:false
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
       // var angle=this.body.angle
       var pos =this.body.position;
       // push();
      //  translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        circle(CENTER);
        circle(pos.x, pos.y,this.radius);
      //  pop();
      }
}