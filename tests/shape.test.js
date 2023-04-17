const { Circle, Rectangle, Triangle } = require("../lib/shapes.js");


// Describing a test suite for the Triangle class
describe("Shape tests", () => {
  // Test case for rendering a blue triangle
  test("should render the shape triange and set color to blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="0,200 300,200 150,0" fill="blue" />',
      "Should render blue triangle polygon"
    );
  });
});

// Describing a test suite for the Circle class
describe("shape color", () => {
  // Test case for rendering a red circle
  test("should render the shape circle and set color to red", () => {
    const shape = new Circle();
    shape.setShapeColor("red");
    // Asserting that the rendered circle matches the expected output

    expect(shape.render()).toEqual(
      '<circle height ="100%" width = "100%" cx="50%" cy="50%" r="100" stroke-width="3" fill="red" />',
      "Should render red circle"
    );
  });
});


// Describing a test suite for the Rectangle class
describe("rectangle", () => {
  // Test case for rendering a green rectangle
  test("should render the shape rectangle and set color to green", () => {
    const shape = new Rectangle();
    shape.setColor("green");
    // Asserting that the rendered rectangle matches the expected output
    expect(shape.render()).toEqual(
      '<rect x="0%" y="30%" width="300" height="100" fill="green" />',
      "Should render green rectangle"
    );
  });
});
