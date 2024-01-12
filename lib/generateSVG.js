const { Circle, Square, Triangle } = require("./shapes");

function generateSVG(data) {
    let shape;
    data.shape === "Circle" ? shape = new Circle(data.text, data.text-color, data.shape-color)
    : shape === "Square" ? shape = new Square(data.text, data.text-color, data.shape-color)
    : shape = new Triangle(data.text, data.text-color, data.shape-color);

    return shape.render();
};

module.exports = generateSVG;