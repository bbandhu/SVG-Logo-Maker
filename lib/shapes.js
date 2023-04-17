class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text || "";
  }

  setColor(color) {
    this.shapeColor = color;
  }

  setText(text) {
   this.text = text

  }
}

class Circle extends Shape {
  // The "extends Shape" part means that Circle inherits from the Shape class
  // and can access its properties and methods.
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  setShapeColor(color) {
    super.setColor(color); // invoke inherited method
  }
  render() {
    // This is the render method of the Circle class.

    return `<circle height ="100%" width = "100%" cx="50%" cy="50%" r="100" stroke-width="3" fill="${this.shapeColor}" />`;
  }
}

class Rectangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  setText(text) {
    super.setText(text); // invoke inherited method
  }
  render() {
    return `<rect x="0%" y="30%" width="300" height="100" fill="${this.shapeColor}" />`;
    // returns the Rectangle instance (which inherits from Shape).
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Rectangle, Triangle };
