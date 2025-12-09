const index = require("./index.js");

const juegoPruebas = [
    {a:800, b:0, esperado:5},
    {a:700, b:100, esperado:4},
    {a:600, b:600, esperado:0},
    {a:500, b:300, esperado:1},
    {a:300, b:90, esperado:3},
    {a:200, b:150, esperado:2},
]

juegoPruebas.forEach(verifica => {
    const {a, b, esperado} = verifica;

    test ("Prueba calculaTipo", () => {
        const resultado = index.CalculaTipo(a, b);
        expect(resultado).toBe(esperado);
    });
});
