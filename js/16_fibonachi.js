/**
 * programa para calcular los numeros de la serie de fibonachi por debajo de un valor dado incluido
 * 
 * partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los 2 anteriores
 * 
 */


/**
 * funcion fibonacci
 * @param limite: number
 * @returns :array[number]
 * 
 */
function fibonacci(limite) {
    let serie=[0]
    let x=0
    let y=1

    while (y<=limite) {
        let next = x+y
        x=y
        y=next
        serie.push(x)
    }
    return serie
}

/**
 * funcion fibonaccifor
 * @param limite: number
 * @returns :array[number]
 * 
 */
function fibonachifor(limite) {
/*     let x=0
    let y=1
    let serie=[0]

    for (let i = 0; i < Infinity; i++) {
        let next = x+y
        x=y
        y=next
        serie.push(x)
        if (y>limite) {
            break
        }
    } */
    let serie=[0]
    let next
    for (let x = 0,y = 1; x < limite; x=y,y=next){
        serie.push(y)
        next=x+y
    }
    return serie
}

let limite = 8
console.log(fibonachifor(limite))
