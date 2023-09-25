describe("FCATORES PRIMOS", () => {
  it("Deberia retornar una lista vacia para 1", () => {
    const primosfac = new primos
    expect(primosfac.factorprimo(1)).toEqual([]);
  });
});


class primos{
  factorprimo(){
    return [];
  }
}