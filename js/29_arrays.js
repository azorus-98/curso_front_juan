let datos = []
//let datos = new array()/* esto es otra forma de poner lo de la linea anterior */

datos[1,2,3,4,5,6]

function numeroAlAzar100() {
    return parseInt(Math.random()*100/* este numero te dice entre el el 1 y el 10 pero selo puede ser entre 1 y 100 si canvias el 10 por un 100 */)    
   }

   /**
    * Crea un array de n aleatorios
    * 
    * funtion aleatorios
    * @param {number} limite
    * @returns [munber] array
    * 
    */

    function aleatorios(limite = 0) {
        let r =[]
        for (let i = 0; i < limite; i++) {
            r[i]=numeroAlAzar100()
            
        }
        return r
    }
    console.log(aleatorios(12))

    function prueba() {
        let datos =[1,7,70,9,3,2]
        let masDatos =[1,4,6,]
        let arrayfinal= datos.concat(masDatos)
        console.log(datos)
        console.log(arrayfinal)
        let temp
        //temp=datos/* copiar referencia */
        //clonar un Array
        temp=datos.slice(0)
        temp.sort()/* ordena alfaveticamente */
        temp.sort((a,b) => a-b) /* ordena numericamente */
        console.log(temp)
        console.log(datos)
    }
prueba()