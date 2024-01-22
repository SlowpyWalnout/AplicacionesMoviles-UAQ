//Ejercicio 6 funcion edad
function incrementAge(edad){
    return edad+5;
}
console.log(incrementAge(parseInt(prompt("ingresa tu edad incrementada"))))
//Ejercicio 7 funcion tipoNumero positivo, negativo o cero
function evaluateNumber(numero){
    if (numero>0){
        return 'positivo';
    }else if(numero<0){
        return 'negativo';
    }else{
        return 'cero';
    }
}
console.log(evaluateNumber(parseInt(prompt("ingresa un numero"))));
//ejercicio 8 funcion imprimirNumeros
function printNumbers(){
    for (let i=1; i<=20; i++){
        console.log(i);
    }
}
printNumbers();
//ejercicio 9 funcion greeting
function generateGreeting(nombre){
    console.log(`hola ${nombre}, bienvenido!`)
}
generateGreeting(prompt("ingresa tu nombre: "));
//ejercicio 10 objeto 
class Alumno{
    constructor(nombre, edad, expediente){
        this.nombre = nombre;
        this.edad = edad;
        this.expediente = expediente;
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
const AlumnoA = new Alumno('Tona', 24, '276709');
console.log(AlumnoA)
