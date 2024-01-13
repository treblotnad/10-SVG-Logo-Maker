const circle = require("./circle.js");
const triangle = require("./triangle");
const square = require("./square");
const fs = require("fs");

const shapes = {
  Circle: circle,
  Triangle: triangle,
  Square: square,
};

class Renderer {
  constructor(response) {
    this.logoText = response.logoText;
    this.textColor = response.textColor.toLowerCase();
    this.logoShape = response.logoShape;
    this.bodyColor = response.bodyColor.toLowerCase();
    this.fileName = response.fileName;
  }
  render() {
    const pickedShape = new shapes[this.logoShape](
      this.logoText,
      this.textColor,
      this.bodyColor
    );
    fs.writeFile(
      "./output/" + this.fileName + ".svg",
      pickedShape.render(),
      (err) => (err ? console.error(err) : console.log("Success!"))
    );
  }
}

module.exports = Renderer;
