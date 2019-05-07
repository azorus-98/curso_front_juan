/**
 * dada una cadena de caracteres hay que decir si esta formada:
 * - solo por letras mayusculas
 * - solo letras minusculas
 * - por la convinacion de ambas
 */

/**
 * funtion tipoCadena
 * @param {string} cadena
 * @returns void
*/

function tipoCadena( cadena='' ) {

        let mensajes = [
            'la cadena esta formada por mayusculas',
            'la cadena esta fornada por minusculas',
            'la cadena esta cormada por una conbinacion de mayusculas y minusculas',
            'introduzca un valos por favor'
        ]
        //let i =provarCadena(cadena)
        //console.log(mensajes[i])
        console.log( mensajes[provarCadena(cadena)])
        /**
     * funtion provarCadena
     * @param {string} cadena
     * @returns {number} number
     * 
     * - 0 = mayus
     * - 1 = minus
     * - 2 = convination
     * - 3 = none
     */
    function provarCadena(cadena ='') {
        let r =2
        if ( cadena==='' ) {
            r=3
        }else if ( cadena===cadena.toUpperCase() ) {
            r=0
        }else if( cadena===cadena.toLowerCase() ){
            r=1
        }
        return r

    }
}
// esto seria la manera de siempre
/**
 * funtion provarCadena
 * @param {string} cadena
 * @returns {number} number
 * 
 * - 0 = mayus
 * - 1 = minus
 * - 2 = convination
 * - 3 = none
 */
/*function provarCadena(cadena ='') {
    let r =2
    if ( cadena==='' ) {
        r=3
    }else if ( cadena===cadena.toUpperCase() ) {
        r=0
    }else if( cadena===cadena.toLowerCase() ){
        r=1
    }
    return r

} */
/**
* funtion tipoCadena
* @param {string} cadena
* @returns void
*/
/* function tipoCadena( cadena='' ) {

let mensajes = [
        'la cadena esta formada por mayusculas',
        'la cadena esta fornada por minusculas',
        'la cadena esta cormada por una conbinacion de mayusculas y minusculas',
        'introduzca un valos por favor'
    ]
    //let i =provarCadena(cadena)
    //console.log(mensajes[i])
    console.log( mensajes[provarCadena(cadena)])
} */

 let texto
 tipoCadena(texto)
 texto='ME CAGO ENTODO'
 tipoCadena(texto)
 texto='ahora sin mayusculas'
 tipoCadena(texto)
 texto='CaDa DiA cAmBiO lAs LeTrAs'
 tipoCadena(texto)