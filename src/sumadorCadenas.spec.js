import sumarCadena from "./sumadorCadenas";

describe("Sumar", () => {
    it("deberia sumar 0 en caso de que la cadena este vacia", () => {
      expect(sumarCadena("")).toEqual(0);
    });
    it("deberia devolver el mismo numero en caso de que la cadena tenga un elemento", () => {
        expect(sumarCadena("1")).toEqual(1);
      });
  });