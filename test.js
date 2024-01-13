const validateColor = require("validate-color").default;

console.log(validateColor('reaad'));
const colorValidate = (input) => {
  if (input == "") return false;
  let style = new Option().style;
  style[color] = input;
  return style[color] !== "";
};

// console.log(colorValidate("yellow"));
