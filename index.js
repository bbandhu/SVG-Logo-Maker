const inquirer = require("inquirer");
const fs = require("fs");
//const shapesObj = ("./lib/shapes.js")
const { Circle, Rectangle, Triangle } = require("./lib/shapes.js");




//Array of questions prompts user
const logoQuestions = [
  {
    name: "text",
    message: "Enter up to 3 chars you need to display",
    type: "input",
  },

  {
    name: "text_color",
    message: "Enter a text color you choose to display",
    type: "input",
  },
  {
    name: "shapeColor",
    message: "Enter a shape color you need",
    type: "input",
  },
  {
    name: "shape",
    message: "Choose what shape would you like?",
    type: "list",
    choices: ["Circle", "Rectangle", "Triangle"],
  },
];

inquirer
  .prompt(logoQuestions)
  .then((data) => {
    console.log(data);

    let shape;
    switch (data.shape) {
      case "Circle":
        shape = new Circle(data.shapeColor, data.text, data.text_color);
        break;
      case "Rectangle":
        shape = new Rectangle(data.shapeColor, data.text, data.text_color);
        break;
      case "Triangle":
        shape = new Triangle(data.shapeColor, data.text, data.text_color);
        break;
       default:
        throw new Error("Invalid shape choice");
    }

    let textSvg = `<text x="150" y="125" font-size="60px" text-anchor="middle"  fill="${data.text_color}">${data.text}</text>`;

    let logoSvg = `<svg height="200" width="300">
      ${shape.render()}
      ${textSvg}
    </svg>`;

    fs.writeFileSync("logo.svg", logoSvg);
    console.log("'Generated logo.svg !!!'");
  })
  .catch((error) => {
    console.log(error);
  });
