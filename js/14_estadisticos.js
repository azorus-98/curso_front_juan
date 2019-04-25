/**
 * programa de calculo de estadistico como la meria arigmetrica
 * media arigmetrica es la suma de los elementos dividido por el numero de elementos
 *
 */

 /**
  * funcion mediaA
  * @param datos: array
  * @returns:number
  */
 function mediaA(datos = [], ...q) {
    if (!Array.isArray(datos)) {
        //no es array
        datos=[datos]
        datos=datos.concat(q)
    }
    
    
    let r=0
    let sumatorio =0
    for (let i = 0; i < datos.length; i++) {
        const element = datos[i];
        sumatorio=sumatorio+element
    r=sumatorio/datos.length
     return r
 }
    }
    
    
/*     function mediaA(datos = [], ...q) {
        if (!Array.isArray(datos)) {
            //no es array
            datos=[datos]
            datos=datos.concat(q)
        }
        
        
        let r=0
        for (let i = 0; i < datos.length; i++) {
            const element = datos[i];
            r=r+element/datos.length
     return r
 }
        }
     */
    

 let numeros= [1,2,3,4,5,6]
 console.log(mediaA(numeros))