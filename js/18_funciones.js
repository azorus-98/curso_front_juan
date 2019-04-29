/**
 * 
 * @param  x 
 * @param  y
 * @returns: number 
 */

function suma(x=0,y=0) {
    return +x + +y
}
/**
 * funcion asignada
 * 
 * una funcion es un dato de tipo objeto
 * 
 */
let resta = function (x=0,y=0) {
    return x-y
}

console.log(suma())
console.log(resta(6,3))

/**
 * en ES6 aparece las arow (=>)funtion
 */
let producto =(x=1,y=1)=>{return x*y}