const inquirer = require("inquirer");
const Renderer = require("./renderer.js");
const validateColor = require("validate-color").default;

const textValidate = async (input) => {
  if (input.length < 1 || input.length > 3) {
    return "Please enter text between 1 and 3 characters";
  }
  return true;
};
const colorValidate = async (input) => {
  if (!validateColor(input)) {
    return "Please enter a valid Color";
  }
  return true;
};

const questions = [
  {
    type: "input",
    message: "Please enter 1, 2 or 3 Characters for your logo.",
    name: "logoText",
    validate: textValidate,
  },
  {
    type: "input",
    message:
      "Please enter a color(keyword or hexadecimal number with #) for your logo's text.",
    name: "textColor",
    validate: colorValidate,
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
    validate: colorValidate,
  },
  {
    type: "input",
    message: "Please enter the desired file name.",
    name: "fileName",
  },
];
class CLI {
  constructor() {}
  run() {
    inquirer.prompt(questions).then((response) => {
      const renderer = new Renderer(response);
      renderer.render();
    });
  }
}

module.exports = CLI;
