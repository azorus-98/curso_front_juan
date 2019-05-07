function areaCirculo( radio=0 ) {
    let area=Math.PI*radio*radio
    return area.toFixed(3)
    //return area.toPrecision(8)/* esto no se usa ya que esto tb englova el numero entero */
}
console.log(areaCirculo(2))

function numeroAlAzar() {
 return parseInt(Math.random()*10)    
}

for (let i = 0; i < 20; i++) {
    console.log(numeroAlAzar())
    
}