/**
 * las funciones son objetos
 * se pueden pasar como parametros= CALLBAK
 */

 function operaciones(x=1,y=1) {
     console.log(suma1(x,y))
 }
 function suma(x,y){
     return x+y
 }
/**
 * las funciones son objetos
 * se pueden pasar como parametros= CALLBAK
 */

function mostrarResultado(x=0,y=0,nombre,operacion){
    console.log(`el resultado de la ${nombre} ${x} e y ${y} es`)
}

let suma= function(x,y){
    return x+y
}
