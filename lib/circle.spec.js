const Circle = require("./circle");

describe("Circle", () => {
  it("should return XML to create SVG object when passed text to display, textColor and shapeColor", () => {
    const shape = new Circle("DAN", "White", "Blue");
    const expected = `<svg version="1.1" width="300" height="240" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="Blue" />
<text x="150" y="120" font-size="55" text-anchor="middle" fill="White">DAN</text>
</svg>`;
    const actual = shape.render();
    expect(actual).toEqual(expected);
  });
});
