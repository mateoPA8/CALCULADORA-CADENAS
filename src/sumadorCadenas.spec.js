import sumarCadena from "./sumadorCadenas";

describe("Sumar", () => {
    it("deberia sumar 0 en caso de que la cadena este vacia", () => {
      expect(sumarCadena("")).toEqual(0);
    });
    it("deberia devolver el mismo numero en caso de que la cadena tenga un elemento", () => {
        expect(sumarCadena("1")).toEqual(1);
      });
      it("devolver la suma de 2 numeros", () => {
        expect(sumarCadena("2,3")).toEqual(5);
      });
      it("devolver la suma de una cadena de numeros", () => {
        expect(sumarCadena("1,2,3,4,5,6")).toEqual(21);
      });
  });