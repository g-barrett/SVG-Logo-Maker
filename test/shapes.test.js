const { Circle, Square, Triangle } = require("../lib/shapes");

test("Circle render method returns correct SVG", () => {
	const shape = new Circle();
	shape.setColor("blue");
	shape.setText("");
	shape.setTextColor("");

	const expectedSVG =
    `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="250" fill="blue" />
    <text fill="" font-size="75" x="172" y="250"></text>
    </svg>`;

	const removeSpace = (str) => str.replace(/>\s+</g, "><").trim();

	expect(removeSpace(shape.render())).toEqual(
		removeSpace(expectedSVG)
	);
});

test("Square render method returns correct SVG", () => {
	const shape = new Square();
	shape.setColor("blue");
	shape.setText("");
	shape.setTextColor("");

	const expectedSVG =
    `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="300" height="200" fill="blue" />
    <text fill="" font-size="75" x="150" y="120" text-anchor="middle"></text>
    </svg>`;

	const removeSpace = (str) => str.replace(/>\s+</g, "><").trim();

	expect(removeSpace(shape.render())).toEqual(
		removeSpace(expectedSVG)
	);
});

test("Triangle render method returns correct SVG", () => {
	const shape = new Triangle();
	shape.setColor("blue");
	shape.setText("");
	shape.setTextColor(""); // text empty because we care about the shape

	const expectedSVG =
		'<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg"><polygon points="250,0 0,500 500,500" fill="blue" /><text fill="" font-size="75" x="250" y="300" text-anchor="middle" dominant-baseline="middle"></text></svg>';

	// Function to remove whitespace between tags
	const removeSpace = (str) => str.replace(/>\s+</g, "><").trim();

	expect(removeSpace(shape.render())).toEqual(
		removeSpace(expectedSVG)
	);
});