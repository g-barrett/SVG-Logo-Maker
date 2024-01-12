const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for your logo",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color (Use color keyword or hexadecimal value)",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter Shape color (Use color keyword or hexadecimal value)",
    }
];

function createFile(fileName, data) {
	const input = generateSVG(data);
	fs.writeFile(fileName, input, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log("Generated logo.svg");
	});
}

function init() {
	inquirer.prompt(questions).then(function (data) {
		const fileName = "generatedLogo.svg";
		createFile(fileName, data);
	});
}

init();