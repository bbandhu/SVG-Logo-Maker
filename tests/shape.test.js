const {Circle, Rectangle, Triangle} = require('../lib/shapes.js');

describe('Shape tests',()=>{

    it('should render the shape triange and set color to blue', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue" />', 'Should render blue triangle polygon');
    });
})

describe('shape color',()=>{

    it('should render the shape circle and set color to red', () => {
    const shape = new Circle();
    shape.setShapeColor("red");
    expect(shape.render()).toEqual('<circle height ="100%" width = "100%" cx="50%" cy="50%" r="100" stroke-width="3" fill="red" />', 'Should render red circle');
    });
})



describe('rectangle',()=>{

    it('should render the shape rectangle and set color to green', () => {
    const shape = new Rectangle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="0%" y="30%" width="300" height="100" fill="green" />', 'Should render green rectangle');
    });
})

