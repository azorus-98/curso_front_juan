//forma 1
function daLetraDni1(dni) {
    function calculo1(dni){
    let r=dni % 23
    return r
}
     let dniletra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'] 
    console.log(dniletra[calculo1(dni)] )
}

function letraCorrecta1(dni,letra='0') {
    this.dni=dni
    this.letra=letra
    let r=false

    if (letra=daLetraDni1(dni)) {
        r=true
    }
    return r
}


daLetraDni1(05409054)
letraCorrecta1(`05409054,y`)

//forma 2

function daLetraDni2(dni) {
    function calculo2(dni){
    let r=dni % 23
    return r
    }

    let dniletra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'] 
    let letraDni=dniletra.splice(calculo2(dni),1)
    console.log(letraDni)
}

function letraCorrecta2(dni,letra='0') {
    this.dni=dni
    this.letra=letra
    let r=false
    if (letra=daLetraDni2(dni)) {
        r=true
    }
    return r
}

daLetraDni2(05409054)
letraCorrecta2(`05409054,y`)


//forma 3
/**
 * Programa que comprueba la letra de un DNI
 * La letra se asigna a partir de un array preestablecido, 
 * seleccionando la posicion correspondiente al desto del numero entre 23
 * 
 */

 /**
  * function calcularLetraDNI
  * @param dni: string
  * @returns : string
  * 
  */

 function calcularLetraDNI(dni = '') {
    letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
    'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    // let num = dni % 23
    // return letrasDNI[num]
    return letrasDNI[dni % 23]
}

/**
 * function isLetraDNIValida
 * @param dni: string (formato nnnnnnnnL)
 * @returns : boolean
 * 
 */

 //    1R - length = 2
 //   99999999R - length = 9

function isLetraDNIValida(dni = '') {
    r = false
    let letra = dni[dni.length-1]
    let numero = dni.slice(0, dni.length-1)
    numero = formateaNumero(numero)
    if (letra === calcularLetraDNI(numero)) { r = true}
    return r
}

/**
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


(function () {
    let miDNI = '50.821.728  / P'
    // console.log(cacalcularLetraDNI(miDNI))
    console.log(isLetraDNIValida(miDNI))
    //console.log(formateaNumero(miDNI))
})()