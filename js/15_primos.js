/**
 * presentar los primos del 1 al n
 */
 
 let number = 6

 function isPrimo(num) {
     let r = true
    if (!num /* esto es lo mismo a--> num == 0 */) {
        return false              
    }
    for (let i = 2; i < num; i++) {
         const element = num[i];
        if (!(num % i) ) {
            return false            
        }
     }
     return r 
 }
//------------------------------------------------
 function mostrar (array) {
    let p
    if (array == true) {
    p='es primo'
}else if (array == false) {
    p='no es primo'
}
console.log (p)
  }
 mostrar(isPrimo(number))





 /**
  * funcion listaPrimos
  * @param limite: number
  * @returns: Array[number]
  */

  function listaPrimos(limite) {
    let primos =[]      
    
    for (let i = 0; i <= limite; i++) {
        if(isPrimo(i)){
        //primos[primos.length]=i
        primos.push(i)
    }
    }
    return primos
    }
    /* console.log('los primos son ', listaPrimos(100),join(', ')) */
    console.log(listaPrimos(100))

