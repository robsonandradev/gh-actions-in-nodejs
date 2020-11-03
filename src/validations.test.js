const { canDrink } = require("./validations");

describe("Validations", () => {
  describe("Alcoholic drinks", () => {
    it("Should be not sold if the buyer age was smaller than 18", () => {
      const userCanDrink = canDrink(17);

      expect(userCanDrink).toBe(false);
    });

    it("Should be sold if the buyer age was greater than 18", () => {
      const userCanDrink = canDrink(19);

      expect(userCanDrink).toBe(true);
    });

    it("Should be soldif the buyer age was equal to 18", () => {
      const userCanDrink = canDrink(18);

      expect(userCanDrink).toBe(true);
    });
  });
});
