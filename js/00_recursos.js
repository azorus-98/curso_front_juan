/**
 * tedeja solo los numeros y se carga lo demas
 * function formateaNumero
 * @param cadena: string
 * @returns : string
 *  
 */
function formateaNumero(cadena = '') {
    let aCadena = cadena.split('')
    for (let i = 0; i < aCadena.length; i++) {
        const item = aCadena[i];
        if (isNaN(item)) {
            aCadena.splice(i,1)
        }
    }
    return aCadena.join('')
}
