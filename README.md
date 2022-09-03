
![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@lucistan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luca Upper</a> on <a href="https://unsplash.com/s/photos/fun?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Título

Tarea: Vectores

## Propósito

Ejercicio practicar el uso de vectores.

## Requerimientos funcionales

1. (2 Puntos) una función que reciba como parámetro un vector y regrese como resultado la suma de todo el contenido. Por ejemplo si vector=[7, 8, 10, 2], la función regresará 27.
     - `sumar(vector);`

2. (2 Puntos) Escribir una función que reciba como parámetro un vector y regrese como resultado en qué posición se encuentra el número mayor. Por ejemplo, si vector=[1, 3, 9,2, 4], la función regresará 2, pues 9 es el número mayor y se encuentra en la posición 2.
   - `obtenerPosicionMayor(vector);`
  
3. (2 Puntos) Escribir una función que reciba un vector con números entre 0 Y 9 y regrese como resultado un vector los nombres de esos números (con nombres). Por ejemplo, si vector=[0, 3, 2, 4], la función regresará: [cero, tres, dos, cuatro];
     - `convertirALetras(vector);`
 
4. (2 Puntos) Escribir una función que reciba un vector y si todos los números son consecutivos en orden ascendente, regrese `true`  de lo contrario regresará `false`. Por ejemplo, si vector=[7, 8, 9, 10, 11], la función regresará `true` pues todos los números son consecutivos. Si vector= [7, 8, 9, 11, 12] regresará `false` pues falta el número 10;
     - `esConsecutivo(vector);`

5. (1 Puntos) Escribir una función que reciba como parámetros un vector y un número. La función regresará un vector con todos los números del parámetro vector que sean mayores al parámetro número. Por ejemplo si vector=[3, 5, 2, 6, 4, 20] y numero=5, entonces la función regresará [6, 20], pues estos son los números mayores que 5;
     - `obtenerMayores(vector, numero);`
  
6. (1 Puntos) Escribir una función que determine la calificación de un examen. La función recibirá como parámetros dos vectores, el primero representará la solución o clave del examen y el segundo las respuestas del estudiante. Para determinar la calificación tome en cuenta lo siguiente:
   1. Los dos vectores deberán ser del mismo tamaño de lo contrario la función regresará -1
   2. La máxima calificación es 100 y la mínima es 0
   3. Todas las preguntas tienen el mismo  valor. Por, ejemplo si son 10 preguntas, cada pregunta vale 10 puntos, si son 20 preguntas cada pregunta vale 5 puntos.
   4. Ejemplo, si solucion=[a, c, a, d, a] y respuesta=[e,c,a,b,a], entonces la calificación es 60 pues hay 3 aciertos (mal,bien,bien,mal,bien) y cada pregunta vale 20 puntos 5 preguntas / 100 puntos = 20.
     - `calificar(solucion, respuesta);`
  
## Requerimientos no funcionales

- Las funciones deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método o función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
