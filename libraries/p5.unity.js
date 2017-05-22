//Created by Gabe Labadie
//Base Classes
class Transform {
  constructor() {
    this.position = new Vector2(0, 0);
    this.rotation = 0;
    this.scale = new Vector2(1, 1);
  }
}

class Rigidbody {
  constructor() {
    this.velocity = new Vector2(0, 0);
    this.Move = function() {

    }
  }
}

class Vector2 {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
  Add(arg) {
    if (arg.x != undefined) {
      this.x += arg.x;
      this.y += arg.y;
      return new Vector2(this.x, this.y);
    }
    else
    {
      throw new TypeError ("The argument must be of the type Vector2");
    }
  }
  Subtract(arg) {
    if (arg.x != undefined) {
      this.x -= arg.x;
      this.y -= arg.y;
      return new Vector2(this.x, this.y);
    }
    else
    {
      throw new TypeError ("The argument must be of the type Vector2");
    }
  }
  Multiply(arg) {
    if (arg.x != undefined) {
      //this.x = this.x + arg.x;
      //this.y = this.y + arg.y;
      console.log("Vector2 multiplication by another Vector2 is not yet implemented");
    }
    else
    {
      this.x *= arg;
      this.y *= arg;

      return new Vector2(this.x, this.y);
    }
  }
  Normalize() {
    this.x /= Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    this.y /= Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

    return new Vector2(this.x, this.y);
  }
}
