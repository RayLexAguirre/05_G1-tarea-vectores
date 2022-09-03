import App from '../src/main';

test('sumar() vector = [7, 8, 10, 2]', () => {
  let myApp = new App();
  let vector = [7, 8, 10, 2];
  let result = 27;

  expect(myApp.sumar(vector)).toBe(result);
});

test('sumar() vector = [5, 5, 10, 10, 15]', () => {
  let myApp = new App();
  let vector = [5, 5, 10, 10, 15];
  let result = 45;

  expect(myApp.sumar(vector)).toBe(result);
});
