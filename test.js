const Renderer = require("./lib/renderer.js");

const test = {
  logoText: "dat",
  textColor: "yellow",
  logoShape: "Circle",
  bodyColor: "blue",
};

const renderer = new Renderer(test);
console.log(renderer);
renderer.render();
