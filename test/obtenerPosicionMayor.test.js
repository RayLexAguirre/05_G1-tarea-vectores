import App from '../src/main';

test('obtenerPosicionMayor() vector = [1, 3, 9, 2, 4]', () => {
  let myApp = new App();
  let vector = [1, 3, 9, 2, 4];
  let result = 2;

  expect(myApp.obtenerPosicionMayor(vector)).toBe(result);
});

test('obtenerPosicionMayor() vector = [1, 1, 2, 2, 4, 3, 3]', () => {
  let myApp = new App();
  let vector = [1, 1, 2, 2, 4, 3, 3, 2, 4];
  let result = 4;

  expect(myApp.obtenerPosicionMayor(vector)).toBe(result);
});
