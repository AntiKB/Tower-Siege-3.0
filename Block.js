class Block {
    constructor(x,y,width,height){
        var Options = {
            'isStatic': false,
            'restitution': 0.25,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,Options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage("Sprites/BlockImage.png");
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            image(this.image,this.body.position.x-this.width/2,this.body.position.y-this.height/2,this.width,this.height);
            pop();
        }
        else{
            if (this.visibility > 0) {
                World.remove(world,this.body);
                push();
                this.visibility = this.visibility-5;
                tint(255,this.visibility);
                image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
                pop();
            }
        }
    }
}