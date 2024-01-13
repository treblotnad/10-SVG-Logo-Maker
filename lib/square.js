const Shape = require("./shape.js");

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor);
    this.shapeColor = shapeColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="240" xmlns="http://www.w3.org/2000/svg">
<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>
<text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
  }
}
module.exports = Square;
