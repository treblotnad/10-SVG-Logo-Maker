const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Please enter 1, 2 or 3 Characters for your logo.",
    name: "logoText",
  },
  {
    type: "input",
    message:
      "Please enter a color(keyword or hexadecimal number with #) for your logo's text.",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please pick a shape for your logo.",
    name: "logoShape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    message:
      "Please enter a color(keyword or hexadecimal number with #) for your logo's body.",
    name: "bodyColor",
  },
];
class CLI {
  constructor() {}
  run() {
    inquirer.prompt(questions).then((response) => {
      console.log(response);
    });
  }
}

module.exports = CLI;
