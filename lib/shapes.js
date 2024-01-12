const Shape = require("./parent");

class Circle extends Shape {
    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    };
};

class Square extends Shape {
    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="200" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="150" y="120" text-anchor="middle">${this.text}</text>
        </svg>`;
    };
};

class Triangle extends Shape {
    render() {
        // vertices of triangle
        const points = "250,0 0,500 500,500";

        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${points}" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="250" y="300" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    };
};

module.exports = { Circle, Square, Triangle };