let numbers=[5,8,23,45,67,56,89]

//let cuatrados=numbers.map((item) =>{return item*item})/* es lo mismo */
let cuatrados=numbers.map(item => item*item)

let sumaTotal=0
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    //sumatotal=sumatotal+element/* que es lo mismo que la linea siguiente */
    sumatotal+=item
}

let sumaCuadrados=0
cuatrados.forEach(item => sumaCuadrados+=item)

let numbersPares = numbers.filter(item => !(item%2))
let numbersInpares = numbers.filter(item => (item%2))
console.log(cuatrados)
console.log(sumatotal)
console.log(sumaCuadrados)
console.log(numbersPares)
console.log(numbersInpares)