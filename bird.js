class Ball {
    constructor(x, y,w,h) {
      var options = {
          'density':1.0,
          'friction':0.005
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      
      this.image=loadImage("Superhero-01.png")
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
      stroke('lime');
      fill('red');
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }