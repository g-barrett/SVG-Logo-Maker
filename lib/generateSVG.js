const { Circle, Square, Triangle } = require("./shapes");

function generateSVG(data) {
    let shape;
    data.shape === "Circle" ? shape = new Circle(data.text, data.textColor, data.shapeColor)
    : shape === "Square" ? shape = new Square(data.text, data.textColor, data.shapeColor)
    : shape = new Triangle(data.text, data.textColor, data.shapeColor);

    return shape.render();
};

module.exports = generateSVG;