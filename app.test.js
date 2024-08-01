// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});

test("One dollars should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(5);
    const expected = 5 * 156.5;
    expect(yenes).toBe(expected); 
});

test("One yen should be 0.87 British pounds.", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(10.2);
    const expected = 10.2 * 0.87;
    expect(pound).toBe(expected.toFixed(4));
});
