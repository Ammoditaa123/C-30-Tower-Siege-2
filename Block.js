class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }

  display() {
    console.log(this.body.speed);
    if (this.body.speed < 10) {
      rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 7;
      fill(255, this.Visibility);
      var pos = this.body.position;
      rectMode(CENTER);
      noStroke();
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }

  }
}