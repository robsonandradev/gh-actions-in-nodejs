const { canDrink } = require("./src/validations");
const age = process.argv[2];

if (age) {
  if (canDrink(age)) {
    console.log("You can drink");
  } else {
    console.log("You can not drink");
  }
}
