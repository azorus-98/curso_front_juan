/* let n =5
let i 
for (let i = 0; i < n; i++) {
    console.log(i+1)
} */
/**
 * programa de calculo del factorialde un numero
 * 
 */
/**
 * funtion factorial
 * @param num: number
 * @returns:num
 * 
 * se calcula el pruducto de numpor todos los inferiores
 * 
*/

/* function factorial(num) {
    if (num<=0) {
        //entntraria el 0
        return 0
    }else if (isNaN(num) || Array.isArray(num) || typeof num==='boolean'){
        return 'cazurro no es un numero'
    }
    let r =1
    for (let i = 1; i <= num; i++) {
    r = r * i
    console.log(r)
} 
    return r
}
console.log(factorial(5)) */

function factorial2(num) {
    let r =1
    if (num<=0) {
        //entntraria el 0
        r=0
    }else{ 
    for (let i = 1; i <= num; i++) {
    r = r * i
    } 
}
    return r
}
console.log(factorial2(5))