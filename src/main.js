export default class App {

    sumar(vector){
        
        let suma = 0;

        for(let i = 0; i < vector.length; i++)
        {
            suma += vector[i];
        }

        return suma;
    }
    
    obtenerposicionMayor(vector){
        let mayor = 0
        
        for(let i = 0; i < vector; i++){
            if(numero[i] > mayor){
                mayor = numero[i]
            }
        }

        let posicion = vector.find(elemento => elemento == mayor);
        
        //let index = vector.find(elemento => elemento == (Math.max.apply(null, vector)));

        return posicion
    }

    convertirALetras(vector){

        if  = cero
    }

    esConsecutivo(vector){

    }

    obtenerMayores(vector, numero){

    }

    calificar(solucion, respuesta){

    }
}

let app = new App();

console.log(app.sumar([5, 4, 3]));