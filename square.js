class Square {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'friction':0.3,
          'density':1,
          'restitution':0.1
          

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("red");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };