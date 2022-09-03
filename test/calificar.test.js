import App from '../src/main';

test('calificar()', () => {
  let myApp = new App();
  let solucion = ['a', 'c', 'a', 'd', 'a'];
  let respuesta = ['e', 'c', 'a', 'b', 'a'];
  let calificacion = 60;

  expect(myApp.calificar(solucion, respuesta)).toBe(calificacion);
});

test('calificar()', () => {
  let myApp = new App();
  let solucion = ['a', 'c'];
  let respuesta = ['e', 'c'];
  let calificacion = 50;

  expect(myApp.calificar(solucion, respuesta)).toBe(calificacion);
});

test('calificar()', () => {
  let myApp = new App();
  let solucion = ['a', 'c', 'a', 'd', 'a', 'a', 'c', 'a', 'd', 'a'];
  let respuesta = ['a', 'c', 'a', 'd', 'a', 'e', 'c', 'a', 'b', 'a'];
  let calificacion = 80;

  expect(myApp.calificar(solucion, respuesta)).toBe(calificacion);
});
