/* function letraCorrecta(dni) {
    function calculo(dni){
    let r=dni % 23
}
     let dniletra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'] 
    console.log(dniletra[calculo(dni)] )
}
console.log (letraCorrecta(05409054))
 */
function letraCorrecta(dni) {
    function calculo(dni){
    let r=dni % 23
    return r
    }

    let dniletra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'] 
    let letraDni=dniletra.splice(calculo(dni),1)
    console.log(letraDni)
}

letraCorrecta(5409054)