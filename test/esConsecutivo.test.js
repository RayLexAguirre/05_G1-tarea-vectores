import App from '../src/main';

test('esConsecutivo() vector = [4, 5, 6, 7, 8] = true', () => {
  let myApp = new App();
  let vector = [4, 5, 6, 7, 8];
  let result = true;

  expect(myApp.esConsecutivo(vector)).toBe(result);
});

test('esConsecutivo() vector = [1, 2, 3, 3, 4] = false', () => {
  let myApp = new App();
  let vector = [1, 2, 3, 3, 4];
  let result = false;

  expect(myApp.esConsecutivo(vector)).toBe(result);
});

test('esConsecutivo() vector = [1, 2, 3, 5, 6] = false', () => {
  let myApp = new App();
  let vector = [1, 2, 3, 5, 6];
  let result = false;

  expect(myApp.esConsecutivo(vector)).toBe(result);
});

test('esConsecutivo() vector = [6, 5, 4, 3, 2] = false', () => {
  let myApp = new App();
  let vector = [6, 5, 4, 3, 2];
  let result = false;

  expect(myApp.esConsecutivo(vector)).toBe(result);
});
