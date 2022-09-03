import App from '../src/main';

test('obtenerMayores()', () => {
  let myApp = new App();
  let vector = [0, 3, 10, 4, 24, 7, 30];
  let result = [10, 24, 30];

  let response = myApp.obtenerMayores(vector, 7);

  for (let i = 0; i < result.length; i++) {
    expect(response[i]).toBe(result[i]);
  }
});

test('obtenerMayores()', () => {
  let myApp = new App();
  let vector = [0, 3, 1, 4, 4, 7, 3];

  let response = myApp.obtenerMayores(vector, 7);

  expect(response.length).toBe(0);
});
