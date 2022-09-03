import App from '../src/main';

test('convertirALetras() vector = [0, 3, 2, 4]', () => {
  let myApp = new App();
  let vector = [0, 3, 2, 4];
  let result = ['cero', 'tres', 'dos', 'cuatro'];

  let response = myApp.convertirALetras(vector);

  for (let i = 0; i < result.length; i++) {
    expect(response[i].toLowerCase()).toBe(result[i]);
  }
});

test('convertirALetras() vector = [1, 5, 7, 9]', () => {
  let myApp = new App();
  let vector = [1, 5, 7, 9];
  let result = ['uno', 'cinco', 'siete', 'nueve'];

  let response = myApp.convertirALetras(vector);

  for (let i = 0; i < result.length; i++) {
    expect(response[i].toLowerCase()).toBe(result[i]);
  }
});
