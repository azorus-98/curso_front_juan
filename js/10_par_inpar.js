/* // Tipos de Strings
let cadena = 'Hola Mundo'
cadena = "Hola Mundo"
// ES6 aparecen los template string
cadena = `
Hola 
Mundo
`
let user = 'Pepe'
cadena = 'Hola ' + user + ', que tal estas'
cadena = `Hola ${user}, que tal estas`
console.log(cadena) */

/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 * 
 */

 /**
  * Function calculaQueEs
  * @param num: number
  * @returns: number
  * Posibles valores
  *     0 pares
  *     1 impares
  *     2 numeros decimales
  *     3 no numeros NaN
  * */
 
 function  calculaQueEs(num) {
    let r
    if (isNaN(num) || Array.isArray(num) || typeof num==='boolean'){
        //no es un numero
        r= 3
    }else if (parseInt(num)!=num){
        //es un numero decimal
        r=2
    } else {
    r= num % 2
}
return r
}


/**
* Function isPar
* @param num: number
* @returns: boolean
* Posibles valores
*    true pares
*    false impar
*/

function isPar(num) {
    return !(num % 2)
}

function isImpar(num) {
    return !!(num % 2)
}

/**
 * Function mostrar
 * @param isPar: bolean // sera true si el numero es PAR
 * @param num: number
 * @returns: void
 * 
 */

/*   function mostrar(isPar, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`
    ] 
    if (isPar) {
      console.log(mensajes[0])
    } else {
      console.log(mensajes[1])
    }
} */

function mostrar(isPar, num) {
  let mensajes = [
      `El número ${num} es par`,
      `El número ${num} es impar`
  ] 
  /* let i = 1
  if (isPar) {
    i = 0
  }  */
  try {
      let i = (isPar(num)) ? 0 : 1
  } catch(error){
  i=error
}
  console.log(mensajes[i])
}

/**
 * Function mostrar2
 * @param code: mumber // sera 0 sies par y 1 si es impar
 * @param num: number
 * @returns: void
*/

let number = 23
number = 28
number = 'Pepe'
number = 0
mostrar(isPar(number), number)

////////////////////////////////////////////////////
// Version final

function mostrar2 (code, num) {
  let mensajes = [
      `El número ${num} es par`,
      `El número ${num} es impar`,
      `El numero ${num} es decimal, que no es ni par ni impar`,
      `El valor ${num}no es un numero`,
  ] 
  console.log(mensajes[code])
}

let numero = 25
numero = 30
numero = 'Pepe'
numero = 3.3
numero ={}
mostrar2(calculaQueEs(numero), numero)
//mostrar2(numero % 2, numero)

/* try {
    noExiste()
    throw 'probando un error'
} catch (error) {
    console.log('lo siento a abido un error')
}
 */