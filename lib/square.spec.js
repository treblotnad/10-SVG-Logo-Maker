const Square = require("./square");

describe("Square", () => {
  it("should return XML to create SVG object when passed text to display, textColor and shapeColor", () => {
    const shape = new Square("DAN", "White", "Blue");
    const expected = `<svg version="1.1" width="300" height="240" xmlns="http://www.w3.org/2000/svg">
<rect x="70" y="20" width="160" height="160" fill="Blue"/>
<text x="150" y="120" font-size="55" text-anchor="middle" fill="White">DAN</text>
</svg>`;
    const actual = shape.render();
    expect(actual).toEqual(expected);
  });
});
