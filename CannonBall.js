class CannonBall{
    constructor(x,y,sides,radius) {
      var Options = {
          'isStatic': false,
          'restitution': 0.25,
          'friction': 0.5,
          'density':1.25
      }
      this.body = Bodies.polygon(x,y,sides,radius,Options);
      this.sides = sides;
      this.radius = radius;
      World.add(world,this.body);
      this.image = loadImage("Sprites/HexagonImage.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}