import sumarCadena from "./sumadorCadenas";

describe("Sumar", () => {
    it("deberia sumar 0 en caso de que la cadena este vacia", () => {
      expect(sumarCadena("")).toEqual(0);
    });
  });