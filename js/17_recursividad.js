/**
 * calculo factorial mediante recursividad
 */

 /**
 * funtion factorial
 * @param num: number
 * @returns:num
 * 
 * se calcula el pruducto de numpor todos los inferiores
 * 
*/

function factorial(num) {
    if (num<0 || parseInt(num)!==num) {
        return 0 //entrarian el 0 y los negativos
    }else if(num===0){
        return 1
    }else if(num===1){
        return num
    }
    return num*factorial(num-1)
}

let n = 5
n=0
n=-7
n=170//este es el maximo que puede llegar un ordenador 171 saldria infinity
console.log(factorial(n))