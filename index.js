const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "logo text",
        message: "Enter up to 3 characters for your logo",
    },
    {
        type: "input",
        name: "text color",
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
        name: "shape color",
        message: "Enter Shape color (Use color keyword or hexadecimal value)",
    }
];