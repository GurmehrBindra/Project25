class Paperball{
    constructor(x,y,radius){
        var options={
            'isStatic':true
        }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius;
    this.image=loadImage("sprites/paper.png");

    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
   
    if(keyDown(UP_ARROW)){
    pos.y=340;
    pos.x=500;
    }
    
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,this.radius,this.radius);
   
    }
}