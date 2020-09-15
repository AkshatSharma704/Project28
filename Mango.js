  
class Mango {
    constructor(x,y,diameter) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
      }
      this.body = Bodies.circle(x,y,diameter,options);
      this.diameter= diameter;
      this.image = loadImage("Images/mango.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      image(this.image,pos.x,pos.y,this.diameter,this.diameter);
      imageMode(CENTER);
      pop();
    }
  }