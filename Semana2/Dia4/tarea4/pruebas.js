// Shape - superclase
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // método de la superclase
  Shape.prototype.move = function(x, y) {
      this.x += x;
      this.y += y;
      console.info("Shape moved.");
  };
  
  // Rectangle - subclase
  function Rectangle() {
    Shape.call(this); // llama al contructor de la superclase.
  }
  
  // subclase extiende superclase
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  
  rect instanceof Rectangle // true.
  rect instanceof Shape // true.
  
  rect.move(1, 1); // Salida, "Shape moved."